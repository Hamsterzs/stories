const serverDependencies = require("../../App/appConfig")("test")
const createApp = require("../../server/app")
const app = createApp(serverDependencies)
const Story = require("../../db/models/Story")
const User = require("../../db/models/User")
const request = require('supertest');

afterEach(() => {
    serverDependencies.dbConnection.dropDatabase()
})

describe("GET /api/stories", () => {

    it("responds if there are no stories", async done => {
        request(app)
            .get("/api/stories")
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(Array.isArray(response.body.data)).toBe(true)
                expect(response.body.data.length).toBe(0)

                done();
            })
            .catch(err => done(err))
    })

    it("gets all stories", async done => {

        // creates stories by different users
        await Story.create({ title: "test story 1", story: "Lorem ipsum", user: "testUser1" });
        await Story.create({ title: "test story 2", story: "Lorem ipsum", user: "testUser2" });

        request(app)
            .get("/api/stories")
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(Array.isArray(response.body.data)).toBe(true)
                expect(response.body.data.length).toBe(2)
                expect(response.body.data[1].user).toBe("testUser1")
                expect(response.body.data[0].user).toBe("testUser2")

                done();
            })
            .catch(err => done(err))
    })

})