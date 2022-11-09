//-----------------------------------------------------------------------------
// datastructures/dictionaries/dictionary.test.js
//-----------------------------------------------------------------------------
const Dictionary = require('./dictionary')

describe(`Dictionary`, () => {
  let dictionary

  beforeEach( () => {
    dictionary = new Dictionary()
    dictionary.set('one', 1)
    dictionary.set('two', 2)
    dictionary.set('three', 3)
  })

  it(`Adds key/value pair to dictionary`, () => {
    // Validate dictionary in beforeEach
    expect(dictionary.table.hasOwnProperty('one')).toBe(true)  
    expect(dictionary.table.hasOwnProperty('two')).toBe(true)
    expect(dictionary.table.hasOwnProperty('four')).toBe(false)
    expect(dictionary.table.three).toMatchObject({key: 'three', value: 3})
  })

  it(`Checks if dictionaary has a key`, () => {
    expect(dictionary.has('one')).toBe(true)
    expect(dictionary.has('five')).toBe(false)
  })

  it(`Removes key/value from dictionary`, () => {
    expect(dictionary.remove('two')).toBe(true)
    expect(dictionary.remove('two')).toBe(false)
  })

  it(`Returns the value for a key`, () => {
    expect(dictionary.get('three')).toBe(3)
    expect(dictionary.get('five')).toBe(undefined)
  })

  it(`Returns the size of the dictionary`, () => {
    expect(dictionary.size()).toBe(3)

    dictionary.set('four', 4)
    expect(dictionary.size()).toBe(4)
  })

  it(`Removes all values`, () => {
    dictionary.clear()
    expect(dictionary.table).toEqual({})
  })

  it(`Returns true if dictionary is empty`, () => {
    expect(dictionary.isEmpty()).toBe(false)

    dictionary.clear()
    expect(dictionary.isEmpty()).toBe(true)
  })

  it(`Returns array of all the keys`, () => {
    expect(dictionary.keys()).toEqual(['one', 'two', 'three'])
  })

  it(`Returns array of all the values`, () => {
    expect(dictionary.values()).toEqual([1, 2, 3])
  })

  it(`Returns array of all key/values`, () => {
    expect(dictionary.keyValues()).toEqual([['one', 1], ['two', 2], ['three', 3]])
  })
})