const passport = require("passport")
const passportConfig = require("./passportConfig")
const { makeDB } = require("../db/dbConfig")
const { makeDbActions } = require("../db/db")
const makeStories = require("./stories")
const makeUsers = require('./users')
const Story = require("../db/models/Story")
const User = require("../db/models/User")

module.exports = (enviroment) => {
    const dbName = enviroment
    const db = makeDB(dbName)

    dbActions = makeDbActions(Story, User)

    stories = makeStories(dbActions)

    users = makeUsers(dbActions)

    passportConfig(passport, dbActions)

    return {
        appActions: { stories, users },
        dbConnection: db,
        authObject: passport
    }
}