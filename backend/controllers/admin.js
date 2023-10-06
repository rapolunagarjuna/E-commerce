import User from "../models/User.js";
import Categories from "../models/Categories.js";
import Orders from "../models/Orders.js";
import OrderItem from "../models/OrderItem.js";
import Products from "../models/Products.js";
import generateRandomPassword from "../utils/passwordGenerator.js";
import sendPassword from "../utils/mails/mailPassword.js";
import sendApprovalMail from "../utils/mails/orderApproved.js";
import sendUpdationMail from "../utils/mails/updatedOrder.js";


//getting all products, orders, categories and users
export async function getAllUsers(req, res) {
  try {
    const users = await User.find(
      {role: "User"},
      "firstName lastName email role discount phoneNumber"
    );
    return res.json({ users: users });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Internal Server Error, try again" });
  }
}

export async function getAllEmployees(req, res) {
  try {
    const users = await User.find(
      {role: "Editor"},
      "firstName lastName email role discount phoneNumber"
    );
    return res.json({ users: users });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Internal Server Error, try again" });
  }
}

export async function getAllOrders(req, res) {
  try {
    const orders = await Orders.find({
      status: { $in: ["Cancelled", "Accepted", "Delivered"] },
    }).populate("userId", "firstName lastName email role");

    return res.json({ orders: orders });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Internal Server Error, try again" });
  }
}

export async function getAllPendingOrders(req, res) {
  try {
    const orders = await Orders.find({
      status: { $in: ["Pending", "In-Progress"] },
    }).populate("userId", "firstName lastName email role");
    return res.json({ orders: orders });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Internal Server Error, try again" });
  }
}

export async function getAllProducts(req, res) {
  try {
    const products = await Products.find(
      {},
      "productCode name description dimensions category price"
    ).populate("category");
    return res.json({ products: products });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Internal Server Error, try again" });
  }
}

export async function getAllCategories(req, res) {
  try {
    const categories = await Categories.find();
    return res.json({ categories: categories });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Internal Server Error, try again" });
  }
}

export async function getPendingOrderById(req, res) {
  const { orderNumber } = req.params;
  try {
    const order = await Orders.findOne({
      _id: orderNumber,
      status: { $in: ["Pending", "In-Progress"] },
    }).populate("userId");
    if (order === null) {
      return res.status(404).json({ message: "Order not found" });
    }

    const orderItems = await OrderItem.find({ orderId: order._id }).populate(
      "productId"
    );

    const customer = {
      firstName: order.userId.firstName,
      lastName: order.userId.lastName,
      email: order.userId.email,
      role: order.userId.role,
      phoneNumber: order.userId.phoneNumber,
    };

    let subTotal = 0;
    const items = orderItems.map(
      ({ productId, price, quantity, dimensions }) => {
        subTotal += quantity * price;
        return {
          name: productId.name,
          standardPrice: productId.price,
          price,
          quantity,
          productCode: productId.productCode,
          dimensions,
        };
      }
    );

    const { _id, discount, tax, deliveryDate, status } = order;
    const total = (subTotal - (discount * subTotal) / 100) * (1 + tax / 100);

    const editedOrder = {
      _id,
      subTotal: subTotal,
      total: total,
      discount,
      tax,
      deliveryDate,
      status,
    };

    return res.status(200).json({ customer, items, order: editedOrder });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Internal Server Error, try again" });
  }
}

