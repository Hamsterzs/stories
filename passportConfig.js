module.exports = (passport) => {
    // Passport Local strategy
    const LocalStrategy = require('passport-local').Strategy
    const bcrypt = require("bcrypt")
    const User = require("./model/User.js")

    passport.use(new LocalStrategy({ usernameField: "username" },
        (username, password, done) => {
            User.findOne({ username: username }, async (err, user) => {
                if (err) { return done(err) }
                if (!user) {
                    return done(null, false, { message: 'Incorrect username.' })
                }
                const valid = await bcrypt.compare(password, user.password)
                if (!valid) {
                    return done(null, false, { message: 'Incorrect password.' })
                }
                return done(null, user)
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