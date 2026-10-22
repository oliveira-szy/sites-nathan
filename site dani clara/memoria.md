# Memória do projeto

Decisões e aprendizados, do mais antigo para o mais novo. Acrescente sempre no fim.

## 2026-09-30: primeira versão do site

**Decisões do cliente**
- Pedidos de orçamento **só pelo WhatsApp**: site 100% estático, sem backend. O formulário apenas monta a mensagem.
- Visual **claro e vibrante**, nas cores da Dani & Clara, com estrutura inspirada na Fonseca Toys.
- Hospedagem na **Vercel**.
- Negócio: **aluguel + venda só no RJ** (a venda não é para outros estados).
- Área de atendimento: **todo o Grande Rio** (Baixada, cidade do Rio, Niterói e São Gonçalo).
- **Sem preços** no site, só "Pedir orçamento".
- WhatsApp confirmado: (21) 98211-8875.

**Dados levantados no Instagram**
- Perfis: @danieclarabrinquedos e @daniclara.manutencaobrinquedos (manutenção de infláveis).
- Endereço: Rua Ametista, Lote 20, Quadra 12, Coelho da Rocha, São João de Meriti - RJ, 25550-460.
- Atuam desde 2006.

**Fotos**
- As fotos dos brinquedos foram recortadas do print do Instagram (`referencias/`), com cerca de 280px de largura.
  Ficam um pouco borradas em telas de alta resolução: trocar pelas originais quando o cliente enviar.
- Kid Play e Área Baby ainda usam ilustrações (`img/ilustracoes/`): a única foto de cada um tem texto por cima.
- "Pula-pula Castelo" virou "Pula-pula Leão" (é a foto que existe). Entraram "Jacaré" e "Circuito do Leão".

**Pendências**
- Confirmar o domínio: hoje o site usa `https://www.danieclarabrinquedos.com.br` como exemplo.
- Confirmar textos supostos: "Entrega e montagem", "Higienizados a cada evento", "empresa familiar",
  "+12 tipos de brinquedos", respostas do FAQ (frete, antecedência, chuva) e a lista de bairros.
- Horário de funcionamento: não encontrado, então ficou fora do site e do JSON-LD.
- Depois de publicar: Google Search Console (enviar o sitemap) e Perfil da Empresa no Google.

**Aprendizados técnicos**
- Não há Node nem Python na máquina. Imagens são processadas com PowerShell (`System.Drawing`).
- Para ver o site localmente, use a configuração `site` do `.claude/launch.json` (servidor PowerShell na porta 5520).
- `window.open(url, '_blank', 'noopener')` sempre retorna `null`; por isso o JS abre a janela e depois zera o `opener`.

## 2026-09-30: prévia para o cliente

- A prévia foi enviada **só como imagens + PDF** (sem código), com marca d'água "PRÉVIA • NÃO AUTORIZADO PARA USO" aplicada nos pixels. Arquivos em `previa-cliente/`.
- Como gerar de novo: Chrome headless (`C:\Program Files\Google\Chrome\Application\chrome.exe`) com `--screenshot`/`--print-to-pdf`. Em uma cópia do site, desligar animações e o `.reveal` e tirar `loading="lazy"`.
- O Chrome headless não aceita janela com menos de 500px: capturar o celular com 500px, em partes (`translateY`), e emendar. No PowerShell, `$H` e `$h` são a mesma variável.

## 2026-09-30: site pronto para hospedar

- Tudo que vai para o ar foi movido para **`site/`**. O `.vercelignore` deixou de existir; na Vercel, usar Root Directory = `site`.
- Para funcionar em qualquer hospedagem, a pasta tem as mesmas proteções em `vercel.json` (Vercel), `_headers` (Netlify/Cloudflare) e `.htaccess` (Apache/Hostinger).
- Ilustrações não usadas foram para `referencias/ilustracoes-nao-usadas/`. Só Kid Play e Área Baby ainda usam ilustração.
- `trocar-dominio.ps1` troca o domínio no index, 404, robots e sitemap. Testado numa cópia; recusa domínio sem `https://`.
- A página 404 passou a ocupar a tela inteira (`.hero--full`).

