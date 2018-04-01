// Require dotenv so we can get our username and password from environment variables
require('dotenv').config();

'use strict';
const nodemailer = require('nodemailer');

module.exports = {
  send(request, response) {

    // console.log("Trying to send email from: " , request.body.sender);
    // console.log("Trying to send message : " , request.body.message);

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.NODEMAILER_USER,
            pass: process.env.NODEMAILER_PASS
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: process.env.NODEMAILER_USER, // sender address
        to: 'nicholas.pettyjohn@gmail.com', // list of receivers
        subject: 'Message sent from NickPettyjohn.com', // Subject line
        text: 'You received a message from: ' + String(request.body.sender) + '. The message was: "' + String(request.body.message) + '".', // plain text body
        // text: 'You received a message from: ' + String(request.body.user) + '. The message was: "' + String(response.body) + '".', // plain text body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
  },

};
