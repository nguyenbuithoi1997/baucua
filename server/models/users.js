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
    if(data.fbUID){
      const result = await this.mUser.findAll({
        where:{
          fbUID: data.fbUID
        }
      });
    } else {
      const result = await this.mUser.findAll({
        where:{
          gg_email: data.gg_email
        }
      });
    }
    
    return result[0];
  }

  getInstance() {
    return this.mUser;
  }
}