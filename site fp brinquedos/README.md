# Site FP Brinquedos & Diversão

Landing page de aluguel de brinquedos para festas na Zona Oeste do Rio (Bangu, Realengo, Padre Miguel).
É um site estático (HTML, CSS e JS puros), sem banco de dados, sem login e sem servidor.
Não coleta nenhum dado: o formulário só monta a mensagem e abre o WhatsApp.

## Organização da pasta

```
site fp brinquedos/
├── site/                  ← O SITE. Só esta pasta vai para a hospedagem.
│   ├── index.html         página principal (conteúdo + SEO + dados estruturados)
│   ├── 404.html           página de erro
│   ├── css/style.css      visual (cores em :root)
│   ├── js/main.js         menu, "stories" do topo, filtros, formulário → WhatsApp
│   ├── img/brinquedos/    fotos dos brinquedos (recortadas das artes do Instagram)
│   ├── img/fotos/         fotos reais de festas e da equipe, SPA infantil
│   ├── img/               logo, ícones, imagem de compartilhamento
│   ├── robots.txt, sitemap.xml, site.webmanifest
│   ├── vercel.json        segurança e cache na Vercel
│   ├── _headers           segurança e cache na Netlify / Cloudflare Pages
│   └── .htaccess          segurança e cache em Hostinger, HostGator, Locaweb (Apache)
├── trocar-dominio.ps1     troca o domínio em todos os arquivos de uma vez
├── referencias/           prints e artes enviados pelo cliente (não publicar)
├── CLAUDE.md, memoria.md, specs/   contexto do projeto para o Claude
└── README.md              este arquivo
```

## 1. Antes de hospedar: definir o domínio

Hoje o site usa `https://www.fpbrinquedos.com.br` como exemplo. Quando o domínio estiver definido,
clique com o botão direito em `trocar-dominio.ps1` > **"Executar com o PowerShell"** e digite o domínio
completo (ex.: `https://www.fpbrinquedos.com.br`).

## 2. Hospedar na Vercel (passo a passo)

O site já está no GitHub, no repositório `oliveira-szy/sites-nathan`, pasta `site fp brinquedos/`.

1. Entre em [vercel.com](https://vercel.com) com a conta do GitHub (pode ser a conta da FP).
2. **Add New… > Project** e escolha o repositório `sites-nathan` (se ele não aparecer, clique em
   "Adjust GitHub App Permissions" e libere o repositório).
3. Configure:
   - **Project Name:** `fp-brinquedos`
   - **Framework Preset:** Other
   - **Root Directory:** clique em Edit e escolha `site fp brinquedos/site`
   - Build Command e Output Directory: deixe em branco
4. Clique em **Deploy**. Em menos de 1 minuto o site fica no ar em `fp-brinquedos.vercel.app`.
   O `site/vercel.json` já aplica os cabeçalhos de segurança (CSP, HSTS etc.) e o cache.
5. Domínio próprio: em **Settings > Domains**, adicione o domínio (ex.: `fpbrinquedos.com.br` e `www.fpbrinquedos.com.br`)
   e copie os registros de DNS que a Vercel mostrar para o lugar onde o domínio foi comprado (Registro.br, Hostinger etc.).
   Depois rode o `trocar-dominio.ps1` (passo 1) se o domínio for diferente do exemplo.

Cada alteração enviada para a branch `main` do GitHub atualiza o site sozinha.

**Outras hospedagens:** Netlify ou Cloudflare Pages (arraste a pasta `site/`, o `_headers` já vai junto) ou
hospedagem comum com Apache (envie o conteúdo de `site/` para `public_html`, o `.htaccess` já vai junto).

## 3. Depois de publicar

- Google Search Console: adicionar o domínio e enviar o `sitemap.xml`.
- Perfil da Empresa no Google: colocar o link do site.
- Colocar o link na bio do Instagram e no perfil do WhatsApp Business.
