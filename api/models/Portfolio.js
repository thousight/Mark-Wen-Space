import mongoose, { Schema } from 'mongoose'

const PortfolioSchema = new Schema(
  {
    title: String,
    logo: String,
    time: String,
    desc: String,
    keywords: String,
    categories: [String],
    links: Object,
    order: Number,
    style: {
      type: Schema.Types.ObjectId,
      ref: 'Style',
    },
  },
  {
    timestamps: true,
    collection: 'Portfolios',
  },
)

export default mongoose.model('Portfolio', PortfolioSchema)
