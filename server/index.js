const express = require("express")
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const session = require("express-session")
const { createSessionStoreObject } = require("../App/appConfig")
const sessionStorage = createSessionStoreObject(session)

app.use(session({
    secret: "session secret",
    store: sessionStorage,
    resave: false,
    saveUninitialized: false,
}))

// Configure passport middleware
const { getAuthenticationObject } = require("../App/appConfig")
const authObject = getAuthenticationObject()

app.use(authObject.initialize());
app.use(authObject.session());

const logger = require("morgan")
app.use(logger("dev"))

const router = require("./router")
app.use("/api", router)

app.listen(5000, () => {
    console.log(`server listening on port 5000`)
})