require('dotenv').config()

const express = require('express')
const workouts = require('./routes/workout')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workouts)

// listening request
app.listen(process.env.PORT, ()=>{
    console.log('listening on port '+process.env.PORT)
})