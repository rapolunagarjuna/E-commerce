import express from 'express';

import { createCategory} from '../controllers/categories.js';

const router = express.Router();
router.post('/categories', createCategory);
// router.put('/categories/:id', authenticate, authorizeAdmin, updateCategory);

export default router;