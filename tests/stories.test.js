const { makeDB } = require("../db/dbConfig")
const makeStories = require("../App/stories")
const { makeDbActions } = require("../db/db")
const database = makeDB("test")
const dbActions = makeDbActions(database)
const stories = makeStories(dbActions)

describe("create story", () => {
    beforeAll(async () => {
        const { db } = await database
        if (db.databaseName !== "test") throw "connect to testing database"
    })

    afterAll(async () => {
        const { db } = await database
        db.collection("stories").drop()
    })

    it("requires a title", async () => {
        const req = { body: { story: "this is a test story" } }
        const { response } = await stories.postStory(req)
        expect(response.message).toBe("fill in all fields dummy")
    })

    it("requires a story", async () => {
        const req = { body: { title: "this is a test story" } }
        const { response } = await stories.postStory(req)
        expect(response.message).toBe("fill in all fields dummy")
    })

    it("requires a user", async () => {
        const req = { body: { title: "this is a test story", story: "sad" } }
        const { response } = await stories.postStory(req)
        expect(response.message).toBe("sign in first dummy")
    })

    it("creates a story", async () => {
        const req = { body: { title: "this is a test story", story: "sad" }, user: { username: "abe" } }
        const { response } = await stories.postStory(req)
        expect(response.success).toBe(true)
    })

})

describe("delete story", () => {
    beforeAll(async () => {
        const { db } = await database
        if (db.databaseName !== "test") throw "connect to testing database"
    })

    afterAll(async () => {
        const { db } = await database
        db.collection("stories").drop()
    })

    it("requires a user to be signed in", async () => {
        const req = {}
        const { response } = await stories.deleteStory(req)

        expect(response.message).toBe("sign in first dummy")
    })

    it("requires a proper id", async () => {
        const req = { params: { id: "6034058c0ceabd3be8e4dda8" }, user: { username: "fake id" } }
        const { response } = await stories.deleteStory(req)

        expect(response.message).toBe("Story not found")
    })

    it("requires authorization", async () => {
        const postReq = {
            body: {
                title: "this is a test story",
                story: "sad",
            },
            user: { username: "a" }
        }

        let postResponse = await stories.postStory(postReq)
        postResponse = postResponse.response


        const deleteReq = {
            params: { id: postResponse.data._id },
            user: { username: "b" }
        }

        const { response } = await stories.deleteStory(deleteReq)

        expect(response.message).toBe("Not Authorized")

    })

    it("deletes a story", async () => {
        const postReq = {
            body: {
                title: "this is a test story",
                story: "sad",
            },
            user: { username: "a" }
        }

        let postResponse = await stories.postStory(postReq)
        postResponse = postResponse.response


        const deleteReq = {
            params: { id: postResponse.data._id },
            user: { username: "a" }
        }

        const { response } = await stories.deleteStory(deleteReq)

        expect(response.message).toBe("Story Deleted")

    })
})

describe("gets stories", () => {
    beforeAll(async () => {
        const { db } = await database
        if (db.databaseName !== "test") throw "connect to testing database"
    })

    afterAll(async () => {
        const { db } = await database
        db.collection("stories").drop()
    })

    it("gets all stories", async () => {
        const postReq = { body: { title: "this is a test story for all", story: "sad" }, user: { username: "a" } }
        const postReqTwo = { body: { title: "this is a test story for all", story: "sad" }, user: { username: "b" } }

        await stories.postStory(postReq)
        await stories.postStory(postReqTwo)

        const { response } = await stories.getAllStories()

        expect(response.data.length).toBe(2)
    })

    it("gets user stories", async () => {
        const postReq = { body: { title: "this is a test story", story: "sad" }, user: { username: "a" } }
        const postReqTwo = { body: { title: "this is a test story", story: "sad" }, user: { username: "b" } }

        await stories.postStory(postReq)
        await stories.postStory(postReqTwo)

        const req = { params: { user: "b" } }
        const { response } = await stories.getUserStories(req)

        let pass = true

        response.data.forEach(story => {
            if (story.user !== "b") pass = false
        })

        expect(pass).toBe(true)
    })


})