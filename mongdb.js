const { MongoClient } = require('mongodb');
require("dotenv").config();

// Nombre de bd
const dbName = process.env.DATABASEMONGO;
// Conexión URL (estas corriendo en local :D)
const url = process.env.MONGOURL;

const client = new MongoClient(url, {
  useUnifiedTopology: true
});

module.exports = async () => {
  // Conectamos al servidor
  await client.connect();
  return client.db(dbName); // retornamos la conexión con el nombre de la bd a usar
};