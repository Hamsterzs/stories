const { fakeStory, fakeUser } = require("./fakes")

module.exports = makeFakeDB = () => {

    // Story Actions

    const createStory = async (storyToCreate) => fakeStory

    const deleteStory = async (id) => fakeStory

    const findStoryById = async (id) => {
        if (id === "6034058c0ceabd3be8e4dda8") return null
        return fakeStory
    }

    // User Actions

    const createUser = async (username, password) => fakeUser

    const findUserById = async (id) => fakeUser

    const findUserByUsername = async (username) => {
        if (username === "abel") return null
        return fakeUser
    }

    return Object.freeze({
        createStory,
        deleteStory,
        findStoryById,
        createUser,
        findUserByUsername,
        findUserById
    })

}