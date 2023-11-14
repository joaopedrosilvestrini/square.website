import mongoose, { Schema } from 'mongoose'

mongoose.connect(process.env.MONGO_DB || '')
mongoose.Promise = global.Promise

const serverSchema = new Schema({
  _id: String,
  servername: String,
  icon: String,
  short_desc: String,
  long_desc: String,
  owners: [],
  tags: [],
  votes: Number,
  verified: Boolean,
})

const Servers =
  mongoose.models.servers || mongoose.model('servers', serverSchema)
export default Servers
