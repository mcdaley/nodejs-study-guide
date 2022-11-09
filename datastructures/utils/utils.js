//-----------------------------------------------------------------------------
// datastructures/utils/utils.js
//-----------------------------------------------------------------------------

/**
 * Uses JavaScript's default equals to compare to objects. Returns true if 
 * the objects are equals, otherwise returns false
 * @param   {Object}  a 
 * @param   {Object}  b
 * @returns {boolean} True if objects are equal, otherwise false 
 */
function defaultEquals(a, b) {
  return a === b
}

/**
 * Default method to convert object to string.
 * @param   {Object} item 
 * @returns {string} 
 */
function defaultToString(item) {
  if(item === null) {
    return 'NULL'
  }
  else if(item === undefined) {
    return 'UNDEFINED'
  }
  else if(typeof item === 'string' || item instanceof String) {
    return `${item}`
  }
  return item.toString()
}

/**
 * Utility class for storing key/value pairs for dictionaries and
 * hash tables.
 * 
 * @class ValuePair
 */
class ValuePair {
  constructor(key, value) {
    this.key   = key
    this.value = value
  }

  toString() {
    return `[${this.key}: ${this.value}]`
  }
}

module.exports = { defaultEquals, defaultToString, ValuePair }