import mongoose, { Schema } from 'mongoose'

var ExpSchema = new Schema ({
  organization: String,
  city: String,
  state: String,
  title: String,
  time: String,
  order: Number,
  image: String,
  desc: [String],
  style: {
    type: Schema.Types.ObjectId, 
    ref: 'Style'
  }
}, { timestamps: true })

export default mongoose.model('Experience', ExpSchema)