const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const queryText = sequelize.define('queryText', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  text: {
    type: DataTypes.STRING
  },
  sourceLanguage: {
    type: DataTypes.STRING
  }
})

// synchronize the table
queryText.sync({ alter: true })

module.exports = queryText
