const express = require( "express" );
const cors = require( "cors" );
const app = express();
const bodyParser = require('body-parser');


app.use( cors( { credentials: true, origin: true } ) );
app.use(bodyParser.urlencoded({ extended: true }));
require('dotenv').config();

app.post( "/", ( req, res ) => {
    console.log(req.body)
    const email_to = req.body.email;
    const password = req.body.password

    const email = require("./controller/Email")
    const result = email.sendEmail(email_to, password).then(function(data){
        res.status(200).send(data);
    });

});


module.exports = app;