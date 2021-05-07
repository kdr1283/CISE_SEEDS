require("dotenv").config({ path: "./config.env" })
const path = require('path')
const express = require("express")
const connectDB = require("./config/db")

const app = express()

connectDB()

app.get('/', (req, res) => res.send("Hello world! MongoDB connected"))

const port = process.env.PORT || 8082

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '/client/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"))
    })
} else {
    app.get("/", (req, res) => {
        res.send("Api running")
    })
}

app.listen(port, () => console.log(`Server running on port ${port}`))