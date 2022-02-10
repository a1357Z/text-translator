const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const translatedText = sequelize.define('translatedText', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  queryTextId: {
    type: DataTypes.STRING
  },
  language: {
    type: DataTypes.STRING
  },
  translatedText: {
    type: DataTypes.STRING
  }
})

// synchronize the table
translatedText.sync({ alter: true })

module.exports = translatedText
