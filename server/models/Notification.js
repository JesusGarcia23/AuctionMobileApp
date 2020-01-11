const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const notificationSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    link: {
        type: String,
    },
});

const NotificationSchema = mongoose.model("Notification", notificationSchema);

export default NotificationSchema;