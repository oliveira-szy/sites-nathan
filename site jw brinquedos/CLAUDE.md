# JW Festas e Eventos: site

Landing page da **JW Festas e Eventos** (Instagram @jw_festas), locação de brinquedos infláveis em
Campo Grande, Rio de Janeiro - RJ. Frentes: **aluguel de infláveis**, **lanches/pipoca** e **festa completa** (combos, jogos).
Público: pais e mães organizando festas infantis, escolas, igrejas, condomínios e empresas.
Objetivo do site: gerar pedidos de orçamento pelo WhatsApp e aparecer no Google em buscas locais.

## Regras

- **Se um pedido contradisser o que está em `specs/design.md`, pare e me avise antes de mudar qualquer coisa.**
- Site estático (HTML + CSS + JS puros). Sem backend, sem banco, sem login.
- **Tudo que vai para o ar fica em `site/`** e nada mais. Documentos, `referencias/` e `hospedagem-alternativa/` ficam fora dela.
- Todo contato é pelo WhatsApp **(21) 96475-6775** (`https://wa.me/5521964756775`). Não mostrar preços.
- Segurança: a CSP só permite scripts e estilos do próprio site (+ Google Fonts). Nada de `<script>` inline, `style="..."`, `onclick` nem scripts de terceiros sem perguntar. A hospedagem é a **Vercel** e as regras ficam em `site/vercel.json`. Cópias para outras hospedagens ficam fora do site, em `hospedagem-alternativa/` (`_headers` para Netlify/Cloudflare, `.htaccess` para Apache): mudou a CSP no `vercel.json`, mude lá também.
- SEO: ao mudar conteúdo, manter coerentes `index.html` (meta tags + JSON-LD), `sitemap.xml` e o FAQ (o FAQ visível e o `FAQPage` do JSON-LD devem ter o mesmo texto).
- Textos em português do Brasil. Não afirmar nada que a JW não confirmou (ver pendências em `memoria.md`).
- Domínio: trocar com `trocar-dominio.ps1`, nunca à mão arquivo por arquivo.
- Para ver o site: `.claude/serve.ps1` (http://localhost:5530).
- Ao tomar uma decisão nova ou aprender algo sobre o projeto, registre em `memoria.md`.

## Arquivos de contexto

- @specs/design.md: paleta, tipografia, tom, estrutura e componentes
- @memoria.md: decisões e aprendizados ao longo do projeto
