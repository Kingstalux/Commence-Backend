// Simple script to seed the admin database with test data
const { MongoClient } = require('mongodb');

async function seedDatabase() {
  const client = new MongoClient('mongodb://localhost:27017');

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('adminservice');
    const products = db.collection('products');

    // Clear existing data
    await products.deleteMany({});
    console.log('Cleared existing products');

    // Insert test products
    const testProducts = [
      {
        sku: 'LAPTOP-001',
        title: 'MacBook Pro 14"',
        description: 'Apple MacBook Pro with M3 chip',
        price_cents: 199900,
        currency: 'USD',
        stock: 10,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        sku: 'PHONE-001',
        title: 'iPhone 15 Pro',
        description: 'Latest iPhone with advanced camera system',
        price_cents: 99900,
        currency: 'USD',
        stock: 25,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        sku: 'TABLET-001',
        title: 'iPad Air',
        description: 'Powerful tablet for productivity and creativity',
        price_cents: 59900,
        currency: 'USD',
        stock: 15,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        sku: 'HEADPHONE-001',
        title: 'AirPods Pro',
        description: 'Wireless earbuds with active noise cancellation',
        price_cents: 24900,
        currency: 'USD',
        stock: 50,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        sku: 'WATCH-001',
        title: 'Apple Watch Series 9',
        description: 'Advanced smartwatch with health monitoring',
        price_cents: 39900,
        currency: 'USD',
        stock: 30,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    const result = await products.insertMany(testProducts);
    console.log(`Inserted ${result.insertedCount} test products`);

    // Display the inserted products
    const allProducts = await products.find({}).toArray();
    console.log('Products in database:');
    allProducts.forEach((product) => {
      console.log(
        `- ${product.title} (${product.sku}) - $${product.price_cents / 100}`,
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
