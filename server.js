require('dotenv').config()
const express = require('express')
const connectDB = require('./db/connect')

const app = express()

// Import routes
const postsRoute = require('./routes/index')


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({
  extended: false
}))
app.use(express.json())

app.use('/', postsRoute)



// Server
const PORT = process.env.PORT || 3000

const start = async () => {
  try {
    await connectDB(process.env.DATABASE_URL)
    app.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()