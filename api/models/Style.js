import mongoose, { Schema } from 'mongoose'

const StyleSchema = new Schema ({
    primaryColor: String,
    secondaryColor: String,
    bannerImage: String
}, { 
    timestamps: true,
    collection: 'Styles'
})

export default mongoose.model('Style', StyleSchema)