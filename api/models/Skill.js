import mongoose, { Schema } from 'mongoose'

const SkillSchema = new Schema ({
    skillName: String,
    percent: Number
}, { 
    timestamps: true,
    collection: 'Skills'
  })

export default mongoose.model('Skill', SkillSchema)