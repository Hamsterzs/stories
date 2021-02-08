const db = require("../db/db")

exports.connectToDB = () => {
    return db.connectDB()
}