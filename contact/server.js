const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { name, email, question } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mythicmonkeysweb@gmail.com',
            pass: 'pokemonlover69420'
        }
    });
// je moet server eerst activeren met node server.js
    const mailOptions = {
        from: email,
        to: 'mythicmonkeysweb@gmail.com',
        subject: 'New Question from Contact Form',
        text: `Name: ${name}\nEmail: ${email}\nQuestion: ${question}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email: ' + error.message);
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});