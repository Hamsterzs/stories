const mongoose = require("mongoose")
const configureDB = require("./dbConfig")
const Story = require("./models/Story")


exports.connectDB = () => {
    return configureDB(mongoose)
}

exports.getAllStories = async () => {
    try {
        const stories = await Story.find()

        stories.reverse()

        return new Promise((resovle) => {
            resovle(stories)
        })

    } catch (error) {
        console.log(error);
        throw "Could not retrieve stories"
    }
}