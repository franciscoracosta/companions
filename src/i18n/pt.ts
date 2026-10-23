import { brand } from '../config';

const B = brand.name;

const pt = {
  meta: {
    title: `${B} · Robôs companheiros com inteligência artificial`,
    description: `${B} é uma família de pequenos robôs com IA que fazem companhia aos avós, vigiam os mais pequenos e trazem alegria lá a casa. Pré-encomendas abertas.`,
  },
  nav: { lines: 'Robôs', how: 'Como funciona', roadmap: 'Calendário', faq: 'Perguntas', cta: 'Pré-encomendar', language: 'Língua' },
  hero: {
    badge: 'Protótipo funcional · Pré-encomendas abertas',
    titleA: 'Pequenos robôs.',
    titleB: 'Grande companhia.',
    subtitle: `${B} é uma família de robôs com IA, do tamanho de uma caneca, que fazem companhia aos avós, ficam de olho nos mais pequenos e animam a casa inteira.`,
    cta: `Reservar o meu ${B}`,
    secondary: 'Conhecer os robôs',
    note: 'Depósito 100% reembolsável · Sem compromisso',
  },
  marquee: ['Deteção de quedas', 'Lembretes de medicação', 'Alertas de perigo', 'IA no próprio robô', 'Feito na Europa', 'Personalidade única', 'Privacidade em primeiro lugar', 'Peças impressas em 3D'],
  lines: {
    eyebrow: 'Uma família, três missões',
    title: `Escolha o ${B} certo para quem mais gosta.`,
    subtitle: 'Todos partilham o mesmo coração: um corpo que caminha e reage, olhos expressivos e uma IA que aprende os hábitos da casa. O que muda é a missão.',
    from: 'desde',
    items: {
      care: {
        name: `${B} Care`,
        tagline: 'Para os avós',
        desc: 'Um companheiro paciente que conversa, lembra a medicação e avisa a família se algo não estiver bem.',
        features: ['Deteção de quedas e de inatividade', 'Lembretes de medicação e consultas', 'Videochamada com um toque', 'Conversa com voz calma e clara'],
      },
      guard: {
        name: `${B} Guard`,
        tagline: 'Para os mais pequenos',
        desc: 'Um amigo de brincadeira que também é um guardião atento: deteta situações de risco e avisa-o de imediato.',
        features: ['Alertas de zonas perigosas', 'Sono e choro do bebé monitorizados', 'Histórias e jogos educativos', 'Notificações em tempo real para os pais'],
      },
      play: {
        name: `${B} Play`,
        tagline: 'Para a diversão',
        desc: 'Dança, faz caretas, reage ao seu humor e aprende truques novos. O robô de secretária com mais personalidade do mundo.',
        features: ['Mais de 100 expressões e danças', 'Reage a voz, toque e gestos', 'Programável em blocos ou Python', 'Capas personalizáveis impressas em 3D'],
      },
    },
  },
  videos: {
    eyebrow: `Em casa`,
    title: `Veja o ${B} no dia a dia.`,
    subtitle: `Três momentos, três missões. Um vislumbre de como cada ${B} vai fazer parte da sua casa.`,
    label: `Simulação conceptual`,
    note: `Vídeos gerados por computador para ilustrar o conceito. O produto final pode ser diferente.`,
  },
  how: {
    eyebrow: 'Por dentro',
    title: 'Simples por fora. Muito inteligente por dentro.',
    subtitle: `Cada ${B} combina robótica de precisão com IA que corre no próprio robô, para responder depressa e manter os seus dados em casa.`,
    items: [
      { title: 'IA no próprio robô', text: 'Visão e voz processadas localmente. As imagens nunca saem de casa sem autorização.' },
      { title: 'Caminha e equilibra-se', text: 'Pernas com motores de precisão e equilíbrio ativo, para se mover com naturalidade pela casa.' },
      { title: 'App para toda a família', text: 'Alertas, rotinas e definições numa única app, partilhada por quem precisa de saber.' },
      { title: 'Feito para durar', text: 'Peças modulares, substituíveis e impressas em 3D. Atualizações gratuitas durante toda a vida útil.' },
    ],
  },
  trust: {
    title: 'A confiança vem de fábrica.',
    items: [
      { title: 'Privacidade por defeito', text: 'Processamento local, dados encriptados e conformidade com o RGPD.' },
      { title: 'Desenhado na Europa', text: 'Concebido e testado em Portugal, com componentes certificados.' },
      { title: 'Reserva sem risco', text: 'Depósito reembolsável a qualquer momento, até ao envio.' },
    ],
  },
  roadmap: {
    eyebrow: 'Calendário',
    title: 'Do protótipo até à sua casa.',
    steps: [
      { date: '2026', title: 'Protótipo funcional', text: `Primeiros ${B} a caminhar, ver e conversar no nosso laboratório.`, done: true },
      { date: 'Agora', title: 'Pré-encomendas abertas', text: 'Reserve o seu lugar na primeira série com um depósito reembolsável.', done: true },
      { date: 'T2 2027', title: 'Programa beta', text: `Famílias selecionadas testam o ${B} em casa e ajudam-nos a afinar cada detalhe.`, done: false },
      { date: 'T4 2027', title: 'Primeiras entregas', text: `Os primeiros ${B} chegam a casa de quem reservou primeiro.`, done: false },
    ],
  },
  preorder: {
    eyebrow: 'Pré-encomenda',
    title: 'Garanta o seu lugar na primeira série.',
    subtitle: `Escolha o seu ${B} e deixe o seu email. Só paga o depósito quando abrirmos os pagamentos, e pode cancelar quando quiser.`,
    deposit: 'Depósito',
    choose: 'Escolher',
    selected: 'Escolhido',
    emailLabel: 'O seu email',
    emailPlaceholder: 'nome@exemplo.pt',
    button: 'Pré-encomendar',
    consent: 'Ao continuar, aceita a nossa',
    consentLink: 'Política de Privacidade',
    success: 'Obrigado! Está na lista. Vamos enviar-lhe novidades em breve.',
    error: 'Não foi possível guardar o seu pedido. Tente novamente daqui a pouco.',
    perks: ['Preço de lançamento garantido', 'Acesso prioritário ao programa beta', 'Capa exclusiva da primeira série'],
  },
  faq: {
    title: 'Perguntas frequentes',
    items: [
      { q: `Quando é que o ${B} chega?`, a: 'As primeiras entregas estão previstas para o último trimestre de 2027. Quem reserva primeiro recebe primeiro, e vamos dando notícias por email ao longo do caminho.' },
      { q: 'O depósito é mesmo reembolsável?', a: 'Sim. Pode pedir o reembolso total do depósito a qualquer momento até o robô ser enviado, sem perguntas.' },
      { q: `O ${B} grava a minha casa?`, a: 'Não. A visão e a voz são processadas no próprio robô. Só são enviados alertas e dados mínimos para a app, sempre encriptados, e pode desligar a câmara quando quiser.' },
      { q: 'Precisa de internet?', a: 'As funções principais funcionam sem internet. A ligação Wi-Fi serve para enviar alertas para a app, fazer videochamadas e receber atualizações.' },
      { q: `O ${B} Care substitui um cuidador?`, a: `Não. O ${B} é um companheiro e um apoio, não um dispositivo médico. Ajuda a manter rotinas e a família informada, mas não substitui cuidados profissionais.` },
      { q: 'Posso mudar de modelo depois de reservar?', a: 'Claro. Pode trocar de modelo até abrirmos os pagamentos finais.' },
    ],
  },
  footer: {
    tagline: 'Robôs companheiros para toda a família.',
    rights: 'Todos os direitos reservados.',
    contact: 'Contacto',
    legal: 'Legal',
    privacy: 'Privacidade',
    cookies: 'Cookies',
    terms: 'Termos da pré-encomenda',
    made: 'Feito com carinho em Portugal',
    back: 'Voltar ao início',
    updated: 'Última atualização',
  },
};

export default pt;
export type Dict = typeof pt;
