const express = require("express")
const app = express()

app.get("/", (request, response) => {
    response.send("Hello worlds!")
})

module.exports = app;