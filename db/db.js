exports.makeDbActions = (Story, User) => {

    // Story Actions

    const createStory = async (storyToCreate) => {
        try {
            const createdStory = await Story.create(storyToCreate)

            return createdStory

        } catch (error) {
            console.log(error);
            throw "could not create story"
        }
    }

    const deleteStory = async (id) => {
        try {
            const story = await Story.findByIdAndDelete(id)


            if (!story) throw "could not delete story"

            return story

        } catch (error) {
            console.log(error);
            throw error
        }
    }

    const getAllStories = async () => {
        try {
            const stories = await Story
                .find()
                .sort({ date: -1 })
                .limit(15)

            return stories

        } catch (error) {
            console.log(error);
            throw "Could not retrieve stories"
        }
    }

    const getUserStories = async (username) => {
        try {
            const stories = await Story
                .find({ user: username })
                .sort({ date: -1 })
                .limit(15)

            return stories

        } catch (error) {
            console.log(error);
            throw "Could not retrieve stories"
        }
    }

    const findStoryById = async (id) => {
        try {
            const story = await Story.findById(id)

            return story

        } catch (error) {
            console.log(error);
            throw `Could not find story with id ${id}`
        }
    }

    // User Actions

    const createUser = async (username, password) => {
        try {
            const user = await User.create({ username, password })

            return user

        } catch (error) {
            console.log(error);
            throw "error while creating user"
        }
    }

    const findUserById = async (id) => {
        try {
            const user = await User.findById(id)
            return user
        } catch (error) {
            console.log(error);
            throw "Couldn't find user"
        }
    }

    const findUserByUsername = async (username) => {
        try {
            const user = await User.findOne({ username })

            return user
        } catch (error) {
            console.log(error);
            throw "Couldn't find user"
        }
    }

    return Object.freeze({
        createStory,
        deleteStory,
        getAllStories,
        getUserStories,
        findStoryById,
        createUser,
        findUserByUsername,
        findUserById
    })

}