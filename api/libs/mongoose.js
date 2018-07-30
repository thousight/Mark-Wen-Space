import mongoose from 'mongoose'
import Promise from 'bluebird'
import config from '../../config'

export const connectToMongo = () => {
    // Connecting to MongoDB, markwen is read-only account
    // Change to non read-only account to write in the database
    mongoose.Promise = Promise
    return new Promise((resolve, reject) => {
        mongoose.connect(process.env.MONGODB_URI ? process.env.MONGODB_URI : config.database, { useNewUrlParser: true }, err => {
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

export default mongoose