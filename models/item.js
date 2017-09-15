'use strict';
module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    codeitem:{
      type: DataTypes.STRING,
      validate:{
        // is: ['(HP|SW|LP)\d+/'],
        // msg: 'Code Item harus diawali dengan HP | SW | LP dan diikuti’ dengan 4 digit angka'
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  })
  Item.associate = (models)=>{
    Item.belongsTo(models.Suppliers)
  }
  return Item;
}
