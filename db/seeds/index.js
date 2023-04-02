const userSeeds = require('./user-seeds');
const seedPosts  = require('./post-seeds');
const { sequelize, User, Post } = require('../../models');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  
  const users = await User.bulkCreate(userSeeds, {
    individualHooks: true,
    returning: true,
  });
  
  const posts = await Post.bulkCreate(seedPosts(), {
    returning: true,
  });

  for (const post of posts) {
    await post.setUser(users[Math.floor(Math.random() * users.length)]);
  }
  
  process.exit(0);
};

seedDatabase();
module.exports = sequelize;
