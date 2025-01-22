import { MongoClient } from 'mongodb';

async function main() {
  try {
    const url = process.env.DATABASE_URL!;
    console.log('Attempting to connect with URL:', url);
    
    const client = new MongoClient(url);
    await client.connect();
    console.log('Successfully connected to MongoDB!');
    
    const db = client.db('shopper');
    const collections = await db.listCollections().toArray();
    console.log('Available collections:', collections);
    
    await client.close();
  } catch (error) {
    console.error('Connection error:', error);
  }
}

main(); 