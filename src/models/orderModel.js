"use strict";

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("new order", "shipped", "arrived"),
      allowNull: false,
      defaultValue: "new order",
    },
    paymentMethod: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shippingName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    shippingAddress: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  Order.associate = (models) => {
    // Order belongs to a User
    Order.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
    });

    // Order has many OrderDetails
    Order.hasMany(models.OrderDetail, {
      foreignKey: "orderId",
      as: "orderDetails",
    });
  };

  return Order;
};
