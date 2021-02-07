const mongoose = require('mongoose')

const storySchema = new mongoose.Schema({
    title: {
        required: true,
        type: String,
        max: 50,
    },
    story: {
        required: true,
        type: String,
        maxlength: 2500,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    user: {
        required: true,
        type: String,
        max: 50,
    }
})

module.exports = mongoose.model("Story", storySchema)