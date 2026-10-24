# Wobi · Digital twin

Simulação em MuJoCo do Wobi. Há dois robôs:

- **`wobi` (por defeito): Wobi com rodas escondidas nos pés.** Duas rodas com motor N20 deslocam-no; dois
  servos balançam o corpo como um pinguim e outros dois mexem a cabeça. Não há aprendizagem: tração
  diferencial, rampas de aceleração e ondas seno para o balanço. As formas são provisórias até a casca
  existir em Onshape.
- **`duck`: Open Duck Mini v2**, o bípede open source, com a política de marcha pré-treinada a correr no CPU.

## Instalar (macOS, Linux ou Windows)

```bash
cd robot/digital-twin
python3 -m venv .venv && source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

## Usar

```bash
python run.py test                   # teste rápido: fica de pé, anda, roda, manobras bruscas, não cai
python run.py view                   # janela 3D (no macOS usar: mjpython run.py view)
python run.py view --robot duck      # o mesmo com o pato bípede
python run.py record -o demo.mp4     # vídeo de uma missão de patrulha, sem janela
python run.py record --telemetry t.json   # e guarda o estado do robô em cada passo
```

No modo `view`: setas para andar, Q/E para rodar, H alterna para controlar a cabeça, R recomeça.
Em servidores sem ecrã, `record` precisa de `MUJOCO_GL=osmesa` (ou `egl`).

Para o pato há duas cenas: `--scene flat` (por defeito) ou `--scene flat_backlash` (simula a folga das
engrenagens dos servos, mais parecido com o robô real).

Parâmetros do Wobi com rodas, em `wobi_twin/wheels.py`: velocidade máxima 0,3 m/s, aceleração 0,5 m/s²,
aceleração lateral 0,3 m/s² nas curvas, um balanço de 0,15 rad a cada 20 cm. Um balanço mais rápido que
isto faz o robô levantar uma roda e tombar na simulação; é a primeira coisa a confirmar no protótipo.

## Como está organizado

| Caminho | O que é |
| --- | --- |
| `wobi_twin/wheels.py` | `WobiWheelsTwin`: Wobi com rodas nos pés, tração diferencial e balanço do corpo |
| `wobi_twin/twin.py` | `DuckTwin`: carrega o pato, corre a física a 500 Hz e a política a 50 Hz. Define também `Command` (velocidade e pose da cabeça) e `State` (posição, juntas, contacto com o chão, se caiu), comuns aos dois |
| `models/wobi_wheels/` | Modelo MJCF do Wobi com rodas (formas simples, sem malhas) |
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
3. Quando a casca do Wobi estiver em Onshape, exportar com `onshape-to-robot` e substituir as formas
   provisórias de `models/wobi_wheels/` pelas malhas reais, com as massas medidas.
4. Acrescentar sensores simulados: a câmara dos olhos já existe (`eyes`); faltam ToF e radar.

## Licença

O modelo, as malhas e a política do pato vêm do projeto Open Duck Mini (Apache 2.0). Detalhes em `NOTICE`.