export async function getOrderById(req, res) {
  const { orderNumber } = req.params;
  try {
    const order = await Orders.findOne({
      _id: orderNumber,
      status: { $in: ["Accepted", "Delivered", "Cancelled"] },
    }).populate("userId");

    if (order === null) {
      return res.status(404).json({ message: "Order not found" });
    }

    const orderItems = await OrderItem.find({ orderId: order._id }).populate(
      "productId"
    );

    const customer = {
      firstName: order.userId.firstName,
      lastName: order.userId.lastName,
      email: order.userId.email,
      role: order.userId.role,
      phoneNumber: order.userId.phoneNumber,
    };

    let subTotal = 0;
    const items = orderItems.map(
      ({ productId, price, quantity, dimensions }) => {
        subTotal += quantity * price;
        return {
          name: productId.name,
          price,
          quantity,
          productCode: productId.productCode,
          dimensions,
        };
      }
    );

    const { _id, discount, tax, deliveryDate, status } = order;
    const total = (subTotal - (discount * subTotal) / 100) * (1 + tax / 100);

    const editedOrder = {
      _id,
      subTotal: subTotal,
      total: total,
      discount,
      tax,
      deliveryDate,
      status,
    };

    return res
      .status(200)
      .json({ customer: customer, items: items, order: editedOrder });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Internal Server Error, try again" });
  }
}

// creating new categories, orders, products and users
export async function createCategory(req, res) {
  try {
    const { name } = req.body;
    console.log(req.body);
    const category = await Categories.findOne({ name: name });

    if (category !== null) {
      return res.status(409).json({ message: "category name already taken" });
    }

    await Categories.create({
      name: name,
      description: "new category created by admin",
    });

    return res.status(200).json({ message: "category created succesfully" });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Internal Server Error, try again " });
  }
}

export async function createUser(req, res) {
  const { firstName, lastName, email, phoneNumber, discount } = req.body;

  try {
    const password = generateRandomPassword(10);
    const userExists = await User.findOne({ email: email });
    if (userExists !== null) {
      return res.status(409).json({ message: "Email address already taken" });
    }

    const user = await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      role: "User",
      phoneNumber: phoneNumber,
      discount: discount,
      tax: 40,
      password: password,
    });

    await sendPassword(email, user.firstName, user.lastName, password);
    return res.status(200).json({
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        phoneNumber: user.phoneNumber,
        discount: user.discount,
        tax: user.tax,
      },
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Internal error, please try again" });
  }
}

export async function createEmployee(req, res) {
  const { firstName, lastName, email, phoneNumber} = req.body;

  try {
    const password = generateRandomPassword(10);
    const userExists = await User.findOne({ email: email });
    if (userExists !== null) {
      return res.status(409).json({ message: "Email address already taken" });
    }

    const user = await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      role: "Editor",
      phoneNumber: phoneNumber,
      discount: 0,
      tax: 40,
      password: password,
    });

    await sendPassword(email, user.firstName, user.lastName, password);
    return res.status(200).json({
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        phoneNumber: user.phoneNumber,
        discount: user.discount,
        tax: user.tax,
      },
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Internal error, please try again" });
  }
}

export async function approveOrderById(req, res) {
  const { _id } = req.params;
  const { orderItems } = req.body;

  try {
    let order = await Orders.findOne({ _id: _id });
    if (order === null) {
      return res.status(404).json({ message: "order not found" });
    }

    const user = await User.findOne({ _id: order.userId });

    let SUBTOTAL = 0;

    for (const item of orderItems) {
      const product = await Products.findOne({ productCode: item.productCode });
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      let orderItem = await OrderItem.findOne({
        orderId: order._id,
        productId: product._id,
      });
      if (!orderItem) {
        return res.status(404).json({ message: "Order item not found" });
      }

      orderItem.quantity = item.quantity;
      orderItem.price = item.price;
      SUBTOTAL += item.quantity * item.price;
      await orderItem.save();
    }

    const TOTAL =
      (SUBTOTAL - (SUBTOTAL * order.discount) / 100) * (1 + order.tax / 100);

    order.status = "Accepted";
    order.save();

    await sendApprovalMail(
      user.email,
      user.firstName,
      user.lastName,
      order,
      orderItems,
      SUBTOTAL,
      TOTAL
    );




    return res.status(200).json({ message: "order completed successfully" });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Internal error, please try again" });
  }
}

