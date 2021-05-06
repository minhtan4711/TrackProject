// sign in sign up handlers
const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
// access to user collection in mongodb
const User = mongoose.model('User')

const router = express.Router()

// sign up handler 
router.post('/signup', async (req, res) => {
    const { email, password } = req.body

    try {
        const user = new User({ email, password })
        await user.save()

        const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY')
        res.send({ token })
    } catch (err) {
        res.status(422).send(err.message)
    }

})

router.post('/signin', async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(402).send({ error: 'Must provide email and password' })
    }

    const user = await User.findOne({ email })
    if (!user) {
        return res.status(404).send({ error: 'Invalid password or email' })
    }

    try {
        await user.comparePassword(password)
        const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY')
        res.send({ token })
    } catch (err) {
        return res.status(404).send({ error: 'Invalid password or email' })
    }
})


module.exports = router