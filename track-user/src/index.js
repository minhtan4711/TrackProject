require('./models/User') // execute 1
require('./models/Track')

const express = require('express')
const mongoose = require('mongoose')
// const bodyParser = require('body-parser');
// 4.import authRoutes
const authRoutes = require('./routes/authRoutes')
const trackRoutes = require('./routes/trackRoutes')
// check valid user through token
const requireAuth = require('./middlewares/requireAuth')

// 1.app
const app = express()

// instead of using bodyParser to handle some json data
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// 4_using authRoutes
app.use(authRoutes)
app.use(trackRoutes)


// 2.connect to mongodb
const mongoUri = 'mongodb+srv://minhtan471100:mynewbike85751@cluster0.m9ugh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// 2_mongo handlers
mongoose.connection.on('connected', () => {
    console.log('connected to mongo instance')
})
mongoose.connection.on('error', () => {
    console.error("error connecting to mongo", err)
})


// 1_root handlers
app.get('/', requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`)
})


// 1_set up port
app.listen(8080, () => {
    console.log('Listening on port 8080')
})




// 3_using nodemon change the script in json