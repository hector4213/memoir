const express = require('express')
const User = require('./users.model')

const router = express.Router()

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const users = await User.query().select('id', 'username', 'email')
  console.log(users)
  res.json(users)
})

module.exports = router
