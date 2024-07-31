// src/models/cart.js

module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define("Cart", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Products",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  });

  Cart.associate = (models) => {
    Cart.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "User",
    });
    Cart.belongsTo(models.Product, {
      foreignKey: "product_id",
      as: "Product",
    });
  };

  return Cart;
};
