const passport = require("passport")
const passportConfig = require("./passportConfig")
const { makeDB } = require("../db/dbConfig")
const { makeDbActions } = require("../db/db")
const dbConfig = require("../db/dbConfig")
const makeStories = require("./stories")
const makeUsers = require('./users')
const Story = require("../db/models/Story")
const User = require("../db/models/User")


exports.db = makeDB()

exports.dbActions = makeDbActions(Story, User)

exports.stories = makeStories(this.dbActions)

exports.users = makeUsers(this.dbActions)

passportConfig(passport)

exports.getAuthenticationObject = () => {
    return passport
}

exports.createSessionStoreObject = (session) => {
    return dbConfig.createSessionStorage(session)
}