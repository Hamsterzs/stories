const Story = require('../model/Story')

exports.getStories = async (req, res) => {
    try {
        const stories = await Story.find()
        stories.reverse()
        res.send(stories)

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "internal server error", error: error })
    }
}

exports.getStoriesByUser = async (req, res) => {
    try {
        if (!req.user) return res.status(400).json({ message: "sign in first dummy" })
        const stories = await Story.find({ user: req.params.user })
        stories.reverse()
        res.send(stories)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "internal server error", error: error })
    }
}

exports.postStory = async (req, res) => {
    try {
        if (!req.user) return res.status(400).json({ message: "sign in first dummy" })

        const story = await Story.create({ title: req.body.title, story: req.body.story, user: req.user.username })
        res.status(200).json({ message: "story created", story })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "internal server error", error: error })
    }
}

exports.deleteStory = async (req, res) => {
    try {
        if (!req.user) return res.status(400).json({ message: "sign in first dummy" })

        const story = await Story.findById(req.params.id)

        if (story.user !== req.user.username) return res.status(400).json({ message: "Not yours dummy" })

        await story.delete()

        res.status(200).json({ message: "story deleted", })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "internal server error", error: error })
    }
}