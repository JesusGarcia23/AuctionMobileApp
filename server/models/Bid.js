const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bidSchema = new Schema({
    user: { 
        type: Schema.Types.ObjectId, ref: "User"
    },
    quantity: {
        type: Number,
        min: 0
    }
},
{
    timestamps: true
})

const Bid = mongoose.model("Bid", bidSchema);

module.exports = Bid