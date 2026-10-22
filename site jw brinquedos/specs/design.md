# Design: JW Festas e Eventos

## Referências
- **Estrutura e clima:** Fonseca Toys (`referencias/screencapture-fonsecatoys-*.png`): ordem das seções, cards com "Pedir orçamento",
  passo a passo numerado, FAQ em sanfona, CTA final em bloco colorido. Tema **claro e vibrante**, não o escuro dela.
- **Paleta:** logotipo da JW (JW vermelho, balões vermelhos, céu azul-claro, grama verde) e os infláveis coloridos do Instagram.
- O mesmo modelo de código do site da Dani & Clara, com paleta e conteúdo próprios.

## Conceito
**"Inflável"**: formas gordinhas, sombras "de base" sólidas, costuras tracejadas, bordas onduladas.

## Paleta (variáveis em `:root` de `site/css/style.css`)
| Papel | Token | Hex |
|---|---|---|
| Primária (vermelho do logo) | `--primary` / `--primary-dk` | `#C1131D` / `#8A0A12` |
| Texto de títulos / rodapé | `--navy` | `#0B2A66` |
| Apoio (azul vivo) | `--cobalt` / `--cobalt-dk` | `#1F6FD6` / `#134A9B` |
| Apoio (azul-céu do logo) | `--sky` / `--sky-lt` | `#38B6FF` / `#DDF4FF` |
| Destaque | `--yellow` / `--yellow-dk` | `#FFC61A` / `#D99A00` |
| Destaque quente | `--orange` / `--orange-dk` | `#E65F00` / `#A84400` |
| WhatsApp (só botões de contato) | `--green` / `--green-dk` | `#25D366` / `#128C4A` |
| Texto / fundo | `--ink`, `--ink-soft`, `--cream` | `#14213D`, `#4A5670`, `#FFF9EE` |

Regras: vermelho domina (hero e seção "Festa completa"); azul e amarelo são acentos; verde só no WhatsApp;
toda cor cheia tem `-dk` como sombra sólida; texto sobre amarelo é `--navy`.

## Tipografia
Títulos **Lilita One**; texto **Nunito** 400–900 (base 17px, 16px no celular). Não usar Inter, Roboto, Arial.

## Tom de voz
Português do Brasil, próximo e alegre ("a gente", "chama no WhatsApp"). Frases curtas. Sem preços e sem promessas não confirmadas.

## Estrutura da página
1 Cabeçalho fixo · 2 Hero vermelho (+20 opções, entrega e montagem) · 3 Faixa rolando · 4 Catálogo com filtros ·
5 Como funciona (4 passos) · 6 Festa completa (combo, pipoca, jogos, entrega) · 7 Números + avaliações do Google ·
8 Onde estamos (Campo Grande + mapa) · 9 Orçamento (monta mensagem do WhatsApp) · 10 FAQ · 11 CTA final · 12 Rodapé + botão flutuante.

## Movimento e acessibilidade
Entrada escalonada, bolinhas flutuando, faixa rolando, revelar ao rolar; respeitar `prefers-reduced-motion`.
Quebras 1024/900/560px, margem mínima 16px, link "Pular para o conteúdo", foco amarelo visível, `aria-*`.
