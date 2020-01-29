const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
    cloud_name: process.env.cloudName,
    api_key: process.env.cloudKey,
    api_secret: process.env.cloudSecret
});

var storage = cloudinaryStorage({
    cloudinary,
    folder: 'AuctionApp',
    allowedFormats: ['jpg', 'png'],

    filename: function (req, file, cb) {

        const time = new Date();
        const imageName = `auction-app/${file.originalname}${req.user.firstName}${time}`

        //WITH NO FILENAME AS SECOND PARAMETER, IT GENERATES ONE RANDOMLY
        cb(null, imageName);
    }
});

const uploader = multer({ storage });
module.exports = uploader;
