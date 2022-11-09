//-----------------------------------------------------------------------------
// datastructures/hashtabls/hashtable-chaining.test.js
//-----------------------------------------------------------------------------
const HashTableSeparateChaining = require('./hashtable-chaining')

describe(`HashTableSeparateChaining`, () => {
  describe(`put`, () => {
    it(`Adds object to the hash table`, () => {
      let hash = new HashTableSeparateChaining()

      expect(hash.put('Ygritte',  'ygritte@email.com')).toBe(true)
      expect(hash.put('Jonathan', 'jonathan@email.com')).toBe(true)
      expect(hash.put('Jamie',    'jamie@email.com')).toBe(true)
      expect(hash.put('Jack',     'jack@email.com')).toBe(true)
    })
  })

  describe(`get`, () => {
    let hash

    beforeEach( () => {
      hash = new HashTableSeparateChaining()

      hash.put('Ygritte',  'ygritte@email.com')
      hash.put('Jonathan', 'jonathan@email.com')
      hash.put('Jamie',    'jamie@email.com')
      hash.put('Jack',     'jack@email.com')
    })

    afterEach( () => {
      hash = null
    })

    it(`Returns undefined if key is not found`, () => {
      expect(hash.get('Fred')).toBe(undefined)
    })

    it(`Returns the value if key is found`, () => {
      expect(hash.get('Ygritte')).toBe('ygritte@email.com')
      expect(hash.get('Jonathan')).toBe('jonathan@email.com')
      expect(hash.get('Jamie')).toBe('jamie@email.com')
    })
  })

  describe(`remove`, () => {
    let hash

    beforeEach( () => {
      hash = new HashTableSeparateChaining()

      hash.put('Ygritte',  'ygritte@email.com')
      hash.put('Jonathan', 'jonathan@email.com')
      hash.put('Jamie',    'jamie@email.com')
      hash.put('Jack',     'jack@email.com')
    })

    afterEach( () => {
      hash = null
    })

    it(`Returns false if element is not in the hash table`, () => {
      expect(hash.remove('Fred')).toBe(false)
      expect(hash.get('Fred')).toBe(undefined)
    })

    it(`Removes element from the hash table`, () => {
      expect(hash.remove('Ygritte')).toBe(true)
      expect(hash.get('Ygritte')).toBe(undefined)

      expect(hash.remove('Jonathan')).toBe(true)
      expect(hash.get('Jonathan')).toBe(undefined)
    })
  })
})