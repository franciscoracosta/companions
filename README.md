# Wobi · landing page

Landing page multilingue da Wobi, uma família de robôs companheiros com IA (Care, Guard e Play).

- **Stack:** [Astro](https://astro.build) (site estático) + [GSAP](https://gsap.com) para animações de scroll.
- **Línguas:** pt-PT (`/pt/`), pt-BR (`/br/`), inglês, espanhol, francês, alemão e italiano. A raiz `/` redireciona para a língua do navegador.
- **Páginas legais:** `/<língua>/privacy/`, `/<língua>/cookies/` e `/<língua>/terms/`.

## Desenvolvimento

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera o site estático em dist/
```

## Onde mudar o quê

| O quê | Ficheiro |
| --- | --- |
| Nome da marca, email, preços e depósitos | `src/config.ts` |
| Textos do site, por língua | `src/i18n/<língua>.ts` |
| Políticas (privacidade, cookies, termos) | `src/i18n/legal/<língua>.ts` |
| Robôs (SVG animado) | `src/components/Robot.astro` |
| Cores, tipografia e animações base | `src/styles/global.css` |
| Interações (GSAP, olhos que seguem o rato, formulário) | `src/scripts/main.ts` |

Para acrescentar uma língua: adicionar o código em `locales` e `localeMeta` no `src/config.ts`, criar `src/i18n/<código>.ts` e `src/i18n/legal/<código>.ts`, e registá-los em `src/i18n/index.ts`. O TypeScript avisa se faltar algum texto.

## Deploy na Vercel

1. Na Vercel, **Add New → Project** e importar este repositório.
2. A Vercel deteta Astro automaticamente; não é preciso configurar nada.
3. Depois de ligar o domínio, atualizar `site` em `astro.config.mjs` e o `Sitemap` em `public/robots.txt`.

## Pendente

- **Formulário de pré-encomenda:** `api/preorder.ts` (Vercel Function) guarda o contacto na Resend (segmento "Wobi · Pré-encomendas", propriedades `wobi_model` e `wobi_locale`), envia um email de confirmação na língua do visitante e avisa `PREORDER_NOTIFY_TO`.
- **Email de contacto:** `hello@getwobi.com` é uma inbox da Resend. O webhook `api/inbound.ts` reencaminha cada email recebido para `PREORDER_NOTIFY_TO`. Variáveis na Vercel: `RESEND_API_KEY`, `RESEND_SEGMENT_ID`, `RESEND_WEBHOOK_SECRET`, `PREORDER_NOTIFY_TO`.
- **Textos legais:** são uma base. Devem ser revistos por um jurista antes de recolher dados reais.
