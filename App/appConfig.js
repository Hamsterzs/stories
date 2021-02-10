const db = require("../db/db")

exports.getDBConnection = () => {
    return db.getDBConnection()
}

exports.createSessionStoreObject = (session) => {
    return db.createSessionStorage(session)
}