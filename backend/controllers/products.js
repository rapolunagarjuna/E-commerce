const {helperFunctionForGetCart } = require("./cart");
const Products = require('../models/Products');
const User = require('../models/User');
const Categories = require('../models/Categories');
const fs = require('fs');
const path = require('path');


const createProduct = async (req, res) => {
  
    if (!req.file) {
      return res.status(400).send('No image provided');
    }

    if(req.body.productCode == null || req.body.category == null || req.body.name == null || req.body.description == null || req.body.dimensions == null ) {
       return res.status(404).json({ message: 'Missing fields'});
    }

    const categoryId = await Categories.findOne({name:req.body.category});
    if (categoryId == null) {
      return res.status(404).json({ message: "Cannot find category"});
    }

  try {
    const newProduct = new Products({
      productCode: req.body.productCode,
      category: categoryId._id,
      name: req.body.name,
      description: req.body.description,
      dimensions: req.body.dimensions,
      image: req.file.path,
    });

    const savedProduct = await newProduct.save();

    return res.status(201).json(savedProduct);
  } catch (err) {
    console.log({ message: err.message });
    return res.status(500).json({ message: 'Internal error, please try again' });
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    const {category} = req.body;
    console.log(req.cookies);
    if (category == null) {
      return res.status(403).json({ message: 'category missing'});
    }
    
    const categoryExists = await Categories.findOne({name: category});
    
    if (categoryExists == null) {
      return res.status(404).json({ message: 'Category does not exist' });
    }

    
    const products = await Products.find({ category: categoryExists._id }).populate('category');
    
    
    // Prepare the response JSON array with image data included
    const productData = products.map(product => {
      const imagePath = path.join(__dirname, "..", product.image);
      const imageBase64 = fs.readFileSync(imagePath, { encoding: 'base64' });
    
      return {
        productCode: product.productCode,
        name: product.name,
        description: product.description,
        category: product.category.name,
        // Add any other fields you want to include here
        imgSrc: imageBase64,
      };
    });


    return res.status(200).json(productData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal error, please try again' });
  }
}

const getProductByProductCode = async (req, res) => {
  const productCode = req.params.productCode;
  if (productCode === undefined || productCode === null) {
    return res.status(403).json({ message: "Product code is required"});
  }

  const product = await Products.findOne({ productCode: productCode});
  if (product === undefined || product === null) {
    return res.status(404).json({ message: "Product not found"});
  }

  const user = await User.findOne({email: 'admin@example.com'});
  if (user === undefined || user === null) {
    return res.status(404).json({ message: "User not found"});
  }

  const cart = await helperFunctionForGetCart(user);
  if (cart === undefined || cart === null) {
    return res.status(404).json({ message: "Cart not found"});
  }


  const imagePath = path.join(__dirname, "..", product.image);
  const imageBase64 = fs.readFileSync(imagePath, { encoding: 'base64' });
  
  return res.json({
    product: {
      productCode: product.productCode,
      name: product.name,
      description: product.description,
      category: product.category.name,
      dimensions: product.dimensions,
        // Add any other fields you want to include here
      imgSrc: imageBase64,
    },
    cart: cart.items
  });

}


module.exports = {
  createProduct,
  getProductsByCategory,
  getProductByProductCode
};
