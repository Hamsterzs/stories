const passport = require("passport")
const passportConfig = require("./passportConfig")
const { makeDB } = require("../db/dbConfig")
const { makeDbActions } = require("../db/db")
const dbConfig = require("../db/dbConfig")


exports.db = makeDB()

exports.dbActions = makeDbActions(this.db)


passportConfig(passport)

exports.getAuthenticationObject = () => {
    return passport
}

exports.createSessionStoreObject = (session) => {
    return dbConfig.createSessionStorage(session)
}