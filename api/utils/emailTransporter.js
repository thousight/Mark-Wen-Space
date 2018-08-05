import nodemailer from 'nodemailer'
import smtpTransport from 'nodemailer-smtp-transport'

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
})

export default transporter