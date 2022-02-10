const queryText = require('./queryText')
const translatedText = require('./translatedText')

// form a one-to-many relationship between the two
queryText.hasMany(translatedText, {
  foreignKey: 'queryTextId'
})

translatedText.belongsTo(queryText)
