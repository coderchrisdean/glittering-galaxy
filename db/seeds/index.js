const db = require('../../models');
const userSeeds = require('./user-seeds');
const postSeeds = require('./post-seeds');
const commentSeeds = require('./comment-seeds');


const seedDatabase = async () => {
  try {
    await db.sequelize.sync({ force: true });
    await userSeeds.seedUsers();
    await commentSeeds.seedComments();
    await postSeeds.seedPost();

    

    console.log("Database successfully seeded.");
  } catch (error) {
    console.error("Failed to seed database.", error);
  } 
};

seedDatabase();
