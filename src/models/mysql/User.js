const Sequelize = require('sequelize')
const sequelize = require('../../database')
const Model = Sequelize.Model;
class User extends Model {}
User.init({
  // attributes
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email:{
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false
  },
  password:{
    type: Sequelize.STRING,
    allowNull: false
  },
  borndate:{
    type: Sequelize.DATE,
    allowNull: false
  },
  phone:{
    type: Sequelize.STRING,
    allowNull: false
  },
  address:{
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'user'
  // options
});
module.exports = User;