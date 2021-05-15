const express = require("express")
const todoRoute = require('./routes/todos')
const ser = express()



//set up view engine
ser.set("view engine", "hbs")

const SERVER_PORT = process.env.PORT || 4446

// Body Parser Middleware
ser.use(express.json())
ser.use(express.urlencoded({extended : true}))
ser.use('/', todoRoute)



ser.listen(SERVER_PORT, () => {
    console.log("Server Started at http://localhost:4446")
})