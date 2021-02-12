const userHelper = require('../helpers/user')
const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
    res.status(200).json({ message: 'Reached the database microservice successfully' })
})

router.get('/all_users', async function (req, res, next) {
    await userHelper.getAllUsers()
        .then(response => {
            res.status(200).send(response)
        })
        .catch(error => {
            res.status(500).send(error)
        })
})

module.exports = router
