import mongoose, { Schema } from 'mongoose'

const SkillCatSchema = new Schema ({
  skillsCat: {
    type: String,
    required: true,
    unique: true
  },
  order: Number,
  color: String,
  skill: [{
    type: Schema.Types.ObjectId, 
    ref: 'Skill'
  }]
}, { timestamps: true })

export default mongoose.model('SkillCategory', SkillCatSchema)