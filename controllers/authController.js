const db = require('../models/db');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../middlewares/auth');

const login = (req, res) => {
  const { username, password } = req.body;
  const user = db.users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ error: 'Usuário ou senha inválidos.' });
  const token = jwt.sign({ id: user.id, username: user.username }, SECRET, { expiresIn: '6h' });
  res.json({ token });
};
module.exports = { login };

