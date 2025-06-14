'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airplane.init({
    modelNumber: DataTypes.STRING,
    planeName: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Airplane',
  });

  const alterTable = async()=> {
  await Airplane.sync({ alter: true}) 
 }

 alterTable();

  return Airplane;
};

 