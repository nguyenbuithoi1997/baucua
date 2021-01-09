'use strict';

const oldNameColumn = "fb_email";
const newNameColumn = "fbUID";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users',
        'permission_id'
    );
    await queryInterface.renameColumn('users', oldNameColumn, newNameColumn);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users',
        'permission_id',
        {
          type: Sequelize.INTEGER,
          allowNull: false
        }
    );

    await queryInterface.renameColumn('users', newNameColumn, oldNameColumn);
  }
};
