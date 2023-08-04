const express = require('express');
const userController = require('../controllers/user');
const router = express.Router();
const authenticate = require('../utils/authenticate');
const authorizeAdmin = require('../utils/authorizeAdmin');

router.post('/login', userController.loginUser);
router.post('/users', userController.createUser);
router.get('/users', authenticate, authorizeAdmin, userController.getUsers);


module.exports = router;