const { createResponse } = require("./helpers")
const { dbActions } = require("../App/appConfig")
const bcrypt = require("bcrypt")

exports.getUser = (req) => {
    try {
        if (req.user) return createResponse(200, "User Sent", req.user)
        return createResponse(400, "Not Signed In")
    } catch (error) {
        console.log(error);
        return createResponse(500)
    }
}

exports.logOut = (req) => {
    try {
        req.session.destroy(() => {
            req.logOut()
        })
        return createResponse(200, "logged out")
    } catch (error) {
        console.log(error);
        return createResponse(500)
    }
}

exports.createUser = async (req) => {
    try {
        const { username, password } = req.body

        if (!username || !password) return createResponse(400, "Fill in all fields")

        const existingUser = await dbActions.findUserByUsername(username)

        if (existingUser) return createResponse(400, "Username is taken")

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await dbActions.createUser(username, hashedPassword)

        return createResponse(200, "User Created", user)

    } catch (error) {
        console.log(error);
        return createResponse(500)
    }
}

