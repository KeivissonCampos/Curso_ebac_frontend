# Página de Notícias com CSS Flexbox

Este repositório contém uma página de notícias simples que utiliza o poder do CSS Flexbox para criar um layout responsivo e organizado. O projeto foi desenvolvido para demonstrar o uso de `display: flex` em conjunto com outras propriedades do CSS, criando uma interface de usuário intuitiva e fácil de navegar.

## Estrutura dos Arquivos

### 1. `index.html`

Este arquivo contém a estrutura HTML da página de notícias. Ele organiza os diferentes componentes da página, como o cabeçalho, seções de artigos, e o rodapé.

### 2. `styles.css`

O arquivo de estilo que define o layout e a aparência da página. Ele contém as seguintes seções:

- **Reset Básico:**
  ```css
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, Helvetica, sans-serif;
  }

Isso garante que todos os elementos tenham margens e preenchimentos zerados, e aplica uma fonte padrão em toda a página.

- **Cabeçalho (`.container-header`):**
  Utiliza `display: flex` para organizar o conteúdo do cabeçalho, garantindo que a navegação e o título fiquem alinhados e espaçados adequadamente.

- **Navegação (`nav ul` e `nav li`):**
  Cria uma lista horizontal de links de navegação.

- **Seção de Artigos (`section`):**
  O container dos artigos utiliza `display: flex` e `flex-wrap` para garantir que os artigos sejam distribuídos uniformemente e se ajustem conforme o tamanho da tela.

- **Artigos (`article`):**
  Cada artigo é estilizado com bordas, preenchimento, e um layout flexível que se adapta ao conteúdo.

- **Estilos Específicos de Categorias:**
  Existem estilos personalizados para as categorias de Esportes, Economia, Tecnologia e Viagens, dando uma identidade visual distinta para cada uma.

- **Rodapé (`footer`):**
  O rodapé está centrado e com um fundo escuro, mantendo a consistência visual com o cabeçalho.

- **Responsividade:**
  Com o uso de `@media queries`, o layout se adapta a diferentes tamanhos de tela, garantindo que a página fique acessível e utilizável em dispositivos móveis.
