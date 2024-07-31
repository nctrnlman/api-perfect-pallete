const express = require("express");
const {
  getCartItems,
  addToCart,
  updateCartItem,
  removeFromCart,
} = require("../controllers/cartController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, getCartItems);
router.post("/", authMiddleware, addToCart);
router.put("/", authMiddleware, updateCartItem);
router.delete("/", authMiddleware, removeFromCart);

module.exports = router;
