'use strict';

const { Post } = require('../../models');

const seedPosts = async () => {
  return Post.bulkCreate([
    {
      title: 'How to use Express.js',
      content: 'Dig in!',
      user_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: '10 Tricks for Efficient Development',
      content: 'Lorem ipsum dolor sit amet, consectetur',
      user_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },
  ]);
};

module.exports = {
  up: seedPosts,
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('posts', null, {});
  }
};
