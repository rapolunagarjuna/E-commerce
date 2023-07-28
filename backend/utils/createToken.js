const jwt = require('jsonwebtoken');

function createToken(user) {
  const payload = {
    _id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    role: user.role
  };

  return jwt.sign(payload, process.env.JWT_SECRET); 
}

module.exports = createToken;
