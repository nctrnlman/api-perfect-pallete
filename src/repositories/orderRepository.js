const { Order, OrderDetail, Package, User } = require("../models");

const getAllOrders = async (status = null) => {
  const whereClause = {};
  if (status) {
    whereClause.status = status;
  }
  return await Order.findAll({
    where: whereClause,
    include: [
      {
        model: OrderDetail,
        as: "orderDetails",
        include: [
          {
            model: Package,
            as: "package",
          },
        ],
      },
      {
        model: User,
        as: "user",
      },
    ],
  });
};

const createOrder = async (orderData) => {
  return await Order.create(orderData, {
    include: [
      {
        model: OrderDetail,
        as: "orderDetails",
      },
    ],
  });
};

const getOrderById = async (id) => {
  return await Order.findByPk(id, {
    include: [
      {
        model: OrderDetail,
        as: "orderDetails",
      },
    ],
  });
};

const updateOrder = async (id, orderData) => {
  return await Order.update(orderData, {
    where: { id },
  });
};

const deleteOrder = async (id) => {
  return await Order.destroy({
    where: { id },
  });
};

module.exports = {
  getAllOrders,
  createOrder,
  getOrderById,
  updateOrder,
  deleteOrder,
};
