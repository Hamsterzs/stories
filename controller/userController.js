const User = require("../model/User")
const bcrypt = require("bcrypt")

exports.createUser = async (req, res, next) => {
    try {
        const existingUser = await User.findOne({ username: req.body.username })
        if (existingUser) {
            res.status(400).json({ message: "Username Already Exists" })
            return
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = await User.create({ username: req.body.username, password: hashedPassword })
        next()
    } catch (error) {
        console.log(error);
    }
}

exports.signOut = (req, res) => {
    try {
        req.session.destroy(() => {
            req.logOut()
            res.status(200).json({ message: "logged out" })
        })
    } catch (error) {
        res.status(500).json({ message: "server error" })
    }
}

exports.getUser = (req, res) => {
    if (req.user) {
        res.status(200).json({ user: req.user, message: "User Sent" })
    } else {
        res.status(400).json({ message: "User not signed in" })
    }
}