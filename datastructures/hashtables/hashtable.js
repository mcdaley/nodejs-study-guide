//-----------------------------------------------------------------------------
// datastructures/hashtables/hashtable.js
//-----------------------------------------------------------------------------
const { ValuePair, defaultToString } = require('../utils/utils')

/**
 * Hash table implementation using an object that does not handle collisions.
 * 
 * @class HashTable
 */
class HashTable {
  constructor(toStringFn = defaultToString) {
    this.toStringFn = toStringFn
    this.table      = {}
  }

  /**
   * @function put
   */
  put(key, value) {
    if(key != null && value != null) {
      const hash       = this.hashCode(key)
      this.table[hash] = new ValuePair(key, value)

      return true
    }
    return false
  }

  /**
   * Get the value for a key, if the key does not exist then return undefined.
   * 
   * @function get
   */
  get(key) {
    const   valuePair = this.table[this.hashCode(key)]
    return  valuePair == null ? undefined : valuePair.value
  }

  /**
   * @function remove
   */
  remove(key) {
    const hash      = this.hashCode(key)
    const valuePair = this.table[hash] 
    if(valuePair != null) {
      delete this.table[hash]
      return true
    }
    return false
  }
}

// Export HashTable
module.exports = HashTable