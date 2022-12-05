const express = require("express")
const app = express()

app.get("/", (request, response) => {
    response.send("Go to localhost:3000/todos")
})

app.get("/todos", (request, response) => {
    // response.send("Hello Developers!!")
    console.log("Todo list")

})

app.post("/todos", (request, response) => {
    console.log("Creating a Todo", request.body)

})

app.put("/todos/:id/markAsCompleted", (request,response) => {
    console.lof("We have to update a new todo with ID:", request.params.id)
})

app.delete("/todos/:id", (request, response) => {
    console.log("Delete a todo by ID: ", request.params.id  )
})

module.exports = app;