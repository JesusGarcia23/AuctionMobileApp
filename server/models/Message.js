const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId, ref: "User"
    },
    content: String

},
{
    timestamps: true
})

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;