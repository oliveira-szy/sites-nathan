# Design: Dani & Clara Brinquedos

## Referências

- **Estrutura e clima:** site da Fonseca Toys (`referencias/screencapture-fonsecatoys-br-*.png`).
  Aproveitamos a ordem das seções, os cards de catálogo com "Pedir orçamento", o passo a passo
  numerado, o FAQ em sanfona e o CTA final em bloco colorido. **Não** usamos o tema escuro dela.
- **Paleta:** logotipo da Dani & Clara (`site/img/logo.jpg`) e as artes do Instagram
  @danieclarabrinquedos (azul-céu e pink dos posts).

## Conceito

**"Inflável"**: tudo parece de lona cheia de ar. Formas gordinhas e arredondadas, sombras
"de base" sólidas embaixo dos elementos, costuras tracejadas e bordas onduladas. Tema **claro e vibrante**.

## Paleta (variáveis em `:root` no `site/css/style.css`)

| Papel | Token | Hex |
|---|---|---|
| Primária (fundo do logo) | `--blue` | `#0047AF` |
| Sombra da primária | `--blue-dk` | `#00307A` |
| Texto de títulos / rodapé | `--blue-deep` | `#0B2A66` |
| Destaque (faixa do logo) | `--red` / `--red-dk` | `#E3262E` / `#B3141C` |
| Destaque (estrelas / "para festas") | `--yellow` / `--yellow-dk` | `#FFC61A` / `#D99A00` |
| Apoio do Instagram | `--sky` / `--sky-lt` | `#29B6F6` / `#DDF4FF` |
| Apoio do Instagram | `--pink` / `--pink-dk` | `#E6187E` / `#B00B5E` |
| WhatsApp (só botões de contato) | `--green` / `--green-dk` | `#25D366` / `#128C4A` |
| Texto corrido | `--ink` / `--ink-soft` | `#14213D` / `#4A5670` |
| Fundo da página | `--cream` | `#FFF9EE` |

Regras:
- Azul royal domina (hero e seção Fábrica); vermelho e amarelo são acentos; sky e pink são apoio.
- Verde é **exclusivo** dos botões de WhatsApp.
- Toda cor "cheia" tem uma versão `-dk` usada como sombra sólida embaixo (efeito inflado).
- Texto sobre amarelo é sempre `--blue-deep`, nunca branco.

## Tipografia (Google Fonts)

- **Títulos:** Lilita One (grossa e arredondada, parecida com o letreiro do logo). Peso único.
  H1 do hero: `clamp(2.4rem, 5.6vw, 4.3rem)`; H2: `clamp(2rem, 4.2vw, 3.1rem)`.
- **Texto:** Nunito 400–900. Base 17px (16px no celular), line-height 1.6.
- "Eyebrows" (rótulo acima dos títulos): Nunito 900, caixa alta, espaçamento .18em, em pílula colorida.
- Não usar Inter, Roboto, Arial ou outras fontes genéricas.

## Tom de voz

- Português do Brasil, próximo e alegre, falando como família ("a gente", "chama no WhatsApp").
- Frases curtas e concretas. Festa, diversão e **segurança** (os pais precisam de confiança).
- Sem exagero nem promessa que a empresa não confirmou. Sem preços no site.
- Palavras-chave locais aparecem de forma natural: "aluguel de brinquedos infláveis",
  "festas", "Rio de Janeiro", nomes de cidades e bairros.

## Estrutura da página (ordem)

1. Cabeçalho fixo: logo + nome, menu, botão WhatsApp (menu sanfona no celular).
2. Hero azul: selo "Desde 2006", H1 com a palavra-chave, 2 CTAs, 4 diferenciais, foto em moldura inflável + selo "20 anos".
3. Faixa amarela rolando (fabricação própria, Grande Rio etc.).
4. Catálogo: filtros (Todos, Infláveis, Pequenos, Radicais, Jogos) + cards.
5. Como funciona: 4 passos numerados.
6. Fábrica (fundo azul): venda, lona reforçada, manutenção, entrega.
7. Números + "Por que a Dani & Clara" (4 itens).
8. Regiões atendidas: pílulas de cidades/bairros + mapa do Google.
9. Orçamento: formulário que monta a mensagem e abre o WhatsApp.
10. FAQ em sanfona.
11. CTA final (gradiente vermelho → pink).
12. Rodapé azul-escuro + botão flutuante de WhatsApp.

## Componentes e detalhes

- **Botões:** pílula, sombra sólida de 6px na cor `-dk`, brilho interno no topo; afundam ao clicar.
- **Cards:** brancos, raio 32px, costura tracejada interna, imagem 4:3 no topo, tag colorida,
  link "Pedir orçamento →" vermelho sublinhado em amarelo. No hover sobem e inclinam levemente.
- **Bordas onduladas** no topo das seções coloridas (lona inflada) e onda no fim do hero.
- **Stickers** circulares ("20 anos de festa", "Fábrica no RJ") levemente rotacionados.
- **Raios:** 32px (grande), 22px (médio), 14px (campos); pílulas 999px.
- **Imagens:** fotos reais em 4:3 (`object-fit: cover`); com `alt` descritivo e `width`/`height`.
- **Ícones:** SVG inline em sprite (`<symbol>`), traço 2.2, cantos arredondados.

## Movimento

- Entrada do hero escalonada (rise/pop); bolinhas flutuando; faixa rolando; revelar ao rolar.
- Hover com leve "quique" (`cubic-bezier(.34, 1.56, .64, 1)`).
- Respeitar `prefers-reduced-motion` (desliga tudo).

## Responsivo e acessibilidade

- Quebras: 1024px (grids de 4 → 2), 900px (menu mobile, colunas empilhadas), 560px (1 coluna).
- Margem lateral mínima de 16px; sem rolagem horizontal.
- Link "Pular para o conteúdo", foco visível amarelo, `aria-*` no menu, filtros e formulário.
