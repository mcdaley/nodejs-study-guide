//-----------------------------------------------------------------------------
// datastructures/dictionaries/dictionary.js
//-----------------------------------------------------------------------------
const { ValuePair, defaultToString } = require("../utils/utils")

/**
 * @class Dictionary
 */
class Dictionary {
  constructor(toStringFn = defaultToString) {
    this.toStringFn = toStringFn
    this.table      = {}
  }

  set(key, value) {
    if(key != null && value != null) {
      this.table[this.toStringFn(key)] = new ValuePair(key, value)
      return true
    }
    return false
  }

  has(key) {
    return this.table.hasOwnProperty(this.toStringFn(key)) ? true : false
  }

  get(key) {
    if(!this.has(key)) return undefined

    return this.table[this.toStringFn(key)].value
  }

  remove(key) {
    if(!this.has(key)) return false

    delete this.table[this.toStringFn(key)]
    return true
  }

  size() {
    return Object.keys(this.table).length
  }

  isEmpty() {
    return this.size() > 0 ? false : true
  }

  clear() {
    this.table = {}
  }

  keys() {
    return Object.values(this.table).map( (entry) => entry.key)
  }

  values() {
    return Object.values(this.table).map( (entry) => entry.value)
  }

  keyValues() {
    return Object.values(this.table).map( (entry) => [entry.key, entry.value])
  }

  forEach(callbackFn) {
    let keyValueArray = this.keyValues()

    keyValueArray.every( (entry) => {
      return callbackFn(entry[0], entry[1]) ? true : false
    })
  }
}

// Export Dictionary
module.exports = Dictionary
