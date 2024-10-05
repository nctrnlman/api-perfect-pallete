const productService = require("../services/productService");

const getProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.sendResponse(
      "success",
      "Products retrieved successfully",
      products,
      null,
      200
    );
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to retrieve products",
      null,
      [error.message],
      500
    );
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);
    if (product) {
      res.sendResponse(
        "success",
        "Product retrieved successfully",
        product,
        null,
        200
      );
    } else {
      res.sendResponse("error", "Product not found", null, null, 404);
    }
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to retrieve product",
      null,
      [error.message],
      500
    );
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = await productService.createProduct(req.body);
    res.sendResponse(
      "success",
      "Product created successfully",
      newProduct,
      null,
      201
    );
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to create product",
      null,
      [error.message],
      500
    );
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await productService.updateProduct(id, req.body);
    if (updatedProduct) {
      res.sendResponse(
        "success",
        "Product updated successfully",
        updatedProduct,
        null,
        200
      );
    } else {
      res.sendResponse("error", "Product not found", null, null, 404);
    }
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to update product",
      null,
      [error.message],
      500
    );
  }
};

const deleteProduct = async (req, res) => {
  try {
    const success = await productService.deleteProduct(req.params.id);
    if (success) {
      res.sendResponse(
        "success",
        "Product deleted successfully",
        null,
        null,
        200
      );
    } else {
      res.sendResponse("error", "Product not found", null, null, 404);
    }
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to delete product",
      null,
      [error.message],
      500
    );
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
