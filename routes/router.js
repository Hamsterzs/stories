const router = require("express").Router()
const UserController = require("../controller/userController")
const passport = require("passport")

router.post("/sign-up",
    UserController.createUser
)

router.post("/sign-in", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (user) res.status(info.status).json(user)
        else res.status(info.status).json(info.message)
    })(req, res, next)
})

module.exports = router
