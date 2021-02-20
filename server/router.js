const router = require("express").Router()
const { stories, users } = require("../App/appConfig")
const { adaptRequest } = require("../App/helpers")

//              User Routes

const passport = require("passport")

const authenticate = (req, res) => {
    passport.authenticate("local", (err, user, info) => {
        if (user) {
            req.logIn(user, err => {
                if (err) console.log(err);
            })
        }
        res.status(info.status).json({ user: user, message: info.message })
    })(req, res)
}

router.post("/sign-up", async (req, res) => {
    const httpRequest = adaptRequest(req)
    const { status, response } = await users.createUser(httpRequest)
    res.status(status).json(response)
})

router.post("/sign-in", authenticate)

router.post("/sign-out", (req, res) => {
    const httpRequest = adaptRequest(req)
    const { status, response } = users.logOut(httpRequest)
    res.status(status).json(response)
})

router.get('/get-user', (req, res) => {
    try {
        const httpRequest = adaptRequest(req)
        const { status, response } = users.getUser(httpRequest)
        res.status(status).json(response)
    } catch (error) {
        res.status(500).json({ success: false, message: "server error" })
    }
})

//              Stories Routes

router.get("/stories", async (req, res) => {
    const { status, response } = await stories.getAllStories()
    res.status(status).json(response)
})

router.get("/stories/:user", async (req, res) => {
    const httpRequest = adaptRequest(req)
    const { status, response } = await stories.getUserStories(httpRequest)
    res.status(status).json(response)
})

router.post("/stories", async (req, res) => {
    const httpRequest = adaptRequest(req)
    const { status, response } = await stories.postStory(httpRequest)
    res.status(status).json(response)

})

router.delete("/stories/:id", async (req, res) => {
    const httpRequest = adaptRequest(req)
    const { status, response } = await stories.deleteStory(httpRequest)
    res.status(status).json(response)
})

module.exports = router
