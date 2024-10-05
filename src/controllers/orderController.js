const orderService = require("../services/orderService");

const getAllOrders = async (req, res) => {
  const { status } = req.query;
  const orders = await orderService.getAllOrders(status);
  res.sendResponse("success", "Orders fetched successfully", orders, null, 200);
};

const createOrder = async (req, res) => {
  const orderData = req.body;
  const newOrder = await orderService.createOrder(orderData);
  res.sendResponse(
    "success",
    "Order created successfully",
    newOrder,
    null,
    201
  );
};

const getOrderById = async (req, res) => {
  const order = await orderService.getOrderById(req.params.id);
  res.sendResponse("success", "Order fetched successfully", order, null, 200);
};

const updateOrder = async (req, res) => {
  const updatedOrder = await orderService.updateOrder(req.params.id, req.body);
  res.sendResponse(
    "success",
    "Order updated successfully",
    updatedOrder,
    null,
    200
  );
};

const deleteOrder = async (req, res) => {
  await orderService.deleteOrder(req.params.id);
  res.sendResponse("success", "Order deleted successfully", null, null, 200);
};

module.exports = {
  getAllOrders,
  createOrder,
  getOrderById,
  updateOrder,
  deleteOrder,
};
