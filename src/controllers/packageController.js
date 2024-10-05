const packageService = require("../services/packageService");

const getPackages = async (req, res) => {
  try {
    const packages = await packageService.getAllPackages();
    res.sendResponse(
      "success",
      "Packages retrieved successfully",
      packages,
      null,
      200
    );
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to retrieve packages",
      null,
      [error.message],
      500
    );
  }
};

const getPackage = async (req, res) => {
  try {
    const package = await packageService.getPackageById(req.params.id);
    if (package) {
      res.sendResponse(
        "success",
        "Package retrieved successfully",
        package,
        null,
        200
      );
    } else {
      res.sendResponse("error", "Package not found", null, null, 404);
    }
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to retrieve package",
      null,
      [error.message],
      500
    );
  }
};

const createPackage = async (req, res) => {
  try {
    const newPackage = await packageService.createPackage(req.body);
    res.sendResponse(
      "success",
      "Package created successfully",
      newPackage,
      null,
      201
    );
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to create package",
      null,
      [error.message],
      500
    );
  }
};

const updatePackage = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPackage = await packageService.updatePackage(id, req.body);
    if (updatedPackage) {
      res.sendResponse(
        "success",
        "Package updated successfully",
        updatedPackage,
        null,
        200
      );
    } else {
      res.sendResponse("error", "Package not found", null, null, 404);
    }
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to update package",
      null,
      [error.message],
      500
    );
  }
};

const deletePackage = async (req, res) => {
  try {
    const success = await packageService.deletePackage(req.params.id);
    if (success) {
      res.sendResponse(
        "success",
        "Package deleted successfully",
        null,
        null,
        200
      );
    } else {
      res.sendResponse("error", "Package not found", null, null, 404);
    }
  } catch (error) {
    res.sendResponse(
      "error",
      "Failed to delete package",
      null,
      [error.message],
      500
    );
  }
};

module.exports = {
  getPackages,
  getPackage,
  createPackage,
  updatePackage,
  deletePackage,
};
