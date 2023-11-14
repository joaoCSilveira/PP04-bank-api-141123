const app = require("./app.js")
require("dotenv").config({path: "./config/.env"})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`SERVER ON PORT ${port}`)
})