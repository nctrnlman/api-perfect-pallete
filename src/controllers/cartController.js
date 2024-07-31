const cartService = require("../services/cartService");

const getCartItems = async (req, res) => {
  try {
    const userId = req.query.userId || null; // Get userId from query parameters if provided
    const carts = await cartService.getCartItems(userId);
    res.sendResponse(
      "success",
      "Carts retrieved successfully",
      carts,
      null,
      200
    );
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to retrieve carts",
      null,
      [error.message],
      500
    );
  }
};

const addToCart = async (req, res) => {
  try {
    const { product_id } = req.body; // Get product_id from request body
    const cartItem = await cartService.addToCart(req.userId, product_id);
    res.sendResponse(
      "success",
      "Cart item added successfully",
      cartItem,
      null,
      201
    );
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to add to cart",
      null,
      [error.message],
      500
    );
  }
};

const updateCartItem = async (req, res) => {
  try {
    const { product_id, qty } = req.body;
    if (qty < 0) {
      return res.sendResponse(
        "error",
        "Quantity cannot be less than 0",
        null,
        null,
        400
      );
    }
    const cartItem = await cartService.updateCartItem(
      req.userId,
      product_id,
      qty
    );
    res.sendResponse(
      "success",
      "Cart item updated successfully",
      cartItem,
      null,
      200
    );
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to update cart item",
      null,
      [error.message],
      500
    );
  }
};

const removeFromCart = async (req, res) => {
  try {
    const { product_id } = req.body;
    await cartService.removeFromCart(req.userId, product_id);
    res.sendResponse(
      "success",
      "Cart item removed successfully",
      null,
      null,
      200
    );
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to remove from cart",
      null,
      [error.message],
      500
    );
  }
};

module.exports = {
  getCartItems,
  addToCart,
  updateCartItem,
  removeFromCart,
};
