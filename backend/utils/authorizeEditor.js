export function authorizeEditor(req, res, next) {
    if (req.user.role !== 'Editor') {
      return res.status(403).json({ message: 'You are not authorized' });
    }
    
    next();
  }
  
