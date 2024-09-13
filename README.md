# Conversão de CSS para SCSS

Este projeto é uma transformação de um código CSS existente para o formato SCSS, que é uma extensão do CSS que permite o uso de variáveis, aninhamento, mixins e outras funcionalidades avançadas para facilitar a manutenção e escalabilidade do código.

## Estrutura Original

O código original foi escrito em CSS e define o layout básico de uma página de produtos. Aqui estão os principais elementos:

### Resumo do Código CSS

- **Reset básico**: Remove margens e preenchimentos padrões dos elementos e define a `box-sizing` para `border-box`.
- **Estrutura principal**: 
  - `body` com fundo personalizado.
  - `container` para centralizar o conteúdo com largura máxima de 1024px.
  - `header` com um fundo fixo e sticky no topo da página.
  - Menu de navegação estilizado para ser flexível e espaçado entre os itens.
  - Produtos exibidos em uma grade de três colunas, ajustando para duas colunas e layout em bloco para telas menores.
- **Responsividade**: 
  - Dois breakpoints são utilizados:
    - Até 1023px, o layout da grade muda para duas colunas.
    - Até 767px, o layout se adapta para exibir os produtos em bloco.

## Estrutura SCSS

O código foi refatorado para SCSS para facilitar a manutenção e adicionar novas funcionalidades. As principais melhorias são:

1. **Variáveis**: Definimos cores e tamanhos reutilizáveis.
2. **Aninhamento**: Facilitamos o entendimento das hierarquias de estilo ao aninhar seletores dentro de seus elementos pais.
3. **Mixin**: Criamos mixins para aplicar regras de estilo repetitivas, como o comportamento de responsividade.