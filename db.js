const { MongoClient } = require('mongodb');

async function connect() {
  const url = 'mongodb://localhost:27017';
  const dbName = 'mydb';

  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    return db;
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  }
}

module.exports = connect;
