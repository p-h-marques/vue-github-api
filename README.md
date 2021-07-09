# Consumindo API da GitHub em Vue.js

Olá! Aqui é o Pedro, e esse repositório contém o desenvolvimento da tela de pesquisa de usuário e repositórios do Github. Além do Vue.js, utilizei também o Vuex para gerenciar um estado global com as informações necessárias.

## Rodando o projeto

Pra poder clonar e rodar o projeto direitinho, é só mandar aqueles comandos padrão de sempre:

```bash
npm i && npm run serve
```

Caso você tenha problemas com as quebras de linha do Windows, o comando abaixo corrige automaticamente os arquivos usando o Eslint:

```bash
npm run lint
```

## Features

Entre features propostas de forma obrigatória & opcional pela especificação, o seguinte foi viabilizado:

- prototipação e especificação utilizando o Figma (você pode conferir o que produzi [nesse link!](https://www.figma.com/file/pCISFUvEqqACbVurydeXMa/Vue-Github-API?node-id=0%3A1))
- utilizei o Vue 3 e o Vuex 4, porém não utilizei o Bootstrap :( como tive a ideia de prototipar a solução antes de desenvolvê-la, acabei optando por desenvolver "na unha", pixel perfect!
- há feedbacks de carregamento, exibição dos repositórios, acesso aos seus respectivos links e pleno funcionamento da paginação
- por questão de tempo, não implementei algumas verificações e features que julgaria interessante, por exemplo: flexibilizar pesquisa de usuário (atualmente está fixo com o Laravel), tratar possíveis erros de retorno da API, implementar buscas na lista de repositórios, e outras coisas interessantes.