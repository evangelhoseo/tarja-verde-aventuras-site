# Tarja Verde — Design System

## Sobre a marca

Tarja Verde é uma marca de aventura/trekking (hiking, travessias, trilhas) com forte identidade visual de "cápsula verde" — um trocadilho entre bula de remédio ("tarja") e natureza ("verde"): a mensagem central é que uma dose de trilha é o remédio para o excesso de tela e rotina. O mascote/embaixador do conteúdo social é "Tio Zeca" (@zecablak), e o perfil oficial no Instagram é **@tarjaverdeaventuras**.

**Fonte destes materiais:** guideline de marca em PDF fornecido pelo usuário (`TV guideline.pdf`, 21 páginas), anexado via upload local nesta conversa (`uploads/TV guideline/1.png`–`21.png`, um PNG por página). Nenhum código, Figma ou UI kit de produto foi fornecido — este é um design system construído a partir de um brand book estático (logo, paleta, tipografia, aplicações em produto/mockups).

Este design system foi montado a partir *apenas* desse PDF. Os componentes de UI, o kit de site institucional e a página inicial (landing) **não existiam no material de origem** — foram criados do zero, no estilo da marca, a pedido do usuário (ver "Adições intencionais" abaixo).

## Índice

- `styles.css` — ponto de entrada de estilos (importa `tokens/`)
- `tokens/` — cores, tipografia, espaçamento/raio, `@font-face`
- `assets/logo/` — variantes do logotipo (recortadas do guideline, fundo transparente)
- `assets/imagery/` — fotografia de trilha/natureza usada no guideline
- `guidelines/` — cards de especificação (cores, tipo, espaçamento, marca) que alimentam a aba Design System
- `components/core/` — Button, Badge, Card, CapsuleFrame
- `components/navigation/` — Navbar
- `ui_kits/social-templates/` — recriação dos templates de Stories do guideline
- `ui_kits/website/` — site institucional (landing page)

## Components

- **Button** (`components/core/Button.jsx`) — CTA em pílula, variantes primary/secondary/outline/ghost
- **Badge** (`components/core/Badge.jsx`) — etiqueta em pílula para tags, datas, categorias
- **Card** (`components/core/Card.jsx`) — cartão de conteúdo com imagem de capa opcional
- **CapsuleFrame** (`components/core/CapsuleFrame.jsx`) — máscara de foto em cápsula rotacionada (motivo assinatura da marca)
- **Navbar** (`components/navigation/Navbar.jsx`) — cabeçalho do site institucional

### Adições intencionais

O guideline não define nenhum componente de UI codificado (é um brand book estático). Como nenhuma fonte definia o inventário, foi criado um conjunto padrão, dimensionado à necessidade da marca (CTA, tag, card, header) mais um componente exclusivo — **CapsuleFrame** — que formaliza como componente reutilizável a máscara de cápsula usada à mão nos mockups do guideline (página 17–18).

## CONTENT FUNDAMENTALS

- **Idioma:** português do Brasil, informal.
- **Pessoa/tom:** convite direto e caloroso, quase um convite de amigo para uma trilha — "Bora?", "Que tal uma aventura???", "Bora com o Tio Zeca!". Uso de reticências/pontuação múltipla ("???") para transmitir entusiasmo espontâneo, não corporativo.
- **Slogan/tagline central:** *"Sua dose de natureza."* — curto, direto, sem pontuação decorativa.
- **Metáfora recorrente:** a "pílula verde" como antídoto para o mundo hiperconectado — "Enquanto o mundo receita pílulas para te desligar ou te acordar, oferecemos a 'pílula verde', para se reconectar com você mesmo."
- **Fechamentos:** simples e diretos — "Obrigado", "Bora?".
- **Emoji:** não são usados em nenhuma peça do guideline. A energia vem da tipografia (bold/extra bold) e da pontuação, não de emoji.
- **Maiúsculas:** o lockup do logo é sempre em caixa alta; textos corridos usam capitalização normal de frase.
- **Nomeação de lugares/eventos:** nomes próprios de trilhas e mirantes em destaque ("Mirante do Tapera & Piscinas do Zé Mondrongo"), com data no formato `Domingo · 20/jul`.

## VISUAL FOUNDATIONS

