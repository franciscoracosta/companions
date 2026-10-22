import { brand } from '../../config';
import type { LegalDict } from './types';

const B = brand.name;
const E = brand.email;

const pt: LegalDict = {
  privacy: {
    title: 'Política de Privacidade',
    intro: `Esta política explica que dados pessoais a ${B} recolhe através deste site, porque o faz e quais são os seus direitos ao abrigo do Regulamento Geral sobre a Proteção de Dados (RGPD).`,
    sections: [
      { h: 'Responsável pelo tratamento', p: [`${brand.legalEntity}, ${brand.country}. Contacto: ${E}.`] },
      { h: 'Que dados recolhemos', p: ['Quando faz uma pré-encomenda: o seu email, o modelo escolhido e a língua do site. Não pedimos dados de pagamento nesta fase.', 'O nosso fornecedor de alojamento regista dados técnicos mínimos (como o endereço IP) para garantir a segurança e o funcionamento do site.'] },
      { h: 'Para que usamos os dados', p: ['Para gerir a sua reserva, avisá-lo quando abrirmos os pagamentos e enviar novidades sobre o produto. Não vendemos nem partilhamos os seus dados para publicidade.'] },
      { h: 'Fundamento legal', p: ['O seu consentimento, dado ao submeter o formulário. Pode retirá-lo a qualquer momento, sem afetar o tratamento feito até essa data.'] },
      { h: 'Subcontratantes', p: ['Alojamento do site: Vercel Inc. Envio de emails: Resend Inc. Ambos estão vinculados a acordos de tratamento de dados e a cláusulas contratuais-tipo da UE para transferências internacionais.'] },
      { h: 'Durante quanto tempo', p: ['Guardamos os seus dados até cancelar a reserva ou pedir a remoção e, no máximo, até 24 meses após o lançamento comercial.'] },
      { h: 'Os seus direitos', p: [`Pode pedir acesso, retificação, apagamento, limitação ou portabilidade dos seus dados, e opor-se ao seu tratamento, escrevendo para ${E}. Tem também o direito de apresentar reclamação à Comissão Nacional de Proteção de Dados (CNPD).`] },
    ],
  },
  cookies: {
    title: 'Política de Cookies',
    intro: `O site da ${B} foi feito para respeitar a sua privacidade. Não usamos cookies de publicidade nem de rastreamento.`,
    sections: [
      { h: 'O que guardamos no seu dispositivo', p: ['Apenas a sua preferência de língua, guardada no armazenamento local do navegador. Não é partilhada com ninguém e pode apagá-la nas definições do navegador.'] },
      { h: 'Cookies de terceiros', p: ['Não usamos cookies de terceiros. As fontes e os scripts são servidos a partir do nosso próprio domínio.'] },
      { h: 'Alterações', p: ['Se no futuro adicionarmos ferramentas de estatística ou marketing, vamos pedir o seu consentimento prévio através de um aviso no site e atualizar esta política.'] },
    ],
  },
  terms: {
    title: 'Termos da Pré-encomenda',
    intro: `Estes termos aplicam-se às reservas feitas através deste site para os robôs ${B}.`,
    sections: [
      { h: 'O que é uma pré-encomenda', p: ['Uma pré-encomenda é uma reserva do seu lugar na fila de produção. Neste momento é gratuita e não constitui um contrato de compra.'] },
      { h: 'Depósito', p: ['Quando abrirmos os pagamentos, vamos convidá-lo a pagar um depósito. O depósito é totalmente reembolsável a qualquer momento antes do envio do robô.'] },
      { h: 'Preços, datas e especificações', p: ['Os preços apresentados são preços de lançamento estimados. As datas de entrega e as especificações técnicas são previsões e podem mudar durante o desenvolvimento. Avisaremos sempre por email antes de qualquer pagamento.'] },
      { h: 'Cancelamento', p: [`Pode cancelar a sua reserva a qualquer momento escrevendo para ${E}. Após a entrega, mantém o direito de livre resolução de 14 dias previsto na lei.`] },
      { h: 'Uso do produto', p: [`Os robôs ${B} não são dispositivos médicos nem substituem a supervisão de um adulto ou cuidados profissionais.`] },
      { h: 'Lei aplicável', p: ['Estes termos regem-se pela lei portuguesa, sem prejuízo dos direitos que a lei do seu país de residência lhe garanta enquanto consumidor.'] },
    ],
  },
};

export default pt;
