import nodemailer from 'nodemailer'
import smtpTransport from 'nodemailer-smtp-transport'

import config from '../../config'

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: config.GmailOAuth
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