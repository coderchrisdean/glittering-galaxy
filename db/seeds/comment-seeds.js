'use strict';

const { Comment } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Comment.bulkCreate([
      {
        content: 'test post1',
        user_id: 1,
        post_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        content: 'This is super cool!',
        user_id: 2,
        post_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('comments', null, {});
  }
};
