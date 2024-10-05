"use strict";

module.exports = (sequelize, DataTypes) => {
  const OrderDetail = sequelize.define("OrderDetail", {
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    packageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  OrderDetail.associate = (models) => {
    // OrderDetail belongs to an Order
    OrderDetail.belongsTo(models.Order, {
      foreignKey: "orderId",
      as: "order",
    });

    // OrderDetail belongs to a Package
    OrderDetail.belongsTo(models.Package, {
      foreignKey: "packageId",
      as: "package",
    });
  };

  return OrderDetail;
};
