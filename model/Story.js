const mongoose = require('mongoose')

const storySchema = new mongoose.Schema({
    user: {
        required: true,
        type: String
    },
    story: {
        required: true,
        type: String,
        maxlength: 2500
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Story", storySchema)