// PARA ESTE EXERCICIO VOU UTILIZAR O MONGODB
// MAS VC PODE UTLIZAR O QUE DESEJAR

// !ATENÇÃO - NUNCA DEIXA SUAS CREDENCIAIS NO CODIGO
// PROCURE UTILIZAR ARQUIVOS .ENV (dotenv É UM EXEMPLO)

// O IDEIAL É SEPARAR TUDO, POREM PARA ESTE EXERCÍCIO
// FAREMOS NESTE UNICO ARQUIVO
import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017'; // Altere pra sua

const dbName = 'nome_do_banco'; // Altere para o nome da sua db

export const connectMongoDB = async () => {
  const client = new MongoClient(url, { useUnifiedTopology: true }); // https://mongodb.github.io/node-mongodb-native/3.3/reference/unified-topology/

  try {
    await client.connect();

    return { client, db: client.db(dbName) };
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    throw error;
  }
};

const crud = async () => {
  const { client, db } = await connectMongoDB();

  const collection = db.collection('collectionName');

  return { collection, client };
};

const { collection, client } = await crud();

const documento = { nome: 'Exemplo', idade: 30 };
const filtro = { nome: 'Exemplo' };
const atualizacao = { $set: { idade: 35 } };

// CADA ITEM ABAIXO EXECUTA UMA AÇÃO
await collection.insertOne(documento); // CRIAR DOCUMENTO
await collection.find().toArray(); // CONSULTAR DOCUMENTOS
await collection.updateOne(filtro, atualizacao); // ATUALIZAR DOCUMENTOS
await collection.deleteOne(filtro); // DELETAR DOCUMENTOS

await client.close();

// LEMBRANDO QUE CADA AÇÃO DEVE SER SEPARADA
// ELAS ESTÃO EM SEQUENCIA AQUI PARA EFEITO DIDÁTICO
