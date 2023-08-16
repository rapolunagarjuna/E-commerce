import Inventory from "../models/Inventory.js";
import Products from "../models/Products.js";

export async function addInventory(req, res) {
  const { productCode, dimension, quantity } = req.body;

  try {
    if (typeof quantity !== "number" || quantity < 0) {
      return res
        .status(400)
        .json({ message: "Quantity must be a positive number" });
    }

    const product = await Products.findOne({ productCode: productCode });
    if (product === null || product === undefined) {
      return res
        .status(404)
        .json({ message: "Product code provided doesn't exist" });
    }

    console.log(product.dimensions);
    console.log(dimension);

    if (product.dimensions.findIndex((dim) => dim === dimension) === -1) {
      return res.status(404).json({ message: "Dimension doesn't exist" });
    }

    let productInventory = await Inventory.findOne({
      productId: product._id,
      dimension: dimension,
    });

    if (productInventory === null || productInventory === undefined) {
      await Inventory.create({
        productId: product._id,
        dimension: dimension,
        quantity: quantity,
      });
    } else {
      const newQuantity = productInventory.quantity + quantity;
      productInventory.quantity = newQuantity;
      await productInventory.save();
    }

    return res.status(200).json({ message: "Added to inventory successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error, try again later" });
  }
}

export async function getAllInventory(req, res) {
  try {
    const inventory = await Inventory.find({}).populate({
      path: "productId",
      populate: {
        path: "category", // Correctly specifying the nested path
      },
    });

    const editedInventory = inventory.map((item) => ({
        productCode: item.productId.productCode,
        name: item.productId.name,
        description: item.productId.description,
        category: item.productId.category.name,
        dimension: item.dimension,
        quantity: item.quantity,
    }))

    return res.status(200).json(editedInventory);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Internal Server Error, try again later" });
  }
}

export async function getInventoryByProductCode(req, res) {
  try {
    const { productCode, dimension } = req.body;
    const product = await Products.findOne({ productCode: productCode });
    if (product === null) {
      return res.status(404).json({ message: "product code doesnt exist" });
    }
    const inventory = await Inventory.findOne({
      productId: product._id,
      dimension: dimension,
    }).populate({
      path: "productId",
      populate: {
        path: "category", // Correctly specifying the nested path
      },
    });
    if (inventory === null) {
      return res.status(404).json({ message: "inventory doesnt exist" });
    }

    const editedInventory = {
        productCode: inventory.productId.productCode,
        name: inventory.productId.name,
        description: inventory.productId.description,
        category: inventory.productId.category.name,
        dimension: inventory.dimension,
        quantity: inventory.quantity,
    };

    return res.status(200).json(editedInventory);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Internal Server Error, try again later" });
  }
}
