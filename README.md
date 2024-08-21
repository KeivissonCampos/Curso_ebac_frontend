# Lista de Tarefas com jQuery

Este é um projeto simples de lista de tarefas que permite aos usuários adicionar, riscar e gerenciar suas tarefas de forma interativa. A aplicação foi desenvolvida utilizando HTML, CSS e jQuery.

## Funcionalidades

- **Adicionar Tarefas**: Os usuários podem adicionar novas tarefas preenchendo um formulário com o nome da tarefa.
- **Riscar Tarefas Concluídas**: Ao clicar em uma tarefa, ela será riscada (aplicando um efeito de "completed"), indicando que a tarefa foi concluída.
- **Efeito de Aparecimento**: As tarefas aparecem com um efeito de fade-in ao serem adicionadas à lista.

## Tecnologias Utilizadas

- **HTML5**: Para a estrutura da página.
- **CSS3**: Para a estilização da lista e das tarefas.
- **jQuery**: Para manipulação dos elementos DOM e controle dos eventos.

## Estrutura do Projeto

- `index.html`: Arquivo principal contendo o formulário de adição de tarefas e a lista de tarefas.
- `styles.css`: (Opcional) Arquivo de estilo para a página, definindo a aparência da lista e dos itens.
- `script.js`: Arquivo JavaScript que contém a lógica para adicionar tarefas, riscar tarefas concluídas, e aplicar efeitos visuais.

## Como Usar

2. **Abrir o Arquivo `index.html`**:
   - Navegue até a pasta do projeto e abra o arquivo `index.html` em seu navegador.

3. **Adicionar uma Tarefa**:
   - Digite o nome da tarefa no campo de input e clique no botão "Adicionar Tarefa".
   - A tarefa será adicionada à lista com um efeito de fade-in.

4. **Marcar uma Tarefa como Concluída**:
   - Clique em qualquer tarefa da lista para riscar o texto, indicando que a tarefa foi concluída.
   - Clique novamente na tarefa para desmarcá-la.

## Exemplo de Uso

Após abrir o `index.html` no navegador, a interface exibirá um campo para digitar o nome da tarefa e um botão para adicionar a tarefa. Abaixo disso, haverá uma lista onde as tarefas aparecerão à medida que são adicionadas.

## Personalização

- **Estilos CSS**: Você pode ajustar as cores, fontes, e outros estilos editando o arquivo `styles.css`.
- **Efeitos jQuery**: O tempo de fade-in pode ser ajustado na função `fadeIn()` no arquivo `script.js`.