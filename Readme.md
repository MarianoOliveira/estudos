# Mouts Testes Automatizados

Este projeto foi feito utilizando o framework [Cypress](https://www.cypress.io/). O projeto inclui testes de Api e testes E2E, utilizando as melhores práticas de testes automatizados.

## Índice

- [Requisitos](#Requisitos)
- [Instalação](#Instalação)
- [Scripts](#Scripts)
- [Estrutura](#Estrutura)


## 📋 Requisitos

* Node.js instalado
* npm instalado


## 📦 Instalação

Clonando o projeto:

```bash
git clone https://github.com/MarianoOliveira/estudos.git
cd estudos/mouts
npm install
```

## 🧪 Scripts

Aqui estão alguns comando úteis prontos para serem executados. Tais comando podem ser alterados no package.json!

```bash
npm run cy:open: Abre o cypress no modo interativo
```

```bash
npm run cy:test: Roda os testes no modo headless utilizando o chrome
```

```bash
npm run lint: Roda o Eslint para verificar alguns possíveis erros de código
```

```bash
npm run lint:fix: Roda o Eslint para corrigir os possíveis erros de código
```

## 📜 Estrutura
* /cypress/e2e/api ou gui: Contém os arquivos de teste (ex.: cadastro.cy.js)
* /cypress/fixtures: Contém arquivos de dados fictícios para os testes (os schemas).
* /cypress/support: Contém comandos customizados e configurações adicionais.