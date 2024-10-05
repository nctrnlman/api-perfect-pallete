const packageRepository = require("../repositories/packageRepository");

class PackageService {
  async createPackage(packageData) {
    return await packageRepository.create(packageData);
  }

  async getAllPackages() {
    return await packageRepository.findAll();
  }

  async getPackageById(id) {
    return await packageRepository.findById(id);
  }

  async updatePackage(id, packageData) {
    return await packageRepository.update(id, packageData);
  }

  async deletePackage(id) {
    return await packageRepository.delete(id);
  }
}

module.exports = new PackageService();
