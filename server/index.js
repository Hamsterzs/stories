const express = require("express")
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const dbConnection = require("../App/appConfig").connectToDB()

const session = require("express-session")
const MongoStore = require("connect-mongo")(session)

app.use(session({
    secret: "session secret",
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false,
    saveUninitialized: false,
}))

// Configure passport middleware
const passportConfig = require("./passportConfig")
const passport = require("passport");

passportConfig(passport)

app.use(passport.initialize());
app.use(passport.session());

const logger = require("morgan")
app.use(logger("dev"))

const router = require("./router")
app.use("/api", router)

app.listen(5000, () => {
    console.log(`server listening on port 5000`)
})