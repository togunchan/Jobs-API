const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')

const authenticateUser = async (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthenticatedError('Authentication invalid')
  }
  const token = authHeader.split(' ')[1]
  //console.log(`Token is ${token}`)
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    // console.log(
    //   `payload.userID: ${payload.userID}, payload.name: ${payload.name}`
    // )
    // attach the user to the job routes
    req.user = { userID: payload.userID, name: payload.name }
    next()
  } catch (error) {
    throw new UnauthenticatedError('Authentication invalid')
  }
}

module.exports = authenticateUser
