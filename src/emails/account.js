const sgMail = require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'igorzi84@gmail.com',
        subject: 'Subject',
        text: `Welcome, ${name}.`
    })
}

const sendCancelationEmail = (email, name) => {
    sg.send({
        to: email,
        from: 'igorzi84@gmail.com',
        subject: 'Subject',
        text: `Good bye, ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}