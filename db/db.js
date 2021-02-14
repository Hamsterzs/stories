const Story = require("./models/Story")
const User = require("./models/User")

// Stories
exports.makeDbActions = () => {

    const findUserByUsername = async (username) => {
        try {
            return await User.findOne({ username: username })
        } catch (error) {
            console.log(error);
            throw "Error while retrieving from database"
        }
    }

    const createUser = async (username, password) => {
        try {
            return await User.create({ username, password })
        } catch (error) {
            console.log(error);
            throw "error while creating user"
        }
    }

    const getAllStories = async () => {
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

    const createStory = async (storyToCreate) => {
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

    const findStoryById = async (id) => {
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

    const deleteStory = async (story) => {
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

    const getUserStories = async (username) => {
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

    return Object.freeze({
        getAllStories,
        getUserStories,
        findStoryById,
        createStory,
        deleteStory,
        findUserByUsername,
        createUser,
    })

}