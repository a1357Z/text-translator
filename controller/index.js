const queryTextModel = require('../tables/queryText')
const translatedTextModel = require('../tables/translatedText')
const sequelize = require('../database')
const translator = require('../translator')

module.exports = {
  Translate: async (req, res) => {
    try {
      const { text, sourceLanguage, targetLanguage } = req.body

      const foundText = await sequelize.query(
                `SELECT queryTexts.text, queryTexts.sourceLanguage, 
                translatedTexts.translatedText FROM queryTexts INNER JOIN translatedTexts
                on queryTexts.id = translatedTexts.queryTextId WHERE queryTexts.text = 
                '${text}' AND queryTexts.sourceLanguage = '${sourceLanguage.toLowerCase()}' 
                AND translatedTexts.language = '${targetLanguage.toLowerCase()}';`
      )

      if (foundText && foundText.length > 0 && foundText[0].length > 0) {
        return res.status(200).send(foundText[0])
      } else {
        const response = await translator(text, targetLanguage)
        if (typeof response === 'object') {
          res.status(201).send({
            text,
            sourceLanguage,
            translatedText: response.translatedText
          })
        } else {
          return res
            .status(500)
            .send('we could not find the translation')
        }

        // now saving the translations in the database for future use
        const queryTextObj = await queryTextModel.create({
          text,
          sourceLanguage
        })

        // saving all the available translations for the given text for future
        const bulkCreateArray = []
        response.translations.forEach((item) => {
          bulkCreateArray.push({
            queryTextId: queryTextObj.getDataValue('id'),
            language: item.language.toLowerCase(),
            translatedText: item.text
          })
        })

        translatedTextModel.bulkCreate(bulkCreateArray)
      }
    } catch (error) {
      console.log(error)
      res.status(500).send('server error')
    }
  }
}
