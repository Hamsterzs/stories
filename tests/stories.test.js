const makeStories = require("../App/stories")
const makeFakeDB = require("./helpers/makeFakeDB")

const dbActions = makeFakeDB()
const stories = makeStories(dbActions)

describe("stories", () => {

    describe("creates a story", () => {

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

    describe("deletes a story", () => {

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
            const deleteReq = {
                params: { id: "fake id" },
                user: { username: "fake user" }
            }

            const { response } = await stories.deleteStory(deleteReq)

            expect(response.message).toBe("Story Deleted")

        })
    })
})