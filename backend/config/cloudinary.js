
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const path = require('path');

cloudinary.config({
    cloud_name: "dyb5ru6ca",
    api_key: "896983873235368",
    api_secret: "-_Q2tYbco-6g0aRmLlblkc5pmNo",
});

// TEMP STORAGE FOR UPLOADS
const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

module.exports = { cloudinary, upload };