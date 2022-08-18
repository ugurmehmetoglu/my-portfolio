const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    sendgrid_api: process.env.SENDGRID_API,
    port: process.env.PORT || 5000
}