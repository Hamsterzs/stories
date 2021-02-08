const router = require("express").Router()
const userController = require("../controller/userController")
const storiesController = require("../controller/storiesController")
const stories = require("../App/stories")

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
    const [status, response] = await stories.getAllStories()
    res.status(status).json(response)
})

router.get("/stories/:user", storiesController.getStoriesByUser)

router.post("/stories", storiesController.postStory)

router.delete("/stories/:id", storiesController.deleteStory)


module.exports = router
