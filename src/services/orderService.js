const orderRepository = require("../repositories/orderRepository");

const getAllOrders = async (status) => {
  return await orderRepository.getAllOrders(status);
};

const createOrder = async (orderData) => {
  return await orderRepository.createOrder(orderData);
};

const getOrderById = async (id) => {
  return await orderRepository.getOrderById(id);
};

const updateOrder = async (id, orderData) => {
  return await orderRepository.updateOrder(id, orderData);
};

const deleteOrder = async (id) => {
  return await orderRepository.deleteOrder(id);
};

module.exports = {
  getAllOrders,
  createOrder,
  getOrderById,
  updateOrder,
  deleteOrder,
};
