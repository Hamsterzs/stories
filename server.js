const express = require("express")
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const mongoose = require('mongoose')

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

try {
    mongoose.connect("mongodb://127.0.0.1:27017/stories")
    console.log("connected to the Database")
} catch (err) {
    console.log(err)
}

const session = require("express-session")
const MongoStore = require("connect-mongo")(session)

app.use(session({
    secret: "session secret",
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
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

const router = require("./routes/router")
app.use("/api", router)

app.listen(5000, () => {
    console.log(`server listening on port 5000`)
})