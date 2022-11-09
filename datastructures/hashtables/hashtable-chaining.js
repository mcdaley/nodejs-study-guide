//-----------------------------------------------------------------------------
// datastructures/hashtables/hashtable-chaining.js
//-----------------------------------------------------------------------------
const { 
  ValuePair, 
  defaultToString 
}                         = require('../utils/utils')
const DoubleLinkedList    = require('../linkedlists/double-linked-list')

const equalsFn = (a, b) => {
  return a.key == b.key ? true : false
}

/**
 * Hash table that handles collisions using linked lists.
 * 
 * @class HashTableSeparateChaining
 */
class HashTableSeparateChaining {
  constructor(toStringFn = defaultToString) {
    this.toStringFn = toStringFn
    this.table      = {}
  }

  /**
   * @function put
   */
  put(key, value) {
    if(key != null && value != null) {
      const position = this.hashCode(key)

      if(this.table[position] == null) {
        this.table[position] = new DoubleLinkedList(equalsFn)
      }
      this.table[position].addToRear(new ValuePair(key, value))

      return true
    }
    return false
  }

  /**
   * @function get
   */
  get(key) {
    const position = this.hashCode(key)

    if(this.table[position] == null || this.table[position].isEmpty()) {
      return undefined
    }

    let current = this.table[position].getHead()
    while(current != null) {
      if(current.element.key === key) {
        return current.element.value
      }
      current = current.next
    }
    return undefined
  }

  /**
   * @function remove
   */
  remove(key) {
    const position   = this.hashCode(key)
    const linkedList = this.table[position]

    if(linkedList == null || linkedList.isEmpty()) {
      return false
    }

    const current = linkedList.getHead()
    while(current != null) {
      let element = current.element
      
      if(element.key === key) {
        linkedList.remove(element)

        if(linkedList.isEmpty()) {
          delete this.table[position]
        }

        return true
      }
      current = current.next
    }
    return false
  }

  /**
   * @function hashCode
   */
  hashCode(key) {
    return this.loseLoseHashCode(key)
  }

  /**
   * @function loseLoseHashCode
   */
  loseLoseHashCode(key) {
    if(typeof key === 'number') {
      return number
    }

    const tableKey = this.toStringFn(key)
    let   hash     = 0

    for(let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i)
    }
    
    return hash % 37
  }
}

// Export HashTableSeparateChaining
module.exports = HashTableSeparateChaining