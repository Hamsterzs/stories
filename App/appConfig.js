const dbConfig = require("../db/dbConfig")
const passport = require("passport")
const passportConfig = require("./passportConfig")

passportConfig(passport)

exports.getAuthenticationObject = () => {
    return passport
}


exports.getDBConnection = () => {
    return dbConfig.getDBConnection()
}

exports.createSessionStoreObject = (session) => {
    return dbConfig.createSessionStorage(session)
}

