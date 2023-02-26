'use strict';

const bcrypt = require('bcrypt');
const { User, sequelize } = require('../../models');

const seedUsers = async () => {
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
}

module.exports = { seedUsers };
