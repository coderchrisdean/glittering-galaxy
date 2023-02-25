'use strict';

const bcrypt = require('bcrypt');
const { User } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return User.bulkCreate([
      {
        username: 'coderchrisdean',
        email: 'coderchrisdean@gmail.com',
        password: await bcrypt.hash('password', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        username: 'jaguks',
        email: 'jaguks@test.com',
        password: await bcrypt.hash('password', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
