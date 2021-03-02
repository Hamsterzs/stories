const { makeDB } = require("../db/dbConfig")
const { makeDbActions } = require("../db/db")
const Story = require("../db/models/Story")
const User = require("../db/models/User")

const database = makeDB("test")
const dbActions = makeDbActions(Story, User)

describe("db actions", () => {

    afterAll(async () => {
        const db = await database
        await db.close()
    })

    describe("db story actions", () => {

        afterEach(async () => {
            await Story.deleteMany({})
        })

        it("should create a story", async () => {

            const story = await dbActions.createStory({
                user: "test user",
                title: "test title",
                story: "test story"
            })

            const storyBits = { user: story.user, title: story.title, story: story.story }

            expect(storyBits).toStrictEqual({
                user: "test user",
                title: "test title",
                story: "test story"
            })
        })

        it("deletes a story", async () => {

            const story = await dbActions.createStory({
                user: "test user",
                title: "test title",
                story: "test story"
            })

            const deletedStory = await dbActions.deleteStory(story._id)

            expect(deletedStory._id.toString()).toBe(story._id.toString())

        })

        it("gets all stories", async () => {
            await dbActions.createStory({
                user: "test user",
                title: "test title",
                story: "test story"
            })

            await dbActions.createStory({
                user: "test user 2",
                title: "test title",
                story: "test story"
            })

            const stories = await dbActions.getAllStories()

            expect(stories.length).toBe(2)
        })

        it("gets user stories", async () => {
            await dbActions.createStory({
                user: "test user",
                title: "test title",
                story: "test story"
            })

            await dbActions.createStory({
                user: "test user 2",
                title: "test title",
                story: "test story"
            })

            const stories = await dbActions.getUserStories("test user")

            let passed = true

            stories.forEach(story => {
                if (story.user !== "test user") passed = false
            });

            expect(passed).toBe(true)
        })

        it("finds a story by id", async () => {

            const story = await dbActions.createStory({
                user: "test user",
                title: "test title",
                story: "test story"
            })

            const foundStory = await dbActions.findStoryById(story._id)

            expect(foundStory._id.toString).toBe(story._id.toString)

        })

    })

    describe("db user actions", () => {

        afterEach(async () => {
            await User.deleteMany({})
        })

        it("creates a user", async () => {
            const createdUser = await dbActions.createUser("abel", "a")
            expect(createdUser.username).toBe("abel")
        })

        it("finds a user by username", async () => {
            const createdUser = await dbActions.createUser("abel", "a")
            const foundUser = await dbActions.findUserByUsername("abel")
            expect(foundUser._id).toStrictEqual(createdUser._id)
        })

        it("finds a user by id", async () => {
            const createdUser = await dbActions.createUser("abel", "a")
            const foundUser = await dbActions.findUserById(createdUser._id)
            expect(foundUser._id).toStrictEqual(createdUser._id)
        })
    })

})