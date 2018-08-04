import mongoose, { Schema } from 'mongoose'

const SkillCatSchema = new Schema ({
  categoryTitle: { type: String, required: true, unique: true },
  order: Number,
  color: String,
  skills: [{ type: Schema.Types.ObjectId, ref: 'Skill' }]
}, { 
  timestamps: true,
  collection: 'SkillCategories'
})

export default mongoose.model('SkillCategory', SkillCatSchema)