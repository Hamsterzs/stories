const { makeDB } = require("../db/dbConfig")
const { makeDbActions } = require("../db/db")
const makeUsers = require("../App/users")

const database = makeDB("test")
const dbActions = makeDbActions(database)
const users = makeUsers(dbActions)

describe("create user", () => {

    beforeAll(async () => {
        const { db } = await database
        if (db.databaseName !== "test") throw "connect to testing database"
        db.collection("users").drop()
    })

    it("requires all fields to be filled in", async () => {
        const reqOne = { body: { username: "abel" } }
        const reqTwo = { body: { password: "abel123" } }

        const responseOne = await (await users.createUser(reqOne)).response.message
        const responseTwo = await (await users.createUser(reqTwo)).response.message

        const pass = responseOne && responseTwo === "Fill in all fields"
            ? true
            : false

        expect(pass).toBe(true)
    })

    it("creates a user", async () => {
        const req = { body: { username: "abel", password: "abel123" } }
        const { response } = await users.createUser(req)
        expect(response.success).toBe(true)
    })

    it("denies duplicate username", async () => {
        const req = { body: { username: "abel", password: "abel123" } }

        await users.createUser(req)
        const { response } = await users.createUser(req)

        expect(response.message).toBe("Username is taken")
    })

})