- **Cores:** trio de alto contraste — verde `#82B40A`, laranja `#FF8200`, marrom `#553214` — mais neutros creme `#D7D7D2`, branco, preto e um marrom quase-preto `#281A0E` para fundos escuros alternativos. Máximo 1–2 cores de fundo por peça (verde OU laranja OU marrom cheio; nunca os três competindo).
- **Tipografia:** Manrope (Google Fonts) em toda a escala de pesos, do Extra Light ao Extra Bold — títulos usam pesos Bold/Extra Bold bem grandes; texto corrido usa Regular/Medium.
- **Forma assinatura — a cápsula:** o pictograma central é uma pílula/cápsula rotacionada ~45°, com o hiker (mochileiro com bastões) em silhueta marrom sobre um círculo branco/laranja (referência a sol/nascer do sol) dentro da metade verde. Essa forma de cápsula é reaproveitada como **máscara de recorte de fotos** (páginas 17–18) e como **container de texto** (bloco com textura de terra, página 17) — é o principal elemento de composição da marca, não só o logo.
- **Traço/acabamento do logo:** dois traços brancos curvos (tipo "brilho" de embalagem) no canto inferior-esquerdo da cápsula — um detalhe fixo do logo, não recriado como componente solto (evitamos desenhar à mão o próprio ícone).
- **Fundos:** fotografia real de trilha/natureza (floresta, cachoeira, folhagem com gotas de orvalho, litoral) em tons quentes e naturais, sem filtro estilizado forte; quando há texto sobre foto, aplica-se um escurecimento/vinheta sutil só o suficiente para leitura. Peças 100% gráficas (sem foto) usam campo de cor chapado (verde ou laranja), sem gradientes.
- **Textura:** uma textura de terra/solo aparece como preenchimento dentro da forma de cápsula em um dos templates de Stories — é a única textura recorrente encontrada.
- **Animação:** não especificada no guideline (material é estático/impresso). Não há indicação de easing, transições ou motion — se motion for necessário em produto digital, tratar como decisão nova, não como extensão do guideline.
- **Hover/press (não especificado no guideline):** para os componentes de UI criados aqui, adotou-se um padrão simples e consistente com a marca — hover escurece levemente (`brightness(0.92)`) e levanta 1px; press não tem tratamento especial além do que o navegador aplica; disabled reduz opacidade. Ver nota em `Button.prompt.md`.
- **Bordas/contorno:** elementos gráficos do logo não usam contorno chapado — a leitura vem do contraste de cor entre as áreas da cápsula. Um traço fino decorativo acompanha o contorno da cápsula na versão "Fundo Claro" do logo.
- **Sombras:** ausentes nas peças gráficas planas (stories, logo, wordmark). Aparecem apenas nos mockups fotográficos de produto (camiseta, boné, mochila) como sombra de estúdio realista — não fazem parte do sistema de UI. Os componentes aqui usam uma sombra suave opcional (`--shadow-soft`) só para elevar cards sobre fundo claro.
- **Raio de canto:** o raio "pill" (`--radius-pill`, totalmente arredondado) é o padrão assinatura — usado no logo, em badges e no botão. Cards usam raio médio (`--radius-md`, 16px), mais contido, para não competir com a forma de cápsula.
- **Cards (nos mockups):** o guideline não mostra cards de UI — os "cards" existentes são os frames de celular dos templates de Stories, sempre em proporção retrato, cantos levemente arredondados, sem sombra, sem borda.
- **Transparência/blur:** não observado — nenhuma peça usa vidro/blur; camadas se sobrepõem com cor chapada ou fotografia direta.
- **Vibe cromática da imagery:** verde-floresta quente, luz natural (nunca fria/dessaturada), sem preto-e-branco, sem grão pesado — fotografia de aventura "de verdade", não still de estúdio.
- **Elemento de wayfinding:** cada página do guideline tem um rótulo lateral rotacionado ("TARJA · [nº] · VERDE", número em cor de destaque) — documentado aqui como referência de type token (`--text-eyebrow`, `--tracking-wide`), disponível para rodapés/paginação caso o site queira o mesmo toque editorial.

## ICONOGRAPHY

- **Não há sistema de ícones definido no guideline.** O único pictograma de marca é a silhueta do mochileiro (hiker) dentro da cápsula — é *ilustração de logo*, não um ícone reutilizável, e não deve ser redesenhado à mão.
- Não há fonte de ícones proprietária, sprite SVG ou set de PNGs de interface no material de origem.
- Os únicos outros "ícones" vistos são elementos de UI padrão do Instagram (câmera, perfil) dentro de prints de celular — não são ativos da marca.
- **Substituição sinalizada:** como o site institucional e os componentes de UI (Button, Card, Navbar) podem precisar de ícones utilitários (menu, seta, localização) que o guideline não define, a recomendação é usar **Lucide Icons** via CDN (`unpkg.com/lucide`) — traço fino, sem preenchimento, neutro o suficiente para não conflitar com a ilustração do hiker. Nenhum ícone Lucide foi pré-instalado; adicionar sob demanda quando um componente precisar.
- Emoji: não usados em nenhuma peça oficial.

## Fontes / substituições

- Ativos de logo atualizados a partir dos arquivos originais enviados pelo usuário (`assets/logo/logo-mark-color.png`, `logo-mark-dark.png`, `logo-horizontal-color.png`, `logo-horizontal-dark.png`) — as versões "dark" adaptam o mark para fundos escuros (o hiker vira branco, o pill mantém a cor) em vez do mono de 1 cor visto no PDF original.

- **Manrope** é a fonte sugerida no próprio guideline (rótulo "Tipologia sugerida (Google Fonts)", página 8) — carregada via `@import` do Google Fonts em `tokens/fonts.css` (o ambiente de sandbox não permite baixar os binários `.woff2` para hospedagem local; se for necessário auto-hospedar em produção, baixe os arquivos de fonts.google.com/specimen/Manrope e troque o `@import` por `@font-face` local).
- Nenhuma outra substituição de fonte foi necessária.
