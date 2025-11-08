# Testes de Performance com K6

## Pré-requisitos
- Tenha o [k6](https://k6.io/docs/getting-started/installation/) instalado no seu computador (`npm i -g k6` ou `choco install k6` no Windows).

## Executando o teste
Na raiz da pasta do projeto, execute:

```
k6 run K6/performance_test.js
```

O teste simula entre 10 e 50 usuários durante 5 minutos sobre os principais endpoints:
- Fluxos
- Eventos
- Anomalias
- Alertas



## Estrutura dos arquivos
- `performance_test.js`: Script principal contendo requisições para todos os endpoints protegidos usando token JWT.
