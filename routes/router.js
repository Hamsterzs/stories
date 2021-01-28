const router = require("express").Router()
const UserController = require("../controller/userController")
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
    UserController.createUser,
    authenticate,
    UserController.getUser
)

router.post("/sign-in", authenticate)

router.post("/sign-out", UserController.signOut)

router.get('/get-user', UserController.getUser)

module.exports = router
