const db = require("../db/db")

exports.getAllStories = async () => {
    try {
        const stories = await db.getAllStories()

        if (stories.length === 0) return [200, { success: true, stories, message: "there are no stories yet" }]

        return [200, { success: true, stories, message: "Stories Sent" }]
    } catch (error) {
        console.log(error);
        return [500, { success: false, message: error }]
    }
}