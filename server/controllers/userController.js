const Image = require('../models/Image');
const Auction = require('../models/Auction');
const User = require('../models/User');

module.exports = {

   async uploadImg(req, res) {
    console.log("THIS IS FILE");
    console.log(req.file);
    if(!req.file) {
        next(new Error('No File uploaded!'))
        return;
    }
    try {
        const { public_id, secure_url } = req.file
        await Image.create({
            owner: req.user.email,
            publicId: public_id,
            imageUrl: secure_url
        }).then(theImage => {
            res.json(theImage);
        }
        ).catch(err => {
            console.log(err)
        })
    }catch(err) {
        console.log(err)
    }
   },

   async makeNewAuct(req, res) {
       console.log(req.body);
            //   await  Auction.create({
            //         owner: req.user.id,
            //         title: "",
            //         description: "",
            //         category: 'Bonsai',
            //         startingPrice: 0,
            //         imageProduct: {
            //            imageId: theImage._id,
            //            url: theImage.imageUrl
            //         },
            //         productCondition: "Does not apply",
            //         reserve: {
            //             available: false,
            //             cost: 0,
            //         },
            //         buyNow: {
            //             available: false,
            //             cost: 0,
            //         },
            //         duration: 1,
            //         participants: [],
            //         bids: [],
            //     })

            },
     
        }
       // console.log(req.body);
       // res.json(req.body);
