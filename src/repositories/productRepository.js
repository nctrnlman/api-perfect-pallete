const { Product } = require("../models");

class ProductRepository {
  async create(productData) {
    return await Product.create(productData);
  }

  async findAll() {
    return await Product.findAll({ include: "package" });
  }

  async findById(id) {
    return await Product.findByPk(id);
  }

  async update(id, productData) {
    return await Product.update(productData, {
      where: { id },
    });
  }

  async delete(id) {
    return await Product.destroy({
      where: { id },
    });
  }
}

module.exports = new ProductRepository();
