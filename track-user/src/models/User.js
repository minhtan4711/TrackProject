const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

// create user model through mongoose package
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})


// sign up for new user
userSchema.pre('save', function(next) { // not using the => function
    const user = this
    if (!user.isModified('password')) {
        return next()
    }

    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err)
        }

        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
                return next(err)
            }
            user.password = hash
            next()
        })
    })
})

// sign in handle
userSchema.methods.comparePassword = function(candidatePassword) {

    const user = this
    return new Promise ((resolve, reject) => {
        bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
            if (err) {
                return reject(err)
            }
            if (!isMatch) {
                return reject(false)
            }
            resolve(true)
        })
    })
} 



mongoose.model('User', userSchema)