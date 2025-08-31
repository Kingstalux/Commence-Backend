// Script to seed the database with admin user and roles
const { MongoClient } = require('mongodb');

async function seedDatabase() {
  const client = new MongoClient('mongodb://localhost:27017');

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('userservice');
    const users = db.collection('users');
    const roles = db.collection('roles');
    const userRoles = db.collection('userroles');

    // Clear existing data
    await userRoles.deleteMany({});
    await roles.deleteMany({});
    await users.deleteMany({});
    console.log('Cleared existing data');

    // 1. Create roles first
    const rolesToCreate = [
      { name: 'admin' },
      { name: 'user' },
      { name: 'moderator' },
    ];

    const roleResult = await roles.insertMany(rolesToCreate);
    console.log(`Inserted ${roleResult.insertedCount} roles`);

    // Get the admin role ID
    const adminRole = await roles.findOne({ name: 'admin' });

    // 2. Create admin user
    const adminUsers = [
      {
        name: 'Admin User',
        email: 'admin@commence.com',
        password: '123admin',
        preferences: {
          theme: 'dark',
          notifications: true,
        },
      },
    ];

    const userResult = await users.insertMany(adminUsers);
    console.log(`Inserted ${userResult.insertedCount} users`);

    // 3. Create user-role associations
    const adminUser = await users.findOne({ email: 'admin@commence.com' });

    const userRoleAssociations = [
      {
        user_id: adminUser._id,
        role_id: adminRole._id,
      },
    ];

    const userRoleResult = await userRoles.insertMany(userRoleAssociations);
    console.log(
      `Created ${userRoleResult.insertedCount} user-role associations`,
    );

    // 4. Display results
    console.log('\n=== SEEDING COMPLETED ===');
    console.log('\nRoles created:');
    const allRoles = await roles.find({}).toArray();
    allRoles.forEach((role) => {
      console.log(`- ${role.name} (ID: ${role._id})`);
    });

    console.log('\nUsers created:');
    const allUsers = await users.find({}).toArray();
    for (const user of allUsers) {
      const userRole = await userRoles.findOne({ user_id: user._id });
      const roleInfo = userRole
        ? await roles.findOne({ _id: userRole.role_id })
        : null;
      console.log(
        `- ${user.name} (${user.email}) - Role: ${roleInfo?.name || 'No role'}`,
      );
    }

    console.log('\n=== ADMIN LOGIN CREDENTIALS ===');
    console.log('Email: admin@commence.com');
    console.log('Password: admin123');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.close();
    console.log('\nDatabase connection closed');
  }
}

seedDatabase();
