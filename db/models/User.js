const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        max: 15
    },
    password: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("User", UserSchema)