'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    queryInterface.addColumn('Users', 'email', {
      type: Sequelize.STRING,
      after: 'name'
    });
    queryInterface.addColumn('Users', 'password', {
      type: Sequelize.STRING,
      after: 'email'
    });
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    queryInterface.removeColumn('Users', 'email');
    queryInterface.removeColumn('Users', 'password');
  }
};
