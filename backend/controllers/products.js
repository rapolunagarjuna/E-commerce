const Products = require('../models/Products');

const createProduct = async (req, res) => {
  try {
    if(req.body.productID == null || req.body.category == null || req.body.name == null || req.body.description == null || req.body.dimensions == null ) {
       return res.status(404).json({ message: 'Cannot find product' });
    }

    const newProduct = new Products({
      productID: req.body.productID,
      category: req.body.category,
      name: req.body.name,
      description: req.body.description,
      dimensions: req.body.dimensions,
    });

    const savedProduct = await newProduct.save();

    return res.status(201).json(savedProduct);
  } catch (err) {
    console.log({ message: err.message });
    return res.status(500).json({ message: 'Internal error, please try again' });
  }
};

const updateProduct = async (req, res) => {
  try {
    let product = await Products.findById(req.params.id);

    if (product == null) {
      return res.status(404).json({ message: 'Cannot find product' });
    }

    if (req.body.productID != null) {
      product.productID = req.body.productID;
    }
    if (req.body.category != null) {
      product.category = req.body.category;
    }
    if (req.body.name != null) {
      product.name = req.body.name;
    }
    if (req.body.description != null) {
      product.description = req.body.description;
    }
    if (req.body.dimensions != null) {
      product.dimensions = req.body.dimensions;
    }

    const updatedProduct = await product.save();
    
    return res.json(updatedProduct);
  } catch (err) {
    console.log({ message: err.message });
    return res.status(500).json({ message: 'Internal error, please try again' });
  }
};


module.exports = {
  createProduct, 
  updateProduct,
};
