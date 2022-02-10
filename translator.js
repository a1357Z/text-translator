// this is a dummy translator api and will work only for
// text = "This is a sample test."
const translations = [
  {
    language: 'Arabic',
    symbol: 'ar',
    text: 'هذا اختبار تجريبي'
  },
  {
    language: 'Dutch',
    symbol: 'nl',
    text: 'Dit is een voorbeeldtoets.'
  },
  {
    language: 'French',
    symbol: 'fr',
    text: 'Ceci est un exemple de test.'
  },
  {
    language: 'German',
    symbol: 'de',
    text: 'Dies ist ein Mustertest.'
  },
  {
    language: 'Italian',
    symbol: 'it',
    text: 'Questo è un test di esempio.'
  },
  {
    language: 'Japanese',
    symbol: 'ja',
    text: 'これはサンプルテストです。'
  },
  {
    language: 'Russian',
    symbol: 'ru',
    text: 'Это пробный тест.'
  },
  {
    language: 'Spanish',
    symbol: 'es',
    text: 'Esta es una prueba de muestra.'
  }
]
module.exports = async function (text, targetLanguage) {
  try {
    let response = 'translation not found'
    if (text === 'This is a sample test.') {
      translations.forEach((item) => {
        const langRegex = new RegExp(item.language, 'gi')
        const symbolRegex = new RegExp(item.symbol, 'gi')
        if (
          langRegex.test(targetLanguage) ||
                    symbolRegex.test(targetLanguage)
        ) {
          response = {
            translatedText: item.text,
            translations
          }
        }
      })
    }
    return response
  } catch (error) {
    return 'translation not found'
  }
}
