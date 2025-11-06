const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const authMiddleware = require('./middlewares/auth');
const authRoutes = require('./routes/authRoutes');
const flowRoutes = require('./routes/flowRoutes');

const app = express();
app.use(bodyParser.json());

// Rotas públicas
app.use('/api', authRoutes);

// Rotas protegidas
app.use('/api', authMiddleware.authenticateToken, flowRoutes);

// Swagger
const swaggerDocument = JSON.parse(fs.readFileSync(path.join(__dirname, 'recursos', 'swagger.json'), 'utf8'));
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/', (req, res) => res.redirect('/swagger'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Swagger em http://localhost:${PORT}/swagger`);
});
