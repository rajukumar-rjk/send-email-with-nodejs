const nodemailer = require('nodemailer');

function  sendEmail(send_to, password) {
    return new Promise((resolve, reject)=>{
        let mailTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_FROM,
                pass: process.env.EMAIL_PASSWORD,
                // pass: 22,
            }
        });
        
        let mailDetails = {
            from: process.env.EMAIL_FROM,
            to: send_to,
            subject: 'Pratham | Govt. Partnership app',
            text: 'Your password is <b>' +password+'</b>',
            html: "<p>Your password is : <b>"+password+"</b></p>"
        };

        let result;  
        mailTransporter.sendMail(mailDetails, function(err, data) {
            if(err) {
                result =  [{'status' : 'fail', 'message': err.response}]
                resolve(result)

            } else {

                result =  [{'status' : 'success', 
                    'response': data.response,
                    'message_id': data.messageId,
                    'details': data.envelope,
                    'message': 'Email sent successfully'}]
                resolve(result);

            }
        });
    })    
    
}

module.exports = {sendEmail};