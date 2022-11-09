//-----------------------------------------------------------------------------
// datastructures/hashtables/hashtable.test.js
//-----------------------------------------------------------------------------
const HashTable = require('./hashtable')

describe(`HashTable`, () => {
  describe(`loseLoseHashCode`, () => {
    it(`Returns a hash code`, () => {
      let hash     = new HashTable()
      let hashCode = hash.loseLoseHashCode('Gandalf')
      expect(hashCode).toBe(19)
    })
  })

  describe(`put`, () => {
    it(`Adds key/value pair to hash table`, () => {
      let hash = new HashTable()
      expect(hash.put('Gandalf', 'gandalf@email.com')).toBe(true)
    })
  })

  describe(`get`, () => {
    it(`Return undefined id the key does not exist in the hash`, () => {
      let hash = new HashTable()
      expect(hash.get('Gandalf')).toBe(undefined)
    })

    it(`Returns the value for a key`, () => {
      let hash = new HashTable()
      hash.put('Gandalf', 'gandalf@email.com')

      expect(hash.get('Gandalf')).toBe('gandalf@email.com')
    })
  })

  describe(`remove`, () => {
    let hash

    beforeEach( () => {
      hash = new HashTable()
      hash.put('Gandalf', 'gandalf@email.com')
      hash.put('John', 'johnsnow@email.com')
    })

    it(`Returns false if key does not exist in hash`, () => {
      expect(hash.remove('Tyrion')).toBe(false)
    })

    it(`Returns true if key/value is removed`, () => {
      expect(hash.get('John')).toBe('johnsnow@email.com')
      expect(hash.remove('John')).toBe(true)
      expect(hash.get('John')).toBe(undefined)
    })
  })
})