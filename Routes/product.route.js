const express = require("express");
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../Controllers/product.controller.js");
const app = express();
const router = express.Router();

// Add your routes here
router.get("/", getAllProducts);

router.get("/:id", getProductById);

router.post("/", createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;
