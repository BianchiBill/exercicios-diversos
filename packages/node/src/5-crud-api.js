import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const objetos = [
  { id: 1, description: 'Estudar Node.js' },
  { id: 2, description: 'Estudar React' },
  { id: 3, description: 'Estudar TypeScript' },
];

app.get('/', (req, res) => {
  res.send(objetos);
});

app.get('/:id', (req, res) => {
  const objectId = parseInt(req.params.id, 10);
  const objeto = objetos.find((value) => value.id === objectId);
  res.send(objeto);
});

app.post('/post', (req, res) => {
  const newObject = req.body;
  newObject.id = objetos.length + 1;
  objetos.push(newObject);

  res.status(200).json(objetos);
});

app.put('/:id', (req, res) => {
  const objectId = parseInt(req.params.id, 10);
  const updateObjeto = req.body;
  const index = objetos.findIndex((objecto) => objecto.id === objectId);

  objetos[index] = updateObjeto;
  res.status(200).json(updateObjeto);
});

app.delete('/:id', (req, res) => {
  const objectId = parseInt(req.params.id, 10);
  const index = objetos.findIndex((objecto) => objecto.id === objectId);

  objetos.splice(index, 1);
  res.status(200).send(objetos);
});

app.listen(PORT, () => {
  console.log(`Server online, listen port ${PORT}`);
});

export default app;
