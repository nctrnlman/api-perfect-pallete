const db = require("../models");
const Cart = db.Cart;
const Product = db.Product;

const getCartItems = async (userId = null) => {
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

const addToCart = async (userId, productId) => {
  // Check if the item already exists in the cart for the user
  const existingCartItem = await Cart.findOne({
    where: { user_id: userId, product_id: productId },
  });

  if (existingCartItem) {
    // If item exists, increment the qty by 1
    existingCartItem.qty += 1;
    await existingCartItem.save();
    return existingCartItem;
  }

  // If item does not exist, create a new cart item with qty 1
  const newCartItem = await Cart.create({
    user_id: userId,
    product_id: productId,
    qty: 1,
  });
  return newCartItem;
};

const updateCartItem = async (userId, productId, qty) => {
  console.log(
    `Updating cart item for user ${userId}, product ${productId} with qty ${qty}`
  );

  const existingCartItem = await Cart.findOne({
    where: { user_id: userId, product_id: productId },
  });

  if (existingCartItem) {
    existingCartItem.qty = qty; // Update qty
    console.log(
      `Updating existing cart item: ${JSON.stringify(existingCartItem)}`
    );
    await existingCartItem.save(); // Save changes to database
    return existingCartItem;
  }

  throw new Error("Cart item not found");
};

const removeFromCart = async (userId, productId) => {
  const existingCartItem = await Cart.findOne({
    where: { user_id: userId, product_id: productId },
  });

  if (existingCartItem) {
    await existingCartItem.destroy();
  } else {
    throw new Error("Cart item not found");
  }
};

module.exports = {
  getCartItems,
  addToCart,
  updateCartItem,
  removeFromCart,
};
