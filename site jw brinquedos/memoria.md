# Memória do projeto

Decisões e aprendizados, do mais antigo para o mais novo. Acrescente sempre no fim.

## 2026-10-02: primeira versão do site

**Decisões do cliente**
- Site 100% estático; orçamento só pelo WhatsApp (o formulário apenas monta a mensagem). Sem preços.
- Paleta: vermelho do logo dominante + azul-céu, amarelo e laranja de apoio.
- Serviços no site: aluguel de infláveis, lanches/pipoca e festa completa (combos, jogos). **Sem venda nem manutenção.**
- Mesma estrutura de pastas e de segurança do site da Dani & Clara (pasta separada, projeto independente).

**Dados levantados (Google Maps e Instagram)**
- Nome no Google: "JW FESTAS Locação de brinquedos". Instagram: @jw_festas (552 posts, ~8,7 mil seguidores).
- Endereço: R. José Albano, 130, Campo Grande, Rio de Janeiro - RJ, 23073-720.
- WhatsApp confirmado: (21) 96475-6775. Nota 4,5 no Google (11 avaliações): o site NÃO exibe a nota (decisão do cliente); só os depoimentos.
- Bio do Instagram: "Mais de 20 opções para todas as idades", "Entrega, montagem e desmontagem", "Faça seu orçamento no WhatsApp".
- Posts mencionam "monte seu combo, possibilidade de desconto" e "valor válido para Campo Grande; outras localidades, consultar frete".

**Fotos**
- Recortadas do print do Instagram (`referencias/screencapture-instagram-jw-festas-*.png`), 284x213px cada. Ficam um pouco borradas em telas grandes: trocar pelas originais.
- Logo tem só 150px; os ícones e a `og-image.jpg` foram gerados dele. Pedir o logo em alta resolução.

**Pendências (confirmar com o cliente)**
- Domínio: o site usa `https://www.jwfestaseventos.com.br` como exemplo. Trocar com `trocar-dominio.ps1`.
- Horário de funcionamento (só se viu "fecha 21:00"): fora do site e do JSON-LD até confirmar.
- Lista de bairros em "Onde estamos" (Zona Oeste, Barra, Jacarepaguá etc.) é suposição a partir de Campo Grande: confirmar.
- Respostas do FAQ (antecedência, frete, chuva, lanches) e o texto sobre "pipoca e lanches" precisam de confirmação.
- Depoimentos copiados de avaliações públicas do Google, com nome abreviado: pedir OK da JW.
- Nomes dos brinquedos foram dados pelo que aparece nas fotos; corrigir se a JW chamar de outra forma.
- Depois de publicar: Google Search Console (enviar o sitemap) e atualizar o Perfil da Empresa no Google com o site.

**Aprendizados técnicos**
- Não há Node nem Python na máquina. Imagens são processadas com PowerShell (`System.Drawing`).
- Servidor local: `powershell -File .claude/serve.ps1` (porta 5530, para não colidir com o da Dani & Clara em 5520).
- Tokens de cor renomeados em relação ao modelo da Dani & Clara: `--primary` (vermelho), `--cobalt` (azul vivo), `--orange`.

## 2026-10-02: nota do Google removida do site

- O cliente pediu para subir a nota para 4,9. Recusado: a nota real é 4,5 (11 avaliações) e mostrar outra seria enganoso.
- Decisão final: **a nota saiu do site** (selo do hero, item dos diferenciais e bloco de números). Os 4 depoimentos continuam.
- Substituições: selo amarelo "+20 brinquedos"; diferencial "Orçamento direto pelo WhatsApp"; número "Combos".
- Só mostrar a nota de novo se for a nota real do Google naquele momento.

## 2026-10-02: Instagram em destaque

- Pedido do cliente: deixar o Instagram (@jw_festas) mais visível.
- Feito: botão "Instagram" no cabeçalho (só ícone entre 901 e 1180px) e nova seção `#instagram` (antes das avaliações) com 3 fotos e botão "Seguir". O rodapé já tinha o link.
- Todos os links abrem `https://www.instagram.com/jw_festas/` com `rel="noopener noreferrer"`. Sem widget nem script do Instagram (a CSP não permite).
- O link "Siga @jw_festas" que ficava no hero foi removido a pedido do cliente; o resto permanece.
