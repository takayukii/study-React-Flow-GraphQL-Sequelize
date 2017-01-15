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
    return queryInterface.bulkInsert('Posts', [
      {
        id: 1,
        title: 'Title 1',
        body: 'This is body 1',
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1
      },
      {
        id: 2,
        title: 'Title 2',
        body: 'This is body 2',
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1
      },
      {
        id: 3,
        title: 'Title 3',
        body: 'This is body 3',
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1
      },
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
