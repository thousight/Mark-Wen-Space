import mongoose, { Schema } from 'mongoose'

const EduSchema = new Schema ({
  organization: String,
  city: String,
  state: String,
  degree: String,
  time: String,
  order: Number,
  image: String,
  desc: [String],
  style: {
    type: Schema.Types.ObjectId, 
    ref: 'Style'
  }
}, { timestamps: true })

export default mongoose.model('Education', EduSchema)