module.exports = ({ appActions, dbConnection, authObject, }) => {
    const express = require("express")
    const app = express()
    const cors = require('cors')

    app.use(cors())
    app.use(express.json())

    const session = require("express-session")
    const MongoStore = require('connect-mongo')(session);

    app.use(session({
        secret: "session secret",
        store: new MongoStore({ mongooseConnection: dbConnection }),
        resave: false,
        saveUninitialized: false,
    }))

    // Configure passport middleware

    app.use(authObject.initialize());
    app.use(authObject.session());

    const logger = require("morgan")
    app.use(logger("dev"))

    const router = require("./router")(appActions, authObject)
    app.use("/api", router)

    return app
}