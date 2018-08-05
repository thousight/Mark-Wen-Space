import nodemailer from 'nodemailer'

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const validateEmail = email => email ? emailRegex.test(email.toLowerCase()) : false

const transporterAuth = () => {
    let { EMAIL_USER, EMAIL_CLIENT_ID, EMAIL_CLIENT_SECRET, EMAIL_REFRESH_TOKEN, EMAIL_ACCESS_TOKEN } = process.env

    return {
        type: 'OAuth2',
        user: EMAIL_USER,
        clientId: EMAIL_CLIENT_ID,
        clientSecret: EMAIL_CLIENT_SECRET,
        refreshToken: EMAIL_REFRESH_TOKEN,
        accessToken: EMAIL_ACCESS_TOKEN,
        expires: 3600
    }
}

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: transporterAuth()
})

export const sendEmailToMark = (fromEmail, subject, textBody) => new Promise((resolve, reject) => {
    if (validateEmail(fromEmail)) {
        transporter.sendMail({
            from: fromEmail,
            to: 'markwenguojie94@gmail.com',
            subject: `[markwen.space]: ${subject}`,
            text: textBody
        }, (error, info) => {
            if (error) {
                reject(error)
            } else {
                resolve(info)
            }
        })
    } else {
        reject('Invalid from email address')
    }
    
})

export default transporter