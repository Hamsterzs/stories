const router = require("express").Router()
const UserController = require("../controller/userController")
const passport = require("passport")


router.post("/sign-up",
    UserController.createUser,
    passport.authenticate("local"),
    UserController.getUser
)

router.post("/sign-in",
    passport.authenticate("local"),
    UserController.getUser
)

router.post("/sign-out", UserController.signOut)

router.get('/get-user', UserController.getUser)

module.exports = router
