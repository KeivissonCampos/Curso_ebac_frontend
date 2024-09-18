# Projeto de Otimização de Imagens com Gulp

Este projeto utiliza **Gulp** para automatizar a compressão de imagens, compilação de arquivos **Sass** e minificação de **JavaScript**. O objetivo principal é otimizar o processo de desenvolvimento e reduzir o tamanho dos arquivos estáticos, melhorando o desempenho do site.

## Funcionalidades

- **Compilação de Sass:** Transforma arquivos `.scss` em `.css` compactados, facilitando o uso de pré-processadores CSS.
- **Minificação de JavaScript:** Minifica e obfusca arquivos JavaScript para reduzir o tamanho final.
- **Compressão de Imagens:** Utiliza `gulp-imagemin@4.0.2` para comprimir arquivos de imagem e reduzir o tempo de carregamento das páginas. 

## Tecnologias Utilizadas

- [Gulp](https://gulpjs.com/) - Automatizador de tarefas
- [gulp-sass](https://www.npmjs.com/package/gulp-sass) - Compilador Sass
- [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) - Minificador de JavaScript
- [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) - Compressor de imagens

## Estrutura de Pastas
.
├── build
│   ├── images    # Imagens otimizadas
│   ├── scripts   # Arquivos JavaScript minificados
│   └── styles    # Arquivos CSS compilados
├── source
│   ├── images    # Imagens originais
│   ├── scripts   # Arquivos JavaScript originais
│   └── styles    # Arquivos Sass
├── gulpfile.js   # Configurações do Gulp
├── package.json  # Dependências do projeto
└── README.md     # Documentação do projeto