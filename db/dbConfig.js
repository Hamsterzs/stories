const configureDB = (mongoose) => {
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

module.exports = configureDB

