const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const auctionSchema = new Schema({
    
    owner: {
        type: Schema.Types.ObjectId, ref: "User"
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        required: true
    },
    startingPrice: {
        type: Number,
    },
    imageProduct: {
        type: Schema.Types.ObjectId, ref: "Image"
    },
    participants: [{type: Schema.Types.ObjectId, ref: "User"}],

    bids: [{type: Schema.Types.ObjectId, ref: "Bid"}],

},
{
    timestamps: true
});

const Auction = mongoose.model("Auction", auctionSchema);

export default Auction;