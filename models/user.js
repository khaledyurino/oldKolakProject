'use strict';
const crypt = require('../helpers/cyrpt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
    static associate(models) {
      // define association here
    }
    
  };
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    kolakCount: DataTypes.INTEGER,
    rujakCount: DataTypes.INTEGER,
    cendolCount:DataTypes.INTEGER
  }, 
  {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((instance, options) => {
    // console.log(instance);
    const hash = crypt.hashPassword(instance.password)
    instance.password = hash
  });
  
  return User;
};