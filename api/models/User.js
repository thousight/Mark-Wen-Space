import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcrypt-nodejs'

const SALT_WORK_FACTOR = 10

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: String,
    type: { type: String, default: 'Visitor' },
  },
  {
    timestamps: true,
    usePushEach: true,
  },
)

userSchema.pre('save', next => {
  const user = this

  if (!user.isModified('password')) {
    return next()
  }

  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) {
      return next(err)
    }

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) {
        return next(err)
      }

      user.password = hash
      return next()
    })
  })
})

userSchema.methods.comparePassword = candidatePassword =>
  bcrypt.compareSync(candidatePassword, this.password)

export default mongoose.model('User', userSchema)
