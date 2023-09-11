// PARA TESTAR PODE SER UTILIZADO O INSOMNIA
// UM ARQUIVO JSON NA RAIZ insomnia_localhost_teste.JSON
// PODE SER IMPORTADO CASO QUEIRA ACELERAR O TESTE

import express from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = 9000;
const secret = 'abc123';

app.use(bodyParser.json());

// simulando um banco de dados de usuários
const users = [];

const authenticateToken = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).send('Acesso Negado');
  }

  jwt.verify(token, secret, (err, user) => {
    if (err) {
      return res.status(403).send('Token inválido.');
    }
    req.user = user;
    next();
  });
};

// rota de registro de usuario
app.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = {
      id: Math.floor(Math.random() * 1000000000000),
      username: req.body.username,
      password: hashedPassword,
    };
    users.push(user);
    res.status(201).send('Usuário registrado com sucesso.');
  } catch {
    res.status(500).send('Erro ao registrar o usuário.');
  }
});

// rota login
app.post('/login', async (req, res) => {
  const user = users.find((u) => u.username === req.body.username);
  if (user == null) {
    return res.status(400).send('Usuário não encontrado.');
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const accessToken = jwt.sign({ username: user.username }, secret);
      res.json({ accessToken });
    } else {
      res.status(401).send('Credenciais inválidas.');
    }
  } catch {
    res.status(500).send('Erro ao fazer login.');
  }
});

// teste de autenticação
app.get('/verify-token', authenticateToken, (req, res) => {
  res.json({ message: 'Acesso permitido!', user: req.user });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
