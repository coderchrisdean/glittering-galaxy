
const userSeeds = require('./user-seeds');
const postSeeds = require('./post-seeds');
const commentSeeds = require('./comment-seeds');
const { sequelize } = require('../../models')

const seedDatabase = async () => {
    try {
        await sequelize.sync({ force: true });
        await userSeeds.seedUsers();
        await commentSeeds.seedComments();
        await postSeeds.up();
        console.log("Database successfully seeded.");
        process.exit(0);
    } catch (error) {
        console.error("Failed to seed database.", error);
        process.exit(1);
    } 
};

seedDatabase();

module.exports = sequelize;