# Projeto: Filtro de Alunos Aprovados

Este é um projeto em JavaScript que filtra alunos aprovados com base em uma nota mínima. O código utiliza Babel para compatibilidade com navegadores antigos e Browserslist configurado para cobertura de mais de 0,25% dos usuários.

## Descrição

O código cria um array de objetos com nome e nota de alunos. Em seguida, uma função filtra apenas os alunos que possuem nota maior ou igual a 6. Ao final, é exibida uma mensagem personalizada para cada aluno aprovado.

## Tecnologias Utilizadas

- **JavaScript (ES6+)**
- **Babel**: Para transpilar o código ES6+ em uma versão compatível com navegadores mais antigos.
- **Browserslist**: Configurado para garantir suporte a navegadores com uso acima de 0,25% dos usuários.

## Pré-requisitos

- **Node.js**: Certifique-se de que o Node.js está instalado em sua máquina.
- **Babel**: O Babel é necessário para transpilar o código. 

## Configuração do Projeto

1. Clone o repositório.
2. Instale as dependências:
   ```bash
   npm install --save-dev @babel/core @babel/cli
   npm install --save-dev @babel/preset-env

## Configure o Babel e Browserslist

1. No arquivo babel.config.json, adicione:

    ```json
    "presets": ["@babel/preset-env"]

2. No package.json, configure o Browserslist

    ```json
    "scripts": {
    "build": "babel src -d dist"
    },
    "browserslist": ">0.25%",