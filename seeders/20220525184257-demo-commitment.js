'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Commitments', [
    {
      name: 'Admin test',
      title: 'Its Just a test for now',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Commitments', null, {}),
};
