'use strict';
module.exports = function(sequelize, DataTypes) {
  var Supplieritem = sequelize.define('Supplieritem', {
    SupplierId: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Supplieritem;
};