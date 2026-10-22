import { brand } from '../../config';
import type { LegalDict } from './types';

const B = brand.name;
const E = brand.email;

const br: LegalDict = {
  privacy: {
    title: 'Política de Privacidade',
    intro: `Esta política explica quais dados pessoais a ${B} coleta por este site, por que faz isso e quais são os seus direitos segundo a LGPD e o RGPD europeu.`,
    sections: [
      { h: 'Controlador', p: [`${brand.legalEntity}, ${brand.country}. Contato: ${E}.`] },
      { h: 'Quais dados coletamos', p: ['Quando você faz uma pré-venda: seu e-mail, o modelo escolhido e o idioma do site. Não pedimos dados de pagamento nesta fase.', 'Nosso provedor de hospedagem registra dados técnicos mínimos (como o endereço IP) para garantir a segurança e o funcionamento do site.'] },
      { h: 'Para que usamos os dados', p: ['Para gerenciar sua reserva, avisar quando abrirmos os pagamentos e enviar novidades sobre o produto. Não vendemos nem compartilhamos seus dados para publicidade.'] },
      { h: 'Base legal', p: ['O seu consentimento, dado ao enviar o formulário. Você pode revogá-lo a qualquer momento.'] },
      { h: 'Operadores', p: ['Hospedagem do site: Vercel Inc. Envio de e-mails: Resend Inc. Ambos seguem acordos de tratamento de dados e cláusulas contratuais padrão para transferências internacionais.'] },
      { h: 'Por quanto tempo', p: ['Guardamos seus dados até você cancelar a reserva ou pedir a exclusão e, no máximo, até 24 meses após o lançamento comercial.'] },
      { h: 'Seus direitos', p: [`Você pode pedir acesso, correção, exclusão, portabilidade ou se opor ao tratamento dos seus dados escrevendo para ${E}. Também pode reclamar à ANPD (Brasil) ou à autoridade de proteção de dados do seu país.`] },
    ],
  },
  cookies: {
    title: 'Política de Cookies',
    intro: `O site da ${B} foi feito para respeitar a sua privacidade. Não usamos cookies de publicidade nem de rastreamento.`,
    sections: [
      { h: 'O que salvamos no seu dispositivo', p: ['Apenas a sua preferência de idioma, salva no armazenamento local do navegador. Ela não é compartilhada com ninguém e pode ser apagada nas configurações do navegador.'] },
      { h: 'Cookies de terceiros', p: ['Não usamos cookies de terceiros. As fontes e os scripts são servidos pelo nosso próprio domínio.'] },
      { h: 'Mudanças', p: ['Se no futuro adicionarmos ferramentas de estatística ou marketing, vamos pedir o seu consentimento antes, com um aviso no site, e atualizar esta política.'] },
    ],
  },
  terms: {
    title: 'Termos da Pré-venda',
    intro: `Estes termos valem para as reservas feitas por este site para os robôs ${B}.`,
    sections: [
      { h: 'O que é uma pré-venda', p: ['Uma pré-venda reserva o seu lugar na fila de produção. Neste momento ela é gratuita e não é um contrato de compra.'] },
      { h: 'Sinal', p: ['Quando abrirmos os pagamentos, vamos convidar você a pagar um sinal. O sinal é totalmente reembolsável a qualquer momento antes do envio do robô.'] },
      { h: 'Preços, prazos e especificações', p: ['Os preços mostrados são preços de lançamento estimados. Prazos de entrega e especificações técnicas são previsões e podem mudar durante o desenvolvimento. Sempre avisaremos por e-mail antes de qualquer cobrança.'] },
      { h: 'Cancelamento', p: [`Você pode cancelar sua reserva quando quiser escrevendo para ${E}. Após a entrega, você mantém o direito de arrependimento previsto em lei.`] },
      { h: 'Uso do produto', p: [`Os robôs ${B} não são dispositivos médicos e não substituem a supervisão de um adulto nem cuidados profissionais.`] },
      { h: 'Lei aplicável', p: ['Estes termos seguem a lei portuguesa, sem prejuízo dos direitos garantidos a você como consumidor pela lei do seu país.'] },
    ],
  },
};

export default br;
