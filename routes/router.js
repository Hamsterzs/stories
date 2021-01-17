const router = require("express").Router()
const UserController = require("../controller/userController")
const passport = require("passport")


router.post("/sign-up",
    UserController.createUser
)

router.post("/sign-in",
    passport.authenticate("local"),
    (req, res) => {
        if (req.user) res.send("signed in")
        else res.send("no goo")
    }

)

module.exports = router
