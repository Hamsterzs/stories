const User = require("../model/User")
const bcrypt = require("bcrypt")
const passport = require("passport")


exports.createUser = async (req, res) => {
    try {
        const existingUser = await User.findOne({ username: req.body.username })
        if (existingUser) {
            res.status(400).json({ message: "Username Already Exists" })
            return
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = await User.create({ username: req.body.username, password: hashedPassword })
        res.send(`hello ${req.body.username}`)
    } catch (error) {
        console.log(error);
    }
}

exports.verifyUser = (req, res) => {
    try {
        if (req.user) {
            res.status(200).json({ message: "Signed in succesfull", user: req.user })
        } else {
            res.status(200).json({ message: "Signed in failed" })
        }
    } catch (error) {
        console.log(res.status(500).json({ message: error }));
    }
}