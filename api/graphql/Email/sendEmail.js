import { sendEmailToMark } from '../../utils/emailTransporter'

export default (_, { fromEmail, subject, textBody  }) => sendEmailToMark(fromEmail, subject, textBody)