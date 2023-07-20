const express = require('express');
const userController = require('../controllers/user');
const router = express.Router();
const authenticate = require('../utils/authenticate');
const authorizeAdmin = require('../utils/authorizeAdmin');

router.post('/login', userController.loginUser);
router.put('/users/:email', authenticate, userController.updateUser);
router.post('/users', userController.createUser);
router.get('/users', authenticate, authorizeAdmin, userController.getUsers);
router.delete('/users/:email', authenticate, authorizeAdmin, userController.deleteUser);


module.exports = router;