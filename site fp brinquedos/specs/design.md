# Design: FP Brinquedos & Diversão

## Referências

- **Estrutura:** site Dani & Clara (`../site dani clara`): ordem das seções, cards de catálogo com filtros,
  passo a passo, FAQ em sanfona, formulário que abre o WhatsApp, CTA final.
- **Visual:** as artes dos stories e posts do @fpbrinquedos (blobs coloridos nos cantos, títulos grossos com
  sombra deslocada, lista de "Características" com ícones) e o logo.
- **Hero:** propositalmente diferente dos sites Dani & Clara e JW Festas. Nada de "título à esquerda + foto à direita".

## Conceito

**"Stories da FP"**: a página parece o Instagram da FP em versão site. Fundo claro, blobs orgânicos (a mesma
forma do logo), títulos em Fredoka com sombra rosa deslocada, stickers e ingressos levemente tortos.

## Paleta (variáveis em `:root` no `site/css/style.css`)

| Papel | Token | Hex |
|---|---|---|
| Primária (fundo do logo) | `--violet` / `--violet-dk` | `#584FE6` / `#3B32B8` |
| Títulos fortes, Linha Luxo, rodapé | `--violet-deep` | `#221A6E` |
| Letra F do logo | `--pink` / `--pink-dk` / `--pink-lt` | `#ED5AB5` / `#C2378E` / `#FFE3F3` |
| Letra P do logo | `--cyan` / `--cyan-dk` / `--cyan-lt` | `#81F6FF` / `#23BFD3` / `#DDFBFF` |
| "Brinquedos & Diversão" | `--yellow` / `--yellow-dk` / `--yellow-lt` | `#FFE94A` / `#E0C40F` / `#FFF8C9` |
| WhatsApp (só botões de contato) | `--green` / `--green-dk` | `#25D366` / `#128C4A` |
| Texto | `--ink` / `--ink-soft` | `#1E1A3F` / `#57537A` |
| Fundo | `--paper` / `--lav` | `#FCFBFF` / `#F0EEFF` |

Regras: roxo domina; rosa é o destaque; ciano e amarelo são apoio. Verde só em botão de WhatsApp.
Texto sobre amarelo ou ciano é sempre `--violet-deep`.

## Tipografia (Google Fonts)

- **Títulos:** Fredoka 600–700. `.title` = roxo com `text-shadow: 3px 3px 0 rosa`; a palavra em destaque (`.mark`)
  inverte: rosa com sombra roxa. É a assinatura das artes da FP.
- **Texto:** Figtree 400–800. Base 17px (16px no celular).
- **Toque à mão:** Itim, só em detalhes ("oi! a gente é a FP", legenda de foto, "Valor no WhatsApp").

## Estrutura da página (ordem)

1. Cabeçalho fixo: logo, menu, @fpbrinquedos, botão WhatsApp (menu sanfona no celular).
2. Hero "stories": saudação à mão, H1 com palavra-chave + "Sua festa mais divertida começa aqui.", 2 CTAs,
   frete grátis e pagamentos, 3 stories em leque (Infláveis, Linha Luxo, Estações) que trocam sozinhos, ingresso R$ 100.
3. Faixa roxa inclinada rolando.
4. Catálogo: filtros (Todos, Infláveis, Com água, Jogos de mesa, Estações e som) + cards com características.
5. Linha Luxo (fundo roxo escuro).
6. Como funciona: 4 passos com números em blob.
7. SPA Infantil (fundo rosa claro): itens incluídos + 3 pacotes.
8. Quem faz a festa: foto da equipe em polaroide + 4 diferenciais + galeria do Instagram.
9. Regiões: 3 bairros com frete grátis + outros bairros.
10. Orçamento (fundo roxo): formulário que monta a mensagem e abre o WhatsApp.
11. FAQ em sanfona.
12. CTA final rosa com blobs + rodapé roxo escuro + botão flutuante de WhatsApp.

## Componentes

- **Botões:** pílula, sombra sólida de 5px na cor `-dk`, afundam ao clicar.
- **Cards do catálogo:** brancos, raio 30px, blob pastel atrás da foto, tag colorida, lista de características com ícone,
  preço ou "Valor no WhatsApp", botão rosa "Quero esse" que abre o WhatsApp com o nome do brinquedo.
- **Stories:** 9:16, barrinhas de progresso no topo, avatar + "fpbrinquedos", título no estilo das artes, link embaixo
  no lugar do "Responder". Tocar avança. Sem JS ou com movimento reduzido: fica parado no primeiro brinquedo.
- **Ícones:** SVG em sprite (`<symbol>`), traço 2.2.

## Movimento e acessibilidade

- Entrada do hero escalonada; stories "dados" como cartas; faixa rolando; revelar ao rolar.
- `prefers-reduced-motion` desliga tudo.
- Quebras: 1024px, 900px (menu mobile), 560px (1 coluna, Linha Luxo vira carrossel).
- Margem lateral mínima de 16px; sem rolagem horizontal.
