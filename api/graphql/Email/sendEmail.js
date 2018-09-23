import { sendEmailToMark } from '../../utils/emailTransporter'

export default (_, { name, fromEmail, subject, textBody }) =>
  sendEmailToMark(name, fromEmail, subject, textBody)
