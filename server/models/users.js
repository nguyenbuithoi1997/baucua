const Main = require('./AllModel');


module.exports = class User extends Main {

  constructor() {
    super();
    this.mUser = this.mainUser();
      // users.hasMany(models.bankaccounts, {as: 'bankaccounts' })
      // users.hasMany(models.matcheshistory, {as: 'matcheshistory' })
      // users.hasMany(models.transfershistory, {as: 'transfershistory' })
      // users.belongsTo(models.permissions, { foreignKey: 'permission_id', as: 'permission' })

  }

  createUser(data){
    return this.mUser.create(data);
  }
  async login(data){
    const result = await this.mUser.findAll({
      where:{
        fbUID: data.fbUID,
        gg_email: data.gg_email,
        name: data.name
      }
    });
    return result[0];
  }
}