const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/images/');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 25 // limits file size to 25MB
    },
    fileFilter: function(req, file, cb) {
      if (
        file.mimetype === 'image/jpeg' || 
        file.mimetype === 'image/png' || 
        file.mimetype === 'image/webp' || 
        file.mimetype === 'image/jpg'
      ) {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error('Only .webp, .png, .jpg and .jpeg format allowed!'));
      }
    }
});

module.exports = upload;
