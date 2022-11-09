//-----------------------------------------------------------------------------
// algorithms/maxCharacters.test.js
//-----------------------------------------------------------------------------
const maxCharacters = require('./max-characters')

describe(`maxCharacters`, () => {
  it(`Returns the max character`, () => {
    expect(maxCharacters('Hello World!')).toBe('l')
  })
})