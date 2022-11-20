const express = require('express')
const router = express.Router()
const User = require('../models/User')

const year = require('../middleware/year')
let yearNow = year()

// Routes
router.get('/', (req, res) => {
    res.render('index', {
        title: 'INDEX',
        year: yearNow
    })
})

router.post('/', async (req, res) => {
    try {
        const user = await new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        user.save()
        res.redirect('/')
    } catch (error) {
        console.log(error)
    }
})

router.get('/users', async (req, res) => {
    try {
        const users = await User.find()
        res.render('users', {
            title: 'USERS',
            year: yearNow,
            users: users
        })
    } catch (error) {
        console.log(error)
        res.redirect('/')
    }
})


module.exports = router