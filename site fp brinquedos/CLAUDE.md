# FP Brinquedos & Diversão: site

Landing page da **FP Brinquedos & Diversão** (Zona Oeste do Rio de Janeiro; Instagram @fpbrinquedos).
Aluguel de brinquedos infláveis (inclusive a **Linha Luxo**, toda branca), jogos de mesa, estações
(Fini, pipoca + algodão-doce), karaokê, som profissional com DJ e **SPA infantil**.
Público: pais e mães organizando festas, principalmente em Bangu, Realengo e Padre Miguel.
Objetivo do site: gerar pedidos de orçamento pelo WhatsApp e aparecer no Google em buscas locais.

## Regras

- **Se um pedido contradisser o que está em `specs/design.md`, pare e me avise antes de mudar qualquer coisa.**
- Site estático (HTML + CSS + JS puros). Sem backend, sem banco, sem login.
- **Tudo que vai para o ar fica em `site/`** e nada mais. `referencias/` e documentos ficam fora dela.
- WhatsApp principal (WhatsApp Business): **(21) 99008-9078** (`https://wa.me/5521990089078`).
  Telefones extras: (21) 98647-7908 e (21) 99733-7104.
- Preços: só os que a FP divulga (pula-pula e piscina de bolinhas a partir de R$ 100; mesa de totó a partir de R$ 140).
  Os outros aparecem como "Valor no WhatsApp". Nunca inventar preço.
- Segurança: a CSP só permite scripts e estilos do próprio site (+ Google Fonts). Nada de `<script>` inline
  (o JSON-LD é a única exceção, porque não executa), `style="..."`, `onclick` nem scripts de terceiros sem me perguntar.
  As regras estão repetidas em `site/vercel.json`, `site/_headers` e `site/.htaccess`: mudou uma, mude as três.
- SEO: ao mudar conteúdo, manter coerentes `index.html` (meta tags + JSON-LD), `sitemap.xml` e o FAQ
  (o FAQ visível e o `FAQPage` do JSON-LD devem ter o mesmo texto).
- Textos em português do Brasil, no tom da FP ("a gente", "chama no Zap").
- Domínio: trocar com `trocar-dominio.ps1`, nunca à mão arquivo por arquivo.
- Ao tomar uma decisão nova ou aprender algo sobre o projeto, registre em `memoria.md`.

## Arquivos de contexto

- @specs/design.md: paleta, tipografia, tom, estrutura e componentes
- @memoria.md: decisões e aprendizados ao longo do projeto
