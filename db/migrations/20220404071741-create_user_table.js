'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.crateTable('users',{
    id: {
      allowNull: false,
      autoIncreament: true,
      primaryKey: true,
      type: Sequelize.BIGINT
    },
    name: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE
    },
    deleted_at: {
      allowNull: false,
      type: Sequelize.DATE
    }
  })
},
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
};



