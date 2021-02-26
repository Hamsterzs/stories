const mongoose = require("mongoose");

exports.makeDB = (dbName = "stories") => {

    try {

        mongoose.set("useNewUrlParser", true);
        mongoose.set("useFindAndModify", false);
        mongoose.set("useCreateIndex", true);
        mongoose.set("useUnifiedTopology", true);

        mongoose.connect(`mongodb://localhost:27017/${dbName}`);

        mongoose.connection.once("open", () => {
            console.log("connected to db");
        })

        return mongoose.connection

    } catch (err) {
        console.log(err);
    }
}



