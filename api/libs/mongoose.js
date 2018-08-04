import mongoose from 'mongoose'
import Promise from 'bluebird'

const validMongoIdRegex = /^[a-fA-F0-9]{24}$/

export const connectToMongo = () => {
    // Connecting to MongoDB, markwen is read-only account
    // Change to non read-only account to write in the database
    mongoose.Promise = Promise
    return new Promise((resolve, reject) => {
        mongoose.connect(process.env.MONGODB_URI ? process.env.MONGODB_URI : require('../../config').MONGODB_URI, { useNewUrlParser: true }, err => {
            if (err) {
                console.log(err)
                reject(err)
            } else {
                console.log('Connected to MongoDB')
                resolve(mongoose)
            }
        })
    })
}

export const isMongoId = id => (mongoose.Types.ObjectId.isValid(id) && validMongoIdRegex.test(id))

export default mongoose