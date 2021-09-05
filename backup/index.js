const express = require('express');
const nodemailer = require("nodemailer")
const app = express();
const emailjs = require("emailjs")

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Home Page Rouasdftesdf')
});

app.post('/', async (req, res) => {
    try {
        res.send(req.body.email)
    }
    catch {

    }
});

// app.post("/getemail", async (req, res) => {
    // try {
        let hello = Math.floor(100000 + Math.random() * 900000)
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: false,
            port: 465,
            auth:{
                user: 'getsoftwares18@gmail.com',
                pass: 'aayushkumarjha@drf'
            }
        })
        
        let mailOptions = {
            from: '"Portfolio Message" <myotheremail@gmail.com> ',
            to: "deeptamresearchfoundation@gmail.com",
            subject: '',
            text: '',
            html: ''
        }
        
        app.post('/getemail',function(req,res){
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ status: "OK" }));
            res.end();
            mailOptions['subject'] = 'new portfolio message from ' + req.body.name ;
            mailOptions['text'] = req.body.message + " \n      " + " phone number or email : " + req.body.phone_or_email;
        
            transporter.sendMail(mailOptions,(error,info)=>{
                error?console.log('error',error):console.log('success');
            });
        
        })
    // }
//     catch {

//     }
// })

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on ${port}, http://localhost:${port}`)
});