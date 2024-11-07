const express = require("express");
const Product = require("../Models/product.model");
const app = express();
const getAllProducts = app.get("/", async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ Message: error.Message });
  }
});

const getProductById = app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const createProduct = app.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ Message: error.Message });
  }
});

const updateProduct = app.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ Message: error.message });
  }
});

const deleteProduct = app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    if (!Product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
