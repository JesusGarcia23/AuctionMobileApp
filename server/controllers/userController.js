const Image = require('../models/Image');

module.exports = {
    makeNewAuct(req, res) {
        console.log(req.user);
        console.log(req.body);
        res.json(req.body);
    },

    async uploadImage(req, res) {
        if(!req.file){
            next(new Error('No file uploaded!'));
            return;
        }
        try {
            console.log(req.file)
            // const { public_id, secure_url } = req.file
        }catch(err) {
            res.json({message: err})
        }
    }
}