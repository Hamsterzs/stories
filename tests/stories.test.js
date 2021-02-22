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

// describe("delete story", () => {

//     it("requires a proper id", async () => {
//         const req = { body: { story: "this is a test story" } }
//         const { response } = await stories.deleteStory(req)

//         expect(response.message).toBe("fill in all fields dummy")
//     })

//     it("requires the user to have created the story", async () => {
//         const req = { body: { title: "this is a test story" } }
//         const { response } = await stories.postStory(req)
//         expect(response.message).toBe("fill in all fields dummy")
//     })

//     it("deletes the story", async () => {
//         const req = { body: { title: "this is a test story", story: "sad" } }
//         const { response } = await stories.postStory(req)
//         expect(response.message).toBe("sign in first dummy")
//     })
// })