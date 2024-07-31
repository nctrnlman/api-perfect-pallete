const db = require("../models");
const Cart = db.Cart;
const Product = db.Product;

const getCartItems = async (userId) => {
  const whereClause = userId ? { user_id: userId } : {};
  return await Cart.findAll({
    where: whereClause,
    include: [
      {
        model: Product,
        as: "Product",
      },
    ],
  });
};

const findCartItem = async (userId, productId) => {
  return await Cart.findOne({
    where: { user_id: userId, product_id: productId },
  });
};

const createCartItem = async (userId, productId, qty) => {
  return await Cart.create({
    user_id: userId,
    product_id: productId,
    qty: qty,
  });
};

module.exports = {
  getCartItems,
  findCartItem,
  createCartItem,
};
