import jwt from 'jsonwebtoken';

export default function adminAuthQuery(req, res, next) {
  const token = req.query.token;
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== 'Admin') {
        return res.status(403).json({message: "Permission Denied"});
    }
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}
