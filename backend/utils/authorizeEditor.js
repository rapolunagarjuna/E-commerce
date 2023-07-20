function authorizeEditor(req, res, next) {
    if (req.user.role !== 'editor') {
      return res.status(403).json({ message: 'You are not authorized' });
    }
    
    next();
  }
  
  module.exports = authorizeEditor;
  