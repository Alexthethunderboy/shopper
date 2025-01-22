const { MongoClient } = require('mongodb');
require('dotenv').config();

async function testConnection() {
  try {
    const uri = process.env.DATABASE_URL;
    if (!uri) throw new Error('DATABASE_URL is not defined');

    console.log('Connecting to MongoDB...');
    console.log('Using URI:', uri.replace(/:[^:@]+@/, ':****@')); // Hide password in logs
    
    const client = new MongoClient(uri);
    
    await client.connect();
    console.log('Connected successfully!');
    
    // Try to access the shopper database
    const db = client.db('shopper');
    const collections = await db.listCollections().toArray();
    console.log('Collections in shopper database:', collections);
    
    await client.close();
    console.log('Connection closed.');
  } catch (error) {
    console.error('Connection error:', error);
  }
}

testConnection(); 