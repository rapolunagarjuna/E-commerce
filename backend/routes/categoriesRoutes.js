const express = require('express');
const router = express.Router();

const { createCategory, updateCategory } = require('../controllers/categories');
const authenticate = require('../utils/authenticate');
const authorizeAdmin = require('../utils/authorizeAdmin');
const uploadForCategories = require('../utils/uploadForCategories');

router.post('/categories', authenticate, authorizeAdmin, createCategory);
router.put('/categories/:id', authenticate, authorizeAdmin, updateCategory);

module.exports = router;