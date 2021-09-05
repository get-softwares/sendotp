const express = require('express');
const nodemailer = require("nodemailer")
const app = express();
const emailjs = require("emailjs")

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Home Page Routesdf')
});

app.post('/', async (req, res) => {
    try {
        res.send(req.body.email)
    }
    catch {

    }
});

app.post("/getemail", async (req, res) => {
    try {
        let hello = Math.floor(100000 + Math.random() * 900000)
        var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            ignoreTLS: false,
            secure: false,
            auth: {
                user: 'getsoftwares18@gmail.com',
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
                res.json({ error }).status(404)
            } else {
                res.json({ otp: hello }).status(200);
            }
        });
    }
    catch {

    }
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on ${port}, http://localhost:${port}`)
});