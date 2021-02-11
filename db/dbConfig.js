let MongoStore = require("connect-mongo")
const mongoose = require("mongoose")

const connectToDB = () => {
    mongoose.set("useNewUrlParser", true);
    mongoose.set("useFindAndModify", false);
    mongoose.set("useCreateIndex", true);
    mongoose.set("useUnifiedTopology", true);

    try {
        mongoose.connect("mongodb://127.0.0.1:27017/stories")
        console.log("connected to the Database")
        return mongoose.connection
    } catch (err) {
        console.log(err)
        throw "database could not connect properly"
    }
}

let dbConnection = null

exports.getDBConnection = () => {
    try {
        if (!dbConnection) dbConnection = connectToDB()
        return dbConnection
    } catch (error) {
        console.log(error);
        throw "couldn establish a connection to the database"
    }
}

exports.createSessionStorage = (session) => {
    MongoStore = MongoStore(session)
    return new MongoStore({ mongooseConnection: this.getDBConnection() })
}


