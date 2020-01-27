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
        default: 0,
    },
    imageProduct: {
        imageId: {type: Schema.Types.ObjectId, ref: "Image"},
        url: String
    },
    productCondition: {
        type: String,
        enum: ['Does not apply','Used', 'New']
    },
    reserve: {
        available: { type: Boolean, default: false },
        cost: { type: Number, default: 0 },
    },
    buyNow: {
        available: { type: Boolean, default: false },
        cost: { type: Number, default: 0 },
    },
    duration: {
        type: Number,
    },
    participants: [{type: Schema.Types.ObjectId, ref: "User"}],

    bids: [{type: Schema.Types.ObjectId, ref: "Bid"}],

},
{
    timestamps: true
});

const Auction = mongoose.model("Auction", auctionSchema);

export default Auction;