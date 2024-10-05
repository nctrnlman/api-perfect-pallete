const { Package } = require("../models");

class PackageRepository {
  async create(packageData) {
    return await Package.create(packageData);
  }

  async findAll() {
    return await Package.findAll({ include: "products" });
  }

  async findById(id) {
    return await Package.findByPk(id, { include: "products" });
  }

  async update(id, packageData) {
    return await Package.update(packageData, {
      where: { id },
    });
  }

  async delete(id) {
    return await Package.destroy({
      where: { id },
    });
  }
}

module.exports = new PackageRepository();
