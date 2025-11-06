# API Mensageria & IA – Monitoramento, Fluxos, Anomalias e Alertas

## Objetivo
Sistema API REST para monitorar, testar e visualizar fluxos de mensageria em tempo real, detectar padrões anômalos, gerar e gerenciar alertas. Acesso via login JWT. Documentação detalhada via Swagger.

## Funcionalidades
- Autenticação (JWT)
- Cadastro, listagem e status de fluxos
- Registro/consulta de eventos de mensageria
- Detecção simulada de anomalias
- Geração/listagem de alertas e sinalização de "acknowledge"
- Visualização em tempo real (poll nos endpoints)

## Endpoints principais
- `POST   /api/login` – Login | body: `{ username, password }`
- `GET    /api/flows`, `POST   /api/flows` – Gerenciar fluxos
- `GET    /api/events`, `POST  /api/events` – Mensageria
- `GET    /api/anomalies`, `POST /api/anomalies` – Anomalias
- `GET    /api/alerts`, `POST /api/alerts`, `PATCH /api/alerts/:id/ack` – Alertas

Todos os endpoints exceto login exigem autenticação JWT via header:
```
Authorization: Bearer <seu_token>
```

## Status Codes de Erro
- 400 (Bad Request), 401 (Não autenticado), 403 (Token JWT inválido), 404 (Recurso não encontrado)

## Uso rápido
1. Instale as dependências:
   ```bash
   npm install express body-parser jsonwebtoken swagger-ui-express
   ```
2. Inicie a API:
   ```bash
   node index.js
   ```
3. Veja a documentação e faça requests interativos em [http://localhost:3000/swagger](http://localhost:3000/swagger)

## Swagger
Toda documentação interativa, exemplos e schemas detalhados poderão ser consultados em `/swagger`.