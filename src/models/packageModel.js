"use strict";

module.exports = (sequelize, DataTypes) => {
  const Package = sequelize.define("Package", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Package.associate = (models) => {
    Package.hasMany(models.Product, {
      foreignKey: "packageId",
      as: "products",
    });
  };

  return Package;
};
