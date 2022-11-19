const express = require('express')
const router = express.Router()
const User = require('../models/User')

// Routes
router.get('/', (req, res) => {
    res.render('index', {
        title: 'INDEX'
    })
})


router.post('/', async (req, res) => {
    try {
        const user = await new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        console.log(user)
        user.save()
    } catch (error) {
        console.log(error)
    }
})


module.exports = router