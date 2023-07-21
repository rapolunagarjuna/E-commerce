const createToken = require('../utils/createToken');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  console.log(req.body);
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (!firstName ||!lastName ||!email ||!password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    
    const newUser = await User.create({ 
      firstName,
      lastName,
      email,
      password
    });
    
    // Create JWT token using util function
    const token = createToken({
      id: newUser._id, 
      firstName: newUser.firstName, 
      lastName: newUser.lastName, 
      email: newUser.email, 
      role: newUser.role 
    });

    res.cookie('token', token);

    return res.status(200).json({message: "User created successfully"});
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'internal error' });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find({ deletedAt: null }); 
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'internal error' });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = createToken(user);
    res.cookie('token', token);
    return res.status(200).json({message: "User logged in successfully"});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'internal error' });
  }
};

const updateUser = async (req, res) => {
  try {
    const { email } = req.params;
    const { firstName, lastName, password } = req.body;

    if (req.user.email !== email) {
      return res.status(403).json({ message: "You can only update your own account" });
    }

    const updatedUser = await User.findOneAndUpdate(
      { email },
      { firstName, lastName, password },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const token = createToken(updatedUser);
    res.cookie('token', token);
    return res.status(200).json({message: "User updated successfully"});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'internal error' });
  }
};


const deleteUser = async (req, res) => {
  try {
    const { email } = req.params; // Extract email from params
    const userToDelete = await User.findOne({ email : email}); // Find user by email
    if (userToDelete) {
      try {
        await userToDelete.softdelete();
        return res.status(200).json({ message: "User deleted" });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'internal error' });
  }
};

module.exports = {
  updateUser,
  createUser,
  loginUser,
  getUsers,
  deleteUser
};
