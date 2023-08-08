require('dotenv').config();
const jwt = require('jsonwebtoken');

function authenticateFromQuery(req, res, next) {
  const token = req.query.token;
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

module.exports = authenticateFromQuery;