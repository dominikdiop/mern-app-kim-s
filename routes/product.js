const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

/// ROUTES

// test route
router.get("/test", (req, res) => {
  res.send("Hello World");
});
// add Product
router.post("/add", async (req, res) => {
  try {
    const { name, description } = req.body;
    const newProduct = new Product({
      name,
      description,
    });
    await newProduct.save();
    res.status(200).send({ msg: "Product Added Successfully ...", newProduct });
  } catch (error) {
    res.status(400).send({ msg: "Can Not Add Product !!!", error });
  }
});

// get all Product

router.get("/all", async (req, res) => {
  try {
    const listProduct = await Product.find();
    res
      .status(200)
      .send({ msg: "This is the list of all Product...", listProduct });
  } catch (error) {
    res.status(400).send({ msg: "Can Not get all Product !!!", error });
  }
});

// get one Product

router.get("/:id", async (req, res) => {
  try {
    const productToGet = await Product.findOne({ _id: req.params.id });
    res.status(200).send({ msg: "i get the Product...", productToGet });
  } catch (error) {
    res
      .status(400)
      .send({ msg: "Can Not get the product with this id !!!", error });
  }
});

// delete Product

router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await Product.findOneAndDelete({ _id });
    res.status(200).send({ msg: "Product Deleted..." });
  } catch (error) {
    res
      .status(400)
      .send({ msg: "Can Not delete the product with this id !!!", error });
  }
});

// edit Product

router.put("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await Product.updateOne({ _id }, { $set: { ...req.body } });
    res.status(200).send({ msg: "Product updated..." });
  } catch (error) {
    res
      .status(400)
      .send({ msg: "Can Not update the product with this id !!!", error });
  }
});

module.exports = router;
