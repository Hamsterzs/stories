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

exports.getUserStories = async (username) => {
    try {
        const stories = await Story.find({ user: username })

        stories.reverse()

        return new Promise((resovle) => {
            resovle(stories)
        })

    } catch (error) {
        console.log(error);
        throw "Could not retrieve stories"
    }
}

exports.createStory = async (storyToCreate) => {
    try {
        const story = await Story.create(storyToCreate)

        return new Promise((resovle) => {
            resovle(story)
        })

    } catch (error) {
        console.log(error);
        throw "could not create story"
    }
}

exports.findStoryById = async (id) => {
    try {
        const story = await Story.findById(id)

        return new Promise((resovle) => {
            resovle(story)
        })

    } catch (error) {
        console.log(error);
        throw "could not find story"
    }
}

exports.deleteStory = async (story) => {
    try {
        await story.delete()

        return new Promise((resovle) => {
            resovle(story)
        })

    } catch (error) {
        console.log(error);
        throw "could not delete story"
    }
}