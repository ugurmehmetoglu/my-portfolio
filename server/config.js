const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    sendgrid_api: process.env.SENDGRID_API,
    port: 5000
}