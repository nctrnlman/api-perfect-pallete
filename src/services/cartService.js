const cartRepository = require("../repositories/cartRepository");

const getCartItems = async (userId) => {
  return await cartRepository.getCartItems(userId);
};

const addToCart = async (userId, productId) => {
  const existingCartItem = await cartRepository.findCartItem(userId, productId);
  if (existingCartItem) {
    existingCartItem.qty += 1;
    await existingCartItem.save();
    return existingCartItem;
  }
  return await cartRepository.createCartItem(userId, productId, 1);
};

const reduceFromCart = async (userId, productId) => {
  const existingCartItem = await cartRepository.findCartItem(userId, productId);
  if (existingCartItem) {
    if (existingCartItem.qty > 1) {
      existingCartItem.qty -= 1;
      await existingCartItem.save();
      return existingCartItem;
    } else {
      await existingCartItem.destroy();
      return null;
    }
  }
  throw new Error("Cart item not found");
};

const updateCartItem = async (userId, productId, qty) => {
  const existingCartItem = await cartRepository.findCartItem(userId, productId);
  if (existingCartItem) {
    existingCartItem.qty = qty;
    await existingCartItem.save();
    return existingCartItem;
  }
  throw new Error("Cart item not found");
};

const removeFromCart = async (userId, productId) => {
  const existingCartItem = await cartRepository.findCartItem(userId, productId);
  if (existingCartItem) {
    await existingCartItem.destroy();
  } else {
    throw new Error("Cart item not found");
  }
};

module.exports = {
  getCartItems,
  addToCart,
  reduceFromCart,
  updateCartItem,
  removeFromCart,
};
