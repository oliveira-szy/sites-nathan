# JW Festas e Eventos: site

Site estático (HTML + CSS + JS puros) da JW Festas e Eventos. Tudo que vai para o ar está em **`site/`**.

## Ver no computador
```
powershell -ExecutionPolicy Bypass -File .claude/serve.ps1
```
Abra http://localhost:5530.

## Publicar na Vercel (passo a passo)
1. Crie uma conta em vercel.com (a conta pode ser da JW) e coloque este projeto no GitHub, **ou** use a CLI (`npx vercel`).
2. Em **Add New > Project**, importe o repositório.
3. Configure: **Framework Preset: Other**, **Root Directory: `site`**, Build Command e Output Directory em branco.
4. Clique em **Deploy**. O `site/vercel.json` já aplica os cabeçalhos de segurança (CSP, HSTS etc.) e o cache.
5. Em **Settings > Domains**, adicione o domínio da JW e siga as instruções de DNS da Vercel.
6. Com o domínio definido, rode `trocar-dominio.ps1` (troca em `index.html`, `robots.txt` e `sitemap.xml`) e publique de novo.

## Depois de publicar
- Testar o site em https://pagespeed.web.dev e os cabeçalhos em https://securityheaders.com.
- Google Search Console: adicionar o domínio e enviar `https://SEU-DOMINIO/sitemap.xml`.
- Perfil da Empresa no Google (o da JW em Campo Grande): colocar o endereço do site no perfil.
- Testar o botão de WhatsApp e o formulário de orçamento no celular.
- Testar o link de compartilhamento no WhatsApp (imagem `og-image.jpg`).

## Antes de entregar ao cliente (pendências em `memoria.md`)
- Trocar as fotos recortadas do Instagram pelas originais (`site/img/brinquedos/`).
- Pedir o logo em alta resolução (o atual tem 150 px).
- Confirmar domínio, horário, bairros atendidos, FAQ e o OK para os depoimentos.

## Estrutura
- `site/`: o que vai para o ar (`index.html`, `404.html`, `css/`, `js/`, `img/`, `robots.txt`, `sitemap.xml`, `site.webmanifest`, `vercel.json`).
- `hospedagem-alternativa/`: `_headers` (Netlify/Cloudflare) e `.htaccess` (Apache), para quem não usar a Vercel. **Não vão para o ar na Vercel.**
- `referencias/`, `specs/`, `memoria.md`: material de trabalho, fora do site.
