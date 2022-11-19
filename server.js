require('dotenv').config()
const express = require('express')
const connectDB = require('./db/connect')

const app = express()

// Routes
app.get('/', (req, res) => {
  res.send('TRYGVE')
})

app.get('/posts', (req, res) => {
  res.send('POSTS')
})

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