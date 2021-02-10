const mongoose = require("mongoose")
const Story = require("./models/Story")
const User = require("./models/User")
let MongoStore = require("connect-mongo")

let dbConnection = null

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

exports.getDBConnection = () => {
    try {
        if (!dbConnection) dbConnection = connectToDB()
        return dbConnection
    } catch (error) {
        console.log(error);
        throw "couldn establish a connection to the database"
    }
}

// Stories

exports.getAllStories = async () => {
    try {
        const stories = await Story.find()

        stories.reverse()

        return new Promise((resovle) => {
            resovle(stories)
        })

    } catch (error) {
        console.log(error);
        throw "Could not retrieve stories"
    }
}

exports.getUserStories = async (username) => {
    try {
        const stories = await Story.find({ user: username })

        stories.reverse()

        return new Promise((resovle) => {
            resovle(stories)
        })

    } catch (error) {
        console.log(error);
        throw "Could not retrieve stories"
    }
}

exports.createStory = async (storyToCreate) => {
    try {
        const story = await Story.create(storyToCreate)

        return new Promise((resovle) => {
            resovle(story)
        })

    } catch (error) {
        console.log(error);
        throw "could not create story"
    }
}

exports.findStoryById = async (id) => {
    try {
        const story = await Story.findById(id)

        return new Promise((resovle) => {
            resovle(story)
        })

    } catch (error) {
        console.log(error);
        throw "could not find story"
    }
}

exports.deleteStory = async (story) => {
    try {
        await story.delete()

        return new Promise((resovle) => {
            resovle(story)
        })

    } catch (error) {
        console.log(error);
        throw "could not delete story"
    }
}

// Users

exports.findUserByUsername = async (username) => {
    try {
        return await User.findOne({ user: username })
    } catch (error) {
        console.log(error);
        throw "Error while retrieving from database"
    }
}

exports.createUser = async (username, password) => {
    try {
        return await User.create({ username, password })
    } catch (error) {
        console.log(error);
        throw "error while creating user"
    }
}


exports.createSessionStorage = (session) => {
    MongoStore = MongoStore(session)
    return new MongoStore({ mongooseConnection: this.getDBConnection() })
}