import mongoose, { Schema } from 'mongoose'

const SkillSchema = new Schema ({
    skillName: String,
    percent: Number
}, { timestamps: true })

export default mongoose.model('Skill', SkillSchema)