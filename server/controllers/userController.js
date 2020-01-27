const Image = require('../models/Image');
const Auction = require('../models/Auction');
const User = require('../models/User');

module.exports = {
   async makeNewAuct(req, res) {
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
                console.log(theImage)
                Auction.create({
                    owner: "",
                    title: "",
                    description: "",
                    category: 'Bonsai',
                    startingPrice: 0,
                    imageProduct: {
                       imageId: theImage._id,
                       url: theImage.imageUrl
                    },
                    productCondition: "",
                    reserve: {
                        available: '',
                        cost: '',
                    },
                    buyNow: {
                        available: '',
                        cost
                    },
                    duration: 1,
                    participants: [],
                    bids: [],
                })

            })
        }catch {

        }
       // console.log(req.body);
       // res.json(req.body);
    },

}