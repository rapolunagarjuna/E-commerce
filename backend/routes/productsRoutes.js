import express from 'express';
import {
  createProduct,
  getProductsByCategory,
  getProductByProductCode,
} from '../controllers/products.js';
import authenticate from '../utils/authenticate.js';
import authorizeAdmin from '../utils/authorizeAdmin.js';
import {upload} from '../utils/upload.js';

const router = express.Router();

router.post('/products/category', getProductsByCategory);
router.get('/products/:productCode', getProductByProductCode);
router.post('/products', upload.single('image'), authenticate, authorizeAdmin, createProduct);

export default router;
