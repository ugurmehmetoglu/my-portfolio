const dotenv = require('dotenv');
const express = require('express')
const app = express()
const cors = require('cors')
const mailer = require('nodemailer');
const { port } = require('./config');
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser')
dotenv.config();
app.use(bodyParser.json())
app.use(cors("*"))


// app.post('/contact', (req, res) => {
//     console.log("req body",req.body)
//     const{name, email, message} = req.body
//     transporter.sendMail({
//         to:'ugurmehmetoglu1903@gmail.com',
//         from: email,
//         html:`<h3>${name}</h3>
//         <p>${message}</p>`

//     }).then(res => {
//         res.json({res})
//     }).catch(err => {
//         console.log(err)
//     })
// })


app.use(express.static(path.join(__dirname, './client/build')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'))
})
app.use('/', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const transporter = mailer.createTransport({
  service: 'gmail',
  port: 5000,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  },
})
transporter.verify((error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Ready To Send')
  }
})

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const mail = {
    from: name,
    to: 'ugurmehmetoglu1903@gmail.com',
    subject: 'Contact Form Submission',
    html: `<p> Name: ${name} </p><p> Email: ${email}</p><p> Message: ${message}</p>`
  }
  transporter.sendMail(mail, (error, data) => {
    if (error) {
      res.json({ status: 'ERROR' })
    } else {
      res.json({ status: 'Message Sent' })
    }
  })
})