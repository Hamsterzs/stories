const { createResponse } = require("./helpers")

const makeStories = (db) => {

    const getAllStories = async () => {
        try {
            const stories = await db.getAllStories()

            if (stories.length === 0) return createResponse(200, "There are no stories created yet", stories)

            return createResponse(200, "Stories sent successfully", stories)
        } catch (error) {
            console.log(error);
            return createResponse(500)
        }
    }

    const postStory = async (req) => {
        try {
            const { title, story } = req.body

            if (!title || !story) return createResponse(400, "fill in all fields dummy")

            if (!req.user) return createResponse(400, "sign in first dummy")

            const createdStory = await db.createStory({ title, story, user: req.user.username, date: Date.now() })

            return createResponse(200, "Story created", createdStory)

        } catch (error) {
            console.log(error);
            return createResponse(500)
        }
    }

    const getUserStories = async (req) => {
        try {
            if (!req.user) return createResponse(400, "sign in first dummy")

            const stories = await db.getUserStories(req.params.user)

            if (stories.length === 0) return createResponse(200, "There are no stories created yet", stories)

            return createResponse(200, "Stories sent successfully", stories)

        } catch (error) {
            console.log(error);
            return createResponse(500)
        }
    }

    const deleteStory = async (req) => {
        try {
            if (!req.user) return createResponse(400, "sign in first dummy")

            const story = await db.findStoryById(req.params.id)

            if (story.user !== req.user.username) return createResponse(400, "Not Authorized")

            await db.deleteStory(req.params.id)

            return createResponse(200, "Story deleted")

        } catch (error) {
            console.log(error);
            return createResponse(500)
        }
    }

    return Object.freeze({
        getAllStories,
        postStory,
        getUserStories,
        deleteStory
    })
}

module.exports = makeStories

