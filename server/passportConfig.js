module.exports = (passport) => {
    // Passport Local strategy
    const LocalStrategy = require('passport-local').Strategy
    const bcrypt = require("bcrypt")
    const User = require("../db/models/User")

    passport.use(new LocalStrategy({ usernameField: "username" },
        (username, password, done) => {
            User.findOne({ username: username }, async (err, user) => {
                if (err) { return done(err, false, { message: "server error", status: 500 }) }
                if (!user) {
                    return done(null, false, { message: 'Incorrect username.', status: 400 })
                }
                const valid = await bcrypt.compare(password, user.password)
                if (!valid) {
                    return done(null, false, { message: 'Incorrect password.', status: 400 })
                }
                return done(null, user, { status: 200, message: 'Sign in succesfull' })
            })
        }
    ))

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });

}