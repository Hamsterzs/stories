const dbConfig = require("../db/dbConfig")
const passport = require("passport")
const passportConfig = require("./passportConfig")
const { connectToDB } = require("../db/dbConfig")
const { makeDbActions } = require("../db/db")

db = connectToDB()
exports.dbActions = makeDbActions()

passportConfig(passport)

exports.getAuthenticationObject = () => {
    return passport
}

exports.createSessionStoreObject = (session) => {
    return dbConfig.createSessionStorage(session, db)
}

