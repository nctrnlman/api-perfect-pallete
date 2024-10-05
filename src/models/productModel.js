"use strict";

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  Product.associate = (models) => {
    Product.belongsTo(models.Package, {
      foreignKey: "packageId",
      as: "package",
    });
  };

  return Product;
};
