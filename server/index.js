const createApp = require("./app")
const serverDependencies = require("../App/appConfig")()
const app = createApp(serverDependencies)

app.listen(5000, () => {
    console.log(`server listening on port 5000`)
})