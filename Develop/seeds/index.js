const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedTips = require('./tipData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedTips();

  process.exit(0);
};

seedAll();
