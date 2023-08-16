export default function authorizeAdmin(req, res, next) {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'You are not authorized' });
    }
    
    next();
  }
