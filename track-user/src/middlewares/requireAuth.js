// check the valid token of the user
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = mongoose.model('User')

module.exports = (req, res, next) => {
    const { authorization } = req.headers
    // authorization === 'Bearer token'

    if (!authorization) {
        return res.status(401).send({ error: 'You must be logged in' })
    }

    const token = authorization.replace('Bearer ', '')
    jwt.verify(token, 'MY_SECRET_KEY', async (err, payload) => {
        if (err) {
        // console.log(payload)
            return res.status(401).send({ error: 'You must be logged in' }) 
        }
        const { userId } = payload

        // looking for userid in mongodb
        const user = await User.findById(userId)

        req.user = user

        console.log(user)

        next()
    })
}