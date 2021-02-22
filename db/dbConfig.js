const mongodb = require('mongodb')

let MongoStore = require("connect-mongo")
let mongoClient = null

exports.makeDB = async (dbName = "stories") => {
    console.log("making database");
    const MongoClient = mongodb.MongoClient
    const url = 'mongodb://localhost:27017'
    const client = new MongoClient(url, { useNewUrlParser: true })
    await client.connect()
    const db = await client.db(dbName)
    return { db, client }
}

exports.createSessionStorage = (session) => {
    MongoStore = MongoStore(session)
    return new MongoStore({ clientPromise: mongoClient })
}


