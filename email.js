var nodemailer = require('nodemailer');
const config = require('./config.json');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.user,
    pass: config.pass
  }
});

var mailOptions = {
  from: 'evinxavier5@gmail.com',
  to: 'evinxavier5@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

for(let i=0;i<5;i++)
{
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}