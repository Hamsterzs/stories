const dbConfig = require("../db/dbConfig")

exports.getDBConnection = () => {
    return dbConfig.getDBConnection()
}

exports.createSessionStoreObject = (session) => {
    return dbConfig.createSessionStorage(session)
}