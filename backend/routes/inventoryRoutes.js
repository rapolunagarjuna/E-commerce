import express from 'express';
import { addInventory, getAllInventory, getInventoryByProductCode } from '../controllers/inventory.js';
import editorAuthUsingQuery from '../utils/editorAuthUsingQuery.js'
const router = express.Router();

router.post('/inventory', editorAuthUsingQuery, addInventory);
router.get('/inventory', editorAuthUsingQuery, getAllInventory);
router.post('/inventory/:productCode', editorAuthUsingQuery, getInventoryByProductCode);

export default router;