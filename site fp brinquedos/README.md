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

## 2. Hospedar

- **Vercel** (recomendado): importe o repositório, Framework Preset **Other**, Root Directory **`site fp brinquedos/site`**.
- **Netlify / Cloudflare Pages**: arraste a pasta `site/` (o `_headers` já vai junto).
- **Hospedagem comum (Apache)**: envie o conteúdo de `site/` para `public_html` (o `.htaccess` já vai junto).

## 3. Depois de publicar

- Google Search Console: adicionar o domínio e enviar o `sitemap.xml`.
- Perfil da Empresa no Google: colocar o link do site.
- Colocar o link na bio do Instagram e no perfil do WhatsApp Business.
