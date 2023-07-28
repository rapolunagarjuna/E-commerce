const express = require('express');
const router = express.Router();

const { createCategory, updateCategory } = require('../controllers/categoryController');
const authenticate = require('../utils/authenticate');
const authorizeAdmin = require('../utils/authorizeAdmin');
const uploadForCategories = require('../utils/uploadForCategories');

router.post('/categories', authenticate, authorizeAdmin, uploadForCategories.single('image'), createCategory);
router.put('/categories/:id', authenticate, authorizeAdmin, uploadForCategories.single('image'), updateCategory);

module.exports = router;