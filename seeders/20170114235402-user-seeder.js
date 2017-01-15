'use strict';

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
        bio: 'This is bio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'John Doe 2',
        bio: 'This is bio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'John Doe 3',
        bio: 'This is bio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'John Doe 4',
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
