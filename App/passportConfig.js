module.exports = (passport, dbActions) => {
    // Passport Local strategy
    const LocalStrategy = require('passport-local').Strategy
    const bcrypt = require("bcrypt")


    passport.use(new LocalStrategy({ usernameField: "username" },
        async (username, password, done) => {
            const user = await dbActions.findUserByUsername(username)
            if (!user) {
                return done(null, false, { message: 'Incorrect username.', status: 400 })
            }
            const valid = await bcrypt.compare(password, user.password)
            if (!valid) {
                return done(null, false, { message: 'Incorrect password.', status: 400 })
            }
            return done(null, user, { status: 200, message: 'Sign in succesfull' })
        }
    ))

    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser(async (id, done) => {
        const user = await dbActions.findUserById(id)
        if (user) done(null, user)
        else done("Could not find user", false)
    });

}