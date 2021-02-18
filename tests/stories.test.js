const { connectToDB } = require("../db/dbConfig")
const stories = require("../App/stories")

connectToDB("test")

describe("stories", () => {

    it("creates a story", async () => {
        const { response } = await stories.postStory({ body: { title: "title", story: "this is a story" }, user: { username: "me" } })
        expect(response.success).toBe(true)
    })

})