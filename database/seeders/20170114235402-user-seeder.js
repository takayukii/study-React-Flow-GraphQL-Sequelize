'use strict';

const bcrypt = require('bcrypt');
require('dotenv').config();

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [
      {
        id: 1,
        name: 'John Doe 1',
        email: 'user1@example.com',
        password: bcrypt.hashSync('testtest', process.env.SALT),
        bio: 'This is bio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'John Doe 2',
        email: 'user2@example.com',
        password: bcrypt.hashSync('testtest', process.env.SALT),
        bio: 'This is bio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'John Doe 3',
        email: 'user3@example.com',
        password: bcrypt.hashSync('testtest', process.env.SALT),
        bio: 'This is bio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'John Doe 4',
        email: 'user4@example.com',
        password: bcrypt.hashSync('testtest', process.env.SALT),
        bio: 'This is bio',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
