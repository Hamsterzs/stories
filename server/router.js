const router = require("express").Router()
const userController = require("../controller/userController")
const stories = require("../App/stories")
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

router.post("/sign-up",
    userController.createUser,
    authenticate,
    userController.getUser
)

router.post("/sign-in", authenticate)

router.post("/sign-out", userController.signOut)

router.get('/get-user', userController.getUser)

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
