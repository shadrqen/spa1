const axios = require('axios')
const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
    res.status(200).json({ message: 'Reached the database microservice successfully' })
})

router.get('/get_all_users', async function (req, res, next) {
    await axios.get('http://localhost:2000/all_users')
        .then(response => {
            res.json({ users: response.data })
        })
        .catch(error => {
            res.status(500).send(error)
        })
})

module.exports = router
