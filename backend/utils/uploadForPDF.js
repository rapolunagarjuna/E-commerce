import multer from 'multer';

export const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/pdf/');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});


// Set Multer to store files in memory
export const uploadPDF = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 25 // limits file size to 25MB
  },
  fileFilter: function (req, file, cb) {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only PDF format allowed!'));
    }
  }
});
