const express = require('express')
const app = express()
// const nodemailer = require("nodemailer")

const port = process.env.PORT || 5000

app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello")
})

app.post("/getemail", async (req, res) => {
    res.send("hello")
})

app.listen(port, () => {
})