# Testes automatizados Cypress

## Instalação

Execute no terminal na pasta raiz do projeto:

```
npm install cypress --save-dev
```

## Executando

Com o servidor ativo em `localhost:3000`, execute:

```
npx cypress open
```
ou
```
npx cypress run
```

## Estrutura

- `Cypress/e2e/auth.cy.js`: Testes de autenticação (/login)
- `Cypress/e2e/flow.cy.js`: Testes de fluxos, eventos, anomalias e alertas
- `Cypress/support/e2e.js`: Comandos de suporte (pode adicionar mais comandos conforme a necessidade)
