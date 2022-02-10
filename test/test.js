const chai = require('chai')
const expect = chai.expect
const assert = chai.assert
const translator = require('../translator')

describe('testing translator api', function () {
  it('translate', async function () {
    const data = await translator('This is a sample test.', 'German')
    if (data) {
      expect(data).to.be.an('object')
      expect(data).to.have.property('translatedText')
      expect(data).to.have.property('translations')
      assert.equal(data.translatedText, 'Dies ist ein Mustertest.')
    }
  })
})
