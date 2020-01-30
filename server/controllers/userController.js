const Image = require('../models/Image');
const Auction = require('../models/Auction');
const User = require('../models/User');

module.exports = {

   async uploadImg(req, res) {
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
       
       const {title, description, productCondition, startingPrice, reserve, buyNow, duration, isBuyCheck, isReserve, publicId, imageUrl, imageId} = req.body

              await  Auction.create({
                    owner: req.user.id,
                    title: title,
                    description: description,
                    category: 'Bonsai',
                    productCondition: productCondition,
                    startingPrice: startingPrice,
                    imageProduct: {
                       imageId: imageId,
                       publicId: publicId,
                       url: imageUrl
                    },
                    productCondition: "Does not apply",
                    reserve: {
                        available: isReserve,
                        cost: reserve,
                    },
                    buyNow: {
                        available: isBuyCheck,
                        cost: buyNow,
                    },
                    duration: duration,
                    participants: [],
                    bids: [],
                }).then(newAuct => {
                    res.json(newAuct);
                }).catch(err => {
                    res.json(err);
                })

            },
     
        }
       // console.log(req.body);
       // res.json(req.body);
