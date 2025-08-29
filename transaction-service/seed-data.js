// Simple script to seed the transaction database with test data
const { MongoClient, ObjectId } = require('mongodb');

async function seedDatabase() {
  const client = new MongoClient('mongodb://localhost:27017');

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('transactionservice');
    const orders = db.collection('orders');

    // Clear existing data
    await orders.deleteMany({});
    console.log('Cleared existing orders');

    // Insert test orders
    const testOrders = [
      {
        user_id: new ObjectId(),
        total_cents: 199900,
        currency: 'USD',
        status: 'PAID',
        created_at: new Date(),
      },
      {
        user_id: new ObjectId(),
        total_cents: 99900,
        currency: 'USD',
        status: 'PENDING',
        created_at: new Date(),
      },
      {
        user_id: new ObjectId(),
        total_cents: 59900,
        currency: 'USD',
        status: 'PAID',
        created_at: new Date(),
      },
      {
        user_id: new ObjectId(),
        total_cents: 24900,
        currency: 'USD',
        status: 'FAILED',
        created_at: new Date(),
      },
      {
        user_id: new ObjectId(),
        total_cents: 39900,
        currency: 'USD',
        status: 'PAID',
        created_at: new Date(),
      },
    ];

    const result = await orders.insertMany(testOrders);
    console.log(`Inserted ${result.insertedCount} test orders`);

    // Display the inserted orders
    const allOrders = await orders.find({}).toArray();
    console.log('Orders in database:');
    allOrders.forEach((order) => {
      console.log(
        `- Order ${order._id} - $${order.total_cents / 100} (${order.status})`,
      );
    });
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.close();
    console.log('Database connection closed');
  }
}

seedDatabase();
