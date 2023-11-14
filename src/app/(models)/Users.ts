import mongoose, { Schema } from 'mongoose'

mongoose.connect(process.env.MONGO_DB || '')
mongoose.Promise = global.Promise

const usersSchema = new Schema({
  _id: String,
  username: String,
  avatar: String,
})

const Users = mongoose.models.users || mongoose.model('users', usersSchema)
export default Users
