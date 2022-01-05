const express = require( "express" );
const cors = require( "cors" );
const app = express();
const bodyParser = require('body-parser');


app.use( cors( { credentials: true, origin: true } ) );
app.use(bodyParser.urlencoded({ extended: true }));
require('dotenv').config();

const port = process.env.PORT || 3200;

const config = {
	user: process.env.DB_USER || "dbynuser",
	password: process.env.DB_PASSWORD || "yndbp#1234",
	server: process.env.DB_SERVER || "serveryouthnetedu.database.windows.net",
	database: process.env.DB_DATABASE || "dbYouthNetEdu",
};

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