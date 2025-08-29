// Simple script to seed the database with test data
import { MongoClient } from 'mongodb';

async function seedDatabase() {
  const client = new MongoClient('mongodb://localhost:27017');

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('userservice');
    const users = db.collection('users');

    // Clear existing data
    await users.deleteMany({});
    console.log('Cleared existing users');

    // Insert test users
    const testUsers = [
      {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123', // In production, this should be hashed
      },
      {
        name: 'Jane Smith',
        email: 'jane@example.com',
        password: 'password123',
      },
      {
        name: 'Bob Johnson',
        email: 'bob@example.com',
        password: 'password123',
      },
      {
        name: 'Alice Brown',
        email: 'alice@example.com',
        password: 'password123',
      },
      {
        name: 'Charlie Wilson',
        email: 'charlie@example.com',
        password: 'password123',
      },
    ];

    const result = await users.insertMany(testUsers);
    console.log(`Inserted ${result.insertedCount} test users`);

    // Display the inserted users
    const allUsers = await users.find({}).toArray();
    console.log('Users in database:');
    allUsers.forEach((user) => {
      console.log(`- ${user.name} (${user.email})`);
    });
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.close();
    console.log('Database connection closed');
  }
}

seedDatabase();
