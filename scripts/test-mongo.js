const { MongoClient } = require('mongodb');
require('dotenv').config();

async function testConnection() {
  try {
    const uri = process.env.DATABASE_URL;
    if (!uri) throw new Error('DATABASE_URL is not defined');

    console.log('Connecting to MongoDB...');
    const client = new MongoClient(uri);
    
    await client.connect();
    console.log('Connected successfully!');
    
    const db = client.db('shopper');
    const collections = await db.listCollections().toArray();
    console.log('Collections:', collections);
    
    await client.close();
    console.log('Connection closed.');
  } catch (error) {
    console.error('Connection error:', error);
  }
}

testConnection(); 