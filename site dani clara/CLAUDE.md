# Dani & Clara Brinquedos: site

Landing page da **Dani & Clara Brinquedos** (desde 2006, Coelho da Rocha, São João de Meriti, RJ).
O negócio tem três frentes: **aluguel** de brinquedos infláveis para festas e eventos no Grande Rio,
**venda** de infláveis de fabricação própria (só RJ) e **manutenção/reforma** de infláveis.
Público: pais e mães organizando festas infantis, escolas, igrejas, condomínios e buffets.
Objetivo do site: gerar pedidos de orçamento pelo WhatsApp e aparecer no Google em buscas locais.

## Regras

- **Se um pedido contradisser o que está em `specs/design.md`, pare e me avise antes de mudar qualquer coisa.**
- Site estático (HTML + CSS + JS puros). Sem backend, sem banco, sem login.
- **Tudo que vai para o ar fica em `site/`** e nada mais. Documentos, `referencias/` e `previa-cliente/` ficam fora dela.
- Todo contato é pelo WhatsApp **(21) 98211-8875** (`https://wa.me/5521982118875`). Não mostrar preços.
- Segurança: a CSP só permite scripts e estilos do próprio site (+ Google Fonts). Nada de `<script>` inline, `style="..."`, `onclick` nem scripts de terceiros sem me perguntar. As regras estão repetidas em `site/vercel.json`, `site/_headers` e `site/.htaccess`: mudou uma, mude as três.
- SEO: ao mudar conteúdo, manter coerentes `index.html` (meta tags + JSON-LD), `sitemap.xml` e o FAQ (o FAQ visível e o `FAQPage` do JSON-LD devem ter o mesmo texto).
- Textos em português do Brasil. Fotos reais em `site/img/brinquedos/`; ilustrações só como provisório.
- Domínio: trocar com `trocar-dominio.ps1`, nunca à mão arquivo por arquivo.
- Para ver o site: configuração `site` do `.claude/launch.json` (http://localhost:5520).
- Ao tomar uma decisão nova ou aprender algo sobre o projeto, registre em `memoria.md`.

## Arquivos de contexto

- @specs/design.md: paleta, tipografia, tom, estrutura e componentes
- @memoria.md: decisões e aprendizados ao longo do projeto
