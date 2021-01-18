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