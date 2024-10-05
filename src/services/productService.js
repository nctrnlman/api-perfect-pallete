const productRepository = require("../repositories/productRepository");

class ProductService {
  async createProduct(productData) {
    return await productRepository.create(productData);
  }

  async getAllProducts() {
    return await productRepository.findAll();
  }

  async getProductById(id) {
    return await productRepository.findById(id);
  }

  async updateProduct(id, productData) {
    return await productRepository.update(id, productData);
  }

  async deleteProduct(id) {
    return await productRepository.delete(id);
  }
}

module.exports = new ProductService();