// updating new categories, orders, products and users
export async function updateOrder(req, res) {
  const { _id } = req.params;
  const { orderItems } = req.body;

  try {
    const order = await Orders.findOne({ _id });
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    const user = await User.findOne({ _id: order.userId });

    let subTotal = 0;

    for (const item of orderItems) {
      const product = await Products.findOne({ productCode: item.productCode });
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      let orderItem = await OrderItem.findOne({
        orderId: order._id,
        productId: product._id,
      });
      if (!orderItem) {
        return res.status(404).json({ message: "Order item not found" });
      }

      orderItem.quantity = item.quantity;
      orderItem.price = item.price;
      subTotal += item.quantity * item.price;
      await orderItem.save();
    }

    const TOTAL =
      (subTotal - (subTotal * order.discount) / 100) * (1 + order.tax / 100);

    await sendUpdationMail(
      user.email,
      user.firstName,
      user.lastName,
      order,
      orderItems,
      subTotal,
      TOTAL
    );

    return res.status(200).json({ total: TOTAL });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Internal server error, try again" });
  }
}

export async function updateCategory(req, res) {
  try {
    const { newName, oldName } = req.body;
    if (
      oldName === undefined ||
      oldName === null ||
      newName === undefined ||
      newName === null ||
      newName === oldName
    ) {
      return res
        .status(401)
        .json({ message: "missing paramters or oldName and newName are same" });
    }

    const category = await Categories.findOne({ name: oldName });
    const newCategory = await Categories.findOne({ name: newName });

    if (category === null) {
      return res.status(404).json({ message: "category not found" });
    }

    if (newCategory !== null) {
      return res.status(403).json({ message: "category already exists" });
    }

    await Categories.findOneAndUpdate({ _id: category._id }, { name: newName });

    return res.status(200).json({ message: "category updated successfully" });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Internal Server Error, try again " });
  }
}

export async function updateUser(req, res) {
  const { email, discount } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (user === null) {
      return res.status(404).json({ message: "User doesnt exist" });
    }

    user.discount = discount;
    await user.save();
    return res.status(200).json({ user: user });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Internal error, please try again" });
  }
}

export async function updateEmployee(req, res) {
  const { email} = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (user === null) {
      return res.status(404).json({ message: "User doesnt exist" });
    }

    user.discount = 0;

    await user.save();
    return res.status(200).json({ user: user });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Internal error, please try again" });
  }
}

export async function updateProduct(req, res) {
  const { productCode, name, description, dimensions, price } = req.body;
  try {
    const product = await Products.findOne({ productCode: productCode });
    if (product === null) {
      return res.status(404).json({ message: "Product doesnt exist" });
    }
    product.description = description;
    product.name = name;
    product.dimensions = dimensions;
    product.price = price;
    await product.save();
    return res.status(200).json({ product: product });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Internal error, please try again" });
  }
}

// deleting a product, orders and users
export async function deleteCategory(req, res) {
  try {
    const { categoryName } = req.params;

    const category = await Categories.findOne({ name: categoryName });
    if (category === null) {
      return res.status(404).json({ message: "Category not found" });
    }

    // Delete the category
    await Categories.findOneAndDelete({ name: categoryName });

    return res.status(200).json({ message: "Category deleted successfully" });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Internal Server Error, please try again" });
  }
}

export async function deleteUser(req, res) {
  try {
    const { email } = req.params;

    const user = await User.findOne({ email: email });
    if (user === null) {
      return res.status(404).json({ message: "User not found" });
    }

    // Delete the user
    await User.findOneAndDelete({ email: user.email });

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Internal Server Error, please try again" });
  }
}

export async function deleteProduct(req, res) {
  try {
    const { productCode } = req.params;

    const product = await Products.findOne({ productCode: productCode });
    if (product === null) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Delete the product
    await Products.findOneAndDelete({ productCode: productCode });

    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Internal Server Error, please try again" });
  }
}
