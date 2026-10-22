# Site Dani & Clara Brinquedos

Landing page de aluguel, venda e manutenção de brinquedos infláveis no Rio de Janeiro.
É um site estático (HTML, CSS e JS puros), sem banco de dados, sem login e sem servidor.
Não coleta nenhum dado: o formulário só monta a mensagem e abre o WhatsApp.

## Organização da pasta

```
site-daniclara/
├── site/                  ← O SITE. Só esta pasta vai para a hospedagem.
│   ├── index.html         página principal (conteúdo + SEO + dados estruturados)
│   ├── 404.html           página de erro
│   ├── css/style.css      visual (cores em :root)
│   ├── js/main.js         menu, filtros do catálogo, formulário → WhatsApp
│   ├── img/               logo, ícones, imagem de compartilhamento
│   │   ├── brinquedos/    fotos dos brinquedos
│   │   └── ilustracoes/   ilustrações provisórias (Kid Play e Área Baby)
│   ├── robots.txt, sitemap.xml, site.webmanifest
│   ├── vercel.json        segurança e cache na Vercel
│   ├── _headers           segurança e cache na Netlify / Cloudflare Pages
│   └── .htaccess          segurança e cache em Hostinger, HostGator, Locaweb (Apache)
├── trocar-dominio.ps1     troca o domínio em todos os arquivos de uma vez
├── previa-cliente/        PDF e imagens com marca d'água (não publicar)
├── referencias/           materiais de apoio (não publicar)
├── CLAUDE.md, memoria.md, specs/   contexto do projeto para o Claude
└── README.md              este arquivo
```

## 1. Antes de hospedar: definir o domínio

Hoje o site usa `https://www.danieclarabrinquedos.com.br` como exemplo.
Quando o domínio estiver definido:

1. Clique com o botão direito em `trocar-dominio.ps1` e escolha **"Executar com o PowerShell"**.
2. Digite o domínio completo, por exemplo `https://www.danieclara.com.br`, e aperte Enter.

O script troca o endereço no `index.html`, `404.html`, `robots.txt` e `sitemap.xml`.

## 2. Hospedar (escolha uma opção)

### Vercel (recomendado, grátis)
- **Pelo GitHub (atualiza sozinho a cada alteração):** envie a pasta do projeto para um repositório.
  Na Vercel: *Add New → Project* → importe o repositório → em **Root Directory** escolha `site` → *Deploy*.
- **Pelo terminal:** `npm i -g vercel`, depois `cd site` e `vercel --prod`.
- Domínio: *Project → Settings → Domains*.

### Netlify ou Cloudflare Pages (grátis)
- Netlify: em https://app.netlify.com/drop, **arraste a pasta `site`** para a página. Pronto.
- Cloudflare Pages: *Create → Pages → Upload assets* → envie a pasta `site`.

### Hostinger, HostGator, Locaweb (hospedagem paga com cPanel)
1. Abra o **Gerenciador de Arquivos** e entre na pasta `public_html`.
2. Envie **o conteúdo** da pasta `site` (os arquivos de dentro, não a pasta em si),
   inclusive o `.htaccess`. Ele é um arquivo oculto: ative "mostrar arquivos ocultos" se não aparecer.
3. Ative o SSL grátis (HTTPS) no painel da hospedagem.

## 3. Depois de hospedar: aparecer no Google

1. **Google Search Console** (https://search.google.com/search-console): adicione o domínio,
   confirme a propriedade e envie `https://SEU-DOMINIO/sitemap.xml` em *Sitemaps*.
2. **Perfil da Empresa no Google** (https://business.google.com): é o que mais traz clientes na
   busca local ("aluguel de pula-pula perto de mim"). Use **exatamente** o mesmo nome, endereço e
   telefone do site, coloque o link do site, fotos reais e peça avaliações aos clientes.
3. Coloque o link do site na bio do Instagram.
4. Teste em https://search.google.com/test/rich-results e em https://pagespeed.web.dev.

## Como fazer alterações

- **Ver o site no computador:** abra `site/index.html` no navegador. Ou, pelo Claude, peça "abre o site"
  (ele usa um servidor local em http://localhost:5520).
- **Trocar a foto de um brinquedo:** salve a foto em `site/img/brinquedos/` com um nome simples, sem espaços
  e sem acento (ex.: `kid-play.jpg`). Use foto horizontal 4:3, com cerca de 800×600 px e até 200 KB
  (dá para comprimir em https://squoosh.app). No `index.html`, troque o `src` do card e atualize o `alt`
  com uma descrição real da foto. Depois inclua a foto no `sitemap.xml`.
- **Adicionar um brinquedo:** copie um bloco `<li class="card">…</li>` inteiro no `index.html` e edite.
  O atributo `data-cat` define os filtros: `inflaveis`, `kids`, `radicais` e `jogos`.
  Acrescente também uma opção no formulário (`name="brinquedo"`).
- **Mudar uma pergunta do FAQ:** mude nos **dois** lugares do `index.html`, a lista `<details>` visível
  e o bloco `FAQPage` no `<head>`. O texto precisa ser igual.
- **Trocar telefone:** procure por `5521982118875` e `98211-8875` no `index.html` e em `js/main.js`.

## Segurança

- Nenhum dado é armazenado nem enviado a servidores; não há backend para ser invadido.
- `vercel.json`, `_headers` e `.htaccess` aplicam as mesmas proteções, conforme a hospedagem:
  Content-Security-Policy restritiva (só scripts do próprio site), HTTPS obrigatório (HSTS),
  bloqueio de clickjacking, `nosniff`, `Referrer-Policy`, `Permissions-Policy` e COOP.
  **Se mudar um deles, mude os três.**
- Links externos usam `rel="noopener noreferrer"`. O formulário valida e limita o tamanho dos campos.
- **Não use** `style="..."`, `onclick="..."` nem `<script>` direto no HTML: a política de segurança
  bloqueia. Coloque estilos em `css/style.css` e scripts em `js/main.js`.
- Para usar Google Analytics, Meta Pixel ou outro script externo, será preciso liberar o domínio dele na CSP.

## Textos para revisar

Alguns textos foram escritos com base no Instagram e precisam ser confirmados:
"Entrega e montagem", "Higienizados a cada evento", "empresa familiar",
o "+12 tipos de brinquedos", as respostas do FAQ (frete, antecedência e chuva)
e a lista de bairros e cidades atendidos.
