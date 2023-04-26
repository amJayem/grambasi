const mongoose = require('mongoose')
require('dotenv').config()
// DB_URL=mongodb+srv:jayem:jayem475767@cluster0.42e2srw.mongodb.net/grambasi?retryWrites=true&w=majority
const uri = process.env.DB_URL
mongoose
  .connect(uri)
  .then(() => console.log('db connected'))
  .catch((e) => console.error('Error!! db not connected => ', e.message))
// mongodb connect by mongoose end
