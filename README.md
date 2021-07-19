# Angular - Como preparar seu ambiente.
**O que é o angular ?**

Framework criado pelo google focado na criação de aplicativos de página única eficientes e sofisticados.

[Documentação Oficial](https://angular.io/)

**O que é uma página SPA ?**

Um SPA é uma aplicação web que roda em uma única página.

**Fonte:** [Artigo: O que é uma SPA: Single-Page Application?](https://angular.io/)

## Objetivo

Aprender o que é o angular, para que serve e como construir uma aplicação inicial com angular e suas ferramentas.

## Instalação angular CLI.

```bash
npm install -g @angular/cli
```

## Como inicializar a sua aplicação.

```bash
ng new my-first-project
cd my-first-project
ng serve
```

## Como compilar sua aplicacao para publicacao.

Execute `ng build` para construir o projeto. Os artefatos de construção serão armazenados no diretório `dist/`.

## Executando testes de unidade

Execute `ng test` para executar os testes de unidade via [Karma] (https://karma-runner.github.io).

## Executando testes ponta a ponta (End-to-End)

Execute `ng e2e` para executar os testes de ponta a ponta por meio de uma plataforma de sua escolha. Para usar este comando, você precisa primeiro adicionar um pacote que implemente recursos de teste de ponta a ponta(End-to-End).

## Comandos úteis angular CLI
![Comandos uteis angular cli](https://i.stack.imgur.com/WczZ8.png)

[Lista com outros comandos utilizados no angular CLI](https://malcoded.com/static/68c150aaaee9e8056f44fb81a08799ad/f9a96/angular-cli-cheat-sheet.webp)



## License
[MIT](https://choosealicense.com/licenses/mit/)
