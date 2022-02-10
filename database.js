const Sequelize = require('sequelize')

// new Sequelize("database", "username", "password", options)
const sequelize = new Sequelize('userDB', 'ajay', '1234', {
  host: '127.0.0.1',
  port: 3306,
  dialect: 'mysql',
  pool: {
    max: 15,
    min: 5,
    idle: 20000,
    evict: 15000,
    acquire: 30000
  }
})

// testing the connection
;(async function () {
  try {
    console.log('inside database connection')
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
})()

module.exports = sequelize
