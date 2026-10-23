# Wobi · Digital twin

Simulação em MuJoCo da plataforma base do Wobi. Por agora o gémeo digital é o **Open Duck Mini v2**
(o robô de que vamos partir), com a política de marcha pré-treinada a correr no CPU. Quando a casca e a
mecânica do Wobi existirem em Onshape, trocamos o modelo e o resto do código mantém-se.

## Instalar (macOS, Linux ou Windows)

```bash
cd robot/digital-twin
python3 -m venv .venv && source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

## Usar

```bash
python run.py test                   # teste rápido: fica de pé, anda 0,5 m, roda, não cai
python run.py view                   # janela 3D (no macOS usar: mjpython run.py view)
python run.py record -o demo.mp4     # vídeo de uma missão de patrulha, sem janela
python run.py record --telemetry t.json   # e guarda o estado do robô em cada passo
```

No modo `view`: setas para andar, Q/E para rodar, H alterna para controlar a cabeça, R recomeça.
Em servidores sem ecrã, `record` precisa de `MUJOCO_GL=osmesa` (ou `egl`).

Cenas: `--scene flat` (por defeito) ou `--scene flat_backlash` (simula a folga das engrenagens dos servos,
mais parecido com o robô real).

## Como está organizado

| Caminho | O que é |
| --- | --- |
| `wobi_twin/twin.py` | `DuckTwin`: carrega o modelo, corre a física a 500 Hz e a política a 50 Hz. Recebe um `Command` (velocidade e pose da cabeça) e devolve um `State` (posição, juntas, pés no chão, se caiu) |
| `run.py` | Linha de comandos: `view`, `record`, `test` e a missão de exemplo |
| `models/open_duck_mini_v2/` | Modelo MJCF e malhas STL do Open Duck Mini v2 |
| `policies/` | Política de marcha (ONNX) e movimento de referência usado para a fase do passo |

`Command` e `State` são o contrato entre simulação e robô real: o mesmo comando que a app ou o
comportamento envia ao gémeo será enviado ao runtime do robô (Raspberry Pi), e a telemetria do robô
real terá a forma de `State`, para compararmos simulação e realidade lado a lado.

## Próximos passos

1. Montar o clone físico e correr o [Open_Duck_Mini_Runtime](https://github.com/apirrone/Open_Duck_Mini_Runtime)
   com a mesma política; comparar a telemetria com a deste gémeo.
2. Treinar políticas próprias com o [Open_Duck_Playground](https://github.com/apirrone/Open_Duck_Playground)
   (precisa de GPU NVIDIA, local ou na cloud).
3. Quando o modelo Wobi estiver em Onshape, exportar com `onshape-to-robot` para MJCF, pô-lo em
   `models/wobi_core/` e voltar a treinar a marcha para a nova massa e geometria.
4. Acrescentar a base de rodas (Guard/Care) e sensores simulados: câmara, ToF, radar.

## Licença

Modelo, malhas e política vêm do projeto Open Duck Mini (Apache 2.0). Detalhes em `NOTICE`.
