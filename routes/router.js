const router = require("express").Router()
const UserController = require("../controller/userController")
const passport = require("passport")

const authenticate = (req, res) => {
    passport.authenticate("local", (err, user, info) => {
        if (user) res.status(info.status).json({ user, message: info.message })
        else res.status(info.status).json({ message: info.message })
    })(req, res)
}

router.post("/sign-up",
    UserController.createUser,
    authenticate
)

router.post("/sign-in", authenticate)

router.post("/sign-out", UserController.signOut)

router.get('/get-user', UserController.getUser)

module.exports = router
