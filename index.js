const express = require('express');
const nodemailer = require("nodemailer")
const app = express();

app.get('/', (req, res) => {
    res.send('Home Page Route')
});

app.post('/', (req, res) => {
    res.send('Home Page Route')
});

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

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on ${port}, http://localhost:${port}`)
});