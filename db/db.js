exports.makeDbActions = (database) => {
    const findUserByUsername = async (username) => {
        try {
            const dbObject = await database
            const db = dbObject.db
            const user = await db
                .collection("users")
                .findOne({ username: username })

            return user
        } catch (error) {
            console.log(error);
            throw "Couldn't find user"
        }
    }

    const createUser = async (username, password) => {
        try {
            const dbObject = await database
            const db = dbObject.db

            const user = await db.collection("users").insertOne({ username, password })
            return user
        } catch (error) {
            console.log(error);
            throw "error while creating user"
        }
    }

    const getAllStories = async () => {
        try {
            const dbObject = await database
            const db = dbObject.db

            const stories = await db
                .collection("stories")
                .find()
                .limit(5)
                .sort({ date: -1 })
                .toArray()

            return stories

        } catch (error) {
            console.log(error);
            throw "Could not retrieve stories"
        }
    }

    const createStory = async (storyToCreate) => {
        try {
            const dbObject = await database
            const db = dbObject.db

            const story = await db
                .collection("stories")
                .insertOne(storyToCreate)

            return story

        } catch (error) {
            console.log(error);
            throw "could not create story"
        }
    }

    const findStoryById = async (id) => {
        try {
            const dbObject = await database
            const db = dbObject.db

            const story = await db
                .collection("stories")
                .findOne(id)

            if (!story) throw "could not find story"

            return story

        } catch (error) {
            console.log(error);
            throw error
        }
    }

    const deleteStory = async (id) => {
        try {
            const dbObject = await database
            const db = dbObject.db

            const story = await db
                .collection("stories")
                .findOneAndDelete(id)

            if (!story) throw "could not delete story"

            return story

        } catch (error) {
            console.log(error);
            throw error
        }
    }

    const getUserStories = async (username) => {
        try {
            const dbObject = await database
            const db = dbObject.db

            const stories = await db
                .collection("stories")
                .find({ user: username })
                .limit(5)
                .sort({ date: -1 })
                .toArray()

            return stories

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