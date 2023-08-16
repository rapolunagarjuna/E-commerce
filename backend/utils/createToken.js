import jwt from 'jsonwebtoken';

export default function createToken(user) {
  const payload = {
    _id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    role: user.role,
    discount: user.discount,
    tax: user.tax,
  };

  return jwt.sign(payload, process.env.JWT_SECRET); 
}
