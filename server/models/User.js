const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    auctions: {
        type: [{ type: Schema.Types.ObjectId, ref: "Auction"}],
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema);
module.exports = User