import { brand } from '../config';
import type { Dict } from './pt';

const B = brand.name;

const br: Dict = {
  meta: {
    title: `${B} · Robôs companheiros com inteligência artificial`,
    description: `${B} é uma família de pequenos robôs com IA que fazem companhia aos avós, cuidam dos pequenos e trazem alegria para casa. Pré-venda aberta.`,
  },
  nav: { lines: 'Robôs', how: 'Como funciona', roadmap: 'Cronograma', faq: 'Dúvidas', cta: 'Pré-venda', language: 'Idioma' },
  hero: {
    badge: 'Protótipo funcionando · Pré-venda aberta',
    titleA: 'Robôs pequenos.',
    titleB: 'Companhia gigante.',
    subtitle: `${B} é uma família de robôs com IA, do tamanho de uma caneca, que fazem companhia para os avós, ficam de olho nas crianças e animam a casa toda.`,
    cta: `Reservar o meu ${B}`,
    secondary: 'Conhecer os robôs',
    note: 'Sinal 100% reembolsável · Sem compromisso',
  },
  marquee: ['Detecção de quedas', 'Lembretes de remédio', 'Alertas de perigo', 'IA no próprio robô', 'Feito na Europa', 'Personalidade única', 'Privacidade em primeiro lugar', 'Peças impressas em 3D'],
  lines: {
    eyebrow: 'Uma família, três missões',
    title: `Escolha o ${B} certo para quem você ama.`,
    subtitle: 'Todos têm o mesmo coração: um corpo que anda e reage, olhos expressivos e uma IA que aprende a rotina da casa. O que muda é a missão.',
    from: 'a partir de',
    items: {
      care: {
        name: `${B} Care`,
        tagline: 'Para os avós',
        desc: 'Um companheiro paciente que conversa, lembra do remédio e avisa a família se algo não estiver bem.',
        features: ['Detecção de quedas e de inatividade', 'Lembretes de remédio e consultas', 'Videochamada com um toque', 'Conversa com voz calma e clara'],
      },
      guard: {
        name: `${B} Guard`,
        tagline: 'Para as crianças',
        desc: 'Um amigo de brincadeira que também é um guardião atento: detecta situações de risco e avisa você na hora.',
        features: ['Alertas de áreas perigosas', 'Monitoramento do sono e do choro do bebê', 'Histórias e jogos educativos', 'Notificações em tempo real para os pais'],
      },
      play: {
        name: `${B} Play`,
        tagline: 'Para a diversão',
        desc: 'Dança, faz caretas, reage ao seu humor e aprende truques novos. O robô de mesa com mais personalidade do mundo.',
        features: ['Mais de 100 expressões e danças', 'Reage a voz, toque e gestos', 'Programável em blocos ou Python', 'Capinhas personalizáveis impressas em 3D'],
      },
    },
  },
  videos: {
    eyebrow: `Em casa`,
    title: `Veja o ${B} no dia a dia.`,
    subtitle: `Três momentos, três missões. Uma prévia de como cada ${B} vai fazer parte da sua casa.`,
    label: `Simulação conceitual`,
    note: `Vídeos gerados por computador para ilustrar o conceito. O produto final pode ser diferente.`,
  },
  how: {
    eyebrow: 'Por dentro',
    title: 'Simples por fora. Muito inteligente por dentro.',
    subtitle: `Cada ${B} combina robótica de precisão com IA que roda no próprio robô, para responder rápido e manter seus dados em casa.`,
    items: [
      { title: 'IA no próprio robô', text: 'Visão e voz processadas localmente. As imagens nunca saem de casa sem sua autorização.' },
      { title: 'Anda e se equilibra', text: 'Pernas com motores de precisão e equilíbrio ativo, para circular pela casa com naturalidade.' },
      { title: 'App para a família toda', text: 'Alertas, rotinas e configurações em um único app, compartilhado com quem precisa saber.' },
      { title: 'Feito para durar', text: 'Peças modulares, substituíveis e impressas em 3D. Atualizações gratuitas durante toda a vida útil.' },
    ],
  },
  trust: {
    title: 'A confiança já vem de fábrica.',
    items: [
      { title: 'Privacidade por padrão', text: 'Processamento local, dados criptografados e em conformidade com a LGPD e o RGPD.' },
      { title: 'Projetado na Europa', text: 'Criado e testado em Portugal, com componentes certificados.' },
      { title: 'Reserva sem risco', text: 'Sinal reembolsável a qualquer momento, até o envio.' },
    ],
  },
  roadmap: {
    eyebrow: 'Cronograma',
    title: 'Do protótipo até a sua casa.',
    steps: [
      { date: '2026', title: 'Protótipo funcionando', text: `Os primeiros ${B} já andam, enxergam e conversam no nosso laboratório.`, done: true },
      { date: 'Agora', title: 'Pré-venda aberta', text: 'Garanta seu lugar no primeiro lote com um sinal reembolsável.', done: true },
      { date: '2º tri 2027', title: 'Programa beta', text: `Famílias selecionadas testam o ${B} em casa e ajudam a ajustar cada detalhe.`, done: false },
      { date: '4º tri 2027', title: 'Primeiras entregas', text: `Os primeiros ${B} chegam na casa de quem reservou primeiro.`, done: false },
    ],
  },
  preorder: {
    eyebrow: 'Pré-venda',
    title: 'Garanta seu lugar no primeiro lote.',
    subtitle: `Escolha seu ${B} e deixe seu e-mail. Você só paga o sinal quando abrirmos os pagamentos, e pode cancelar quando quiser.`,
    deposit: 'Sinal',
    choose: 'Escolher',
    selected: 'Escolhido',
    emailLabel: 'Seu e-mail',
    emailPlaceholder: 'nome@exemplo.com.br',
    button: 'Fazer pré-venda',
    consent: 'Ao continuar, você aceita a nossa',
    consentLink: 'Política de Privacidade',
    success: 'Valeu! Você está na lista. Em breve mandamos novidades.',
    perks: ['Preço de lançamento garantido', 'Acesso prioritário ao programa beta', 'Capinha exclusiva do primeiro lote'],
  },
  faq: {
    title: 'Dúvidas frequentes',
    items: [
      { q: `Quando o ${B} chega?`, a: 'As primeiras entregas estão previstas para o último trimestre de 2027. Quem reserva primeiro recebe primeiro, e vamos mandando novidades por e-mail.' },
      { q: 'O sinal é mesmo reembolsável?', a: 'Sim. Você pode pedir o reembolso total do sinal a qualquer momento até o robô ser enviado, sem burocracia.' },
      { q: `O ${B} grava a minha casa?`, a: 'Não. Visão e voz são processadas no próprio robô. Só alertas e dados mínimos vão para o app, sempre criptografados, e você pode desligar a câmera quando quiser.' },
      { q: 'Precisa de internet?', a: 'As funções principais funcionam sem internet. O Wi-Fi serve para enviar alertas ao app, fazer videochamadas e receber atualizações.' },
      { q: `O ${B} Care substitui um cuidador?`, a: `Não. O ${B} é um companheiro e um apoio, não um dispositivo médico. Ajuda a manter rotinas e a família informada, mas não substitui cuidados profissionais.` },
      { q: 'Posso trocar de modelo depois de reservar?', a: 'Claro. Você pode trocar de modelo até abrirmos os pagamentos finais.' },
    ],
  },
  footer: {
    tagline: 'Robôs companheiros para a família toda.',
    rights: 'Todos os direitos reservados.',
    contact: 'Contato',
    legal: 'Legal',
    privacy: 'Privacidade',
    cookies: 'Cookies',
    terms: 'Termos da pré-venda',
    made: 'Feito com carinho em Portugal',
    back: 'Voltar ao início',
    updated: 'Última atualização',
  },
};

export default br;
