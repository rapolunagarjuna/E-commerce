import express from "express";
import {
  getAllProducts,
  getAllCategories,
  getAllUsers,
  getAllOrders,
  getAllEmployees,
  getAllPendingOrders,
  createCategory,
  updateCategory,
  createUser,
  updateUser,
  deleteUser,
  deleteCategory,
  updateProduct,
  deleteProduct,
  getPendingOrderById,
  updateEmployee,
  createEmployee,
  getOrderById,
  updateOrder,
  approveOrderById,
} from "../controllers/admin.js";
import { getAllInventory } from "../controllers/inventory.js";
import { createProduct } from "../controllers/products.js";
import adminAuthQuery from "../utils/adminAuthQuery.js";
import { upload } from "../utils/upload.js";

const router = express.Router();
// Define your routes using the imported controller functions
router.get("/products", adminAuthQuery, getAllProducts);
router.get("/categories", adminAuthQuery, getAllCategories);
router.get("/users", adminAuthQuery, getAllUsers);
router.get("/employees", adminAuthQuery, getAllEmployees);
router.get("/orders", adminAuthQuery, getAllOrders);
router.get("/orders/pending", adminAuthQuery, getAllPendingOrders);
router.get("/orders/pending/:orderNumber", adminAuthQuery, getPendingOrderById);
router.get('/orders/:orderNumber', adminAuthQuery, getOrderById);
router.get('/inventory', adminAuthQuery, getAllInventory);

router.post("/categories", adminAuthQuery, createCategory);
router.post("/users", adminAuthQuery, createUser);
router.post("/employees", adminAuthQuery, createEmployee);
router.post("/products", upload.single("image"), adminAuthQuery, createProduct);
router.post("/orders/:_id", adminAuthQuery, approveOrderById);

router.put("/orders/:_id", adminAuthQuery, updateOrder);
router.put("/categories", adminAuthQuery, updateCategory);
router.put("/users", adminAuthQuery, updateUser);
router.put("/employees", adminAuthQuery, updateEmployee);
router.put("/products", adminAuthQuery, updateProduct);

router.delete("/categories/:categoryName", adminAuthQuery, deleteCategory);
router.delete("/users/:email", adminAuthQuery, deleteUser);
router.delete("/products/:productCode", adminAuthQuery, deleteProduct);

export default router;
