// Simple script to seed the database with product data
const { MongoClient } = require('mongodb');

async function seedProducts() {
  const client = new MongoClient('mongodb://localhost:27017');

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('userservice');
    const products = db.collection('productmodels');

    // Clear existing data
    await products.deleteMany({});
    console.log('Cleared existing products');

    // Insert test products
    const testProducts = [
      {
        name: 'Premium Wireless Headphones',
        title: 'Premium Wireless Headphones',
        description:
          'High-quality wireless headphones with noise cancellation and premium sound quality.',
        price: 149995,
        discountedPrice: 124995,
        category: 'Electronics',
        tags: ['wireless', 'audio', 'premium'],
        imageUrl: '/premium-wireless-headphones.png',
        inStock: true,
        stockCount: 25,
      },
      {
        name: 'Ergonomic Office Chair',
        title: 'Ergonomic Office Chair',
        description:
          'Comfortable ergonomic office chair with lumbar support and adjustable height.',
        price: 224995,
        category: 'Furniture',
        tags: ['office', 'ergonomic', 'comfort'],
        imageUrl: '/ergonomic-office-chair.png',
        inStock: true,
        stockCount: 12,
      },
      {
        name: 'Smart Fitness Watch',
        title: 'Smart Fitness Watch',
        description:
          'Advanced fitness tracking watch with heart rate monitor and GPS.',
        price: 99995,
        discountedPrice: 89995,
        category: 'Wearables',
        tags: ['fitness', 'smart', 'health'],
        imageUrl: '/smart-fitness-watch.png',
        inStock: true,
        stockCount: 8,
      },
      {
        name: 'Mechanical Gaming Keyboard',
        title: 'Mechanical Gaming Keyboard',
        description:
          'RGB mechanical keyboard with tactile switches perfect for gaming and typing.',
        price: 64995,
        category: 'Electronics',
        tags: ['gaming', 'mechanical', 'rgb'],
        imageUrl: '/mechanical-gaming-keyboard.png',
        inStock: false,
        stockCount: 0,
      },
      {
        name: 'Portable Bluetooth Speaker',
        title: 'Portable Bluetooth Speaker',
        description:
          'Compact waterproof Bluetooth speaker with excellent sound quality.',
        price: 39995,
        discountedPrice: 29995,
        category: 'Electronics',
        tags: ['bluetooth', 'portable', 'waterproof'],
        imageUrl: '/portable-bluetooth-speaker.png',
        inStock: true,
        stockCount: 15,
      },
      {
        name: 'Standing Desk Converter',
        title: 'Standing Desk Converter',
        description:
          'Adjustable standing desk converter to transform any desk into a standing workstation.',
        price: 99995,
        category: 'Furniture',
        tags: ['standing', 'desk', 'ergonomic'],
        imageUrl: '/standing-desk-converter.png',
        inStock: true,
        stockCount: 6,
      },
    ];

    const result = await products.insertMany(testProducts);
    console.log(`Inserted ${result.insertedCount} test products`);

    // Display the inserted products
    const allProducts = await products.find({}).toArray();
    console.log('Products in database:');
    allProducts.forEach((product) => {
      console.log(`- ${product.name} (${product.price} FCFA)`);
    });
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.close();
    console.log('Database connection closed');
  }
}

seedProducts();
