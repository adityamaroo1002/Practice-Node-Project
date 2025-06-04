// sync.js
const db = require('./index'); // <-- this loads models/index.js

(async () => {
  try {
    // 1) Confirm connection
    await db.sequelize.authenticate();
    console.log('✅ Database connection established.');

    // 2) Sync only the Airplane table (altering if it already exists)
    await db.Airplane.sync({ alter: true });
    console.log('✈️  Airplane table altered successfully.');

    // If you ever want to sync ALL models:
    // await db.sequelize.sync({ alter: true });

  } catch (error) {
    console.error('❌ Error during sync:', error);
  } finally {
    // 3) Close connection when done
    await db.sequelize.close();
    console.log('🔒 Connection closed.');
  }
})();
