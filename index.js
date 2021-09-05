const express = require('express')
const app = express()
require('dotenv').config()
const nodemailer = require("nodemailer")

const port = process.env.PORT || 5000

app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello")
})

app.post("/getemail", async (req, res) => {
    try {
        let hello = Math.floor(100000 + Math.random() * 900000)
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'deeptamresearchfoundationweb@gmail.com',
                pass: 'aayushkumarjha@drf'
            }
        });

        var mailOptions = {
            from: 'deeptamresearchfoundation@gmail.com',
            to: req.body.email,
            subject: `OTP for registeration is ${hello}`,
            text: `OTP for registeration is ${hello}`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                res.send(error).status(404)
            } else {
                res.json({ otp: hello }).status(200);
            }
        });
    }
    catch {

    }
})

app.listen(port, () => {
})