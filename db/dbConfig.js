let MongoStore = require("connect-mongo")
const mongoose = require("mongoose")

exports.connectToDB = (dbName = "stories") => {
    mongoose.set("useNewUrlParser", true);
    mongoose.set("useFindAndModify", false);
    mongoose.set("useCreateIndex", true);
    mongoose.set("useUnifiedTopology", true);

    try {
        mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`)

        mongoose.connection.on('error', err => {
            console.log("could not connect to database");
            console.log(err);
        })

        mongoose.connection.once('open', () => {
            console.log("connected to the database");
        });

        return mongoose.connection
    } catch (error) {
        console.log(error)
        console.log("database could not connect properly")
    }
}

exports.createSessionStorage = (session, db) => {
    MongoStore = MongoStore(session)
    return new MongoStore({ mongooseConnection: db })
}


