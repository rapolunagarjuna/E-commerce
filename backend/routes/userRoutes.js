import express from 'express';
import { loginUser, createUser, getUsers } from '../controllers/user.js';
import authenticate from '../utils/authenticate.js';
import authorizeAdmin from '../utils/authorizeAdmin.js';

const router = express.Router();

router.post('/login', loginUser);
router.post('/users', createUser);
router.get('/users', authenticate, authorizeAdmin, getUsers);

export default router;
