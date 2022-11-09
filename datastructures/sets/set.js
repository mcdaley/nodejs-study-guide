//-----------------------------------------------------------------------------
// datastructures/sets/set.js
//-----------------------------------------------------------------------------

/**
 * @class Set
 */
class Set {
  constructor() {
    this.items = {}
  }

  add(element) {
    this.items[element] = element
    return true
  }

  delete(element) {
    if(!this.has(element)) {
      return false
    }
    
    delete this.items[element]
    return true
  }

  has(element) {
    if(!this.items.hasOwnProperty(element)) {
      return false
    }
    return true
  }

  clear() {
    this.items = {}
  }

  size() {
    return Object.keys(this.items).length
  }

  values() {
    return Object.values(this.items)
  }

  toString() {
    return this.values().join(", ")
  }

  union(otherSet) {
    const unionSet = new Set()

    this.values().forEach( (element) => unionSet.add(element))
    otherSet.values().forEach( (element) => {
      if(!this.has(element)) {
        unionSet.add(element)
      }
    })

    return unionSet
  }

  intersection(otherSet) {
    const intersectionSet = new Set()

    this.values().forEach( (element) => {
      if(otherSet.has(element)) {
        intersectionSet.add(element)
      }
    })

    return intersectionSet
  }

  difference(otherSet) {
    const differenceSet = new Set()

    this.values().forEach( (element) => {
      if(!otherSet.has(element)) {
        differenceSet.add(element)
      }
    })

    return differenceSet
  }

  isSubset(otherSet) {
    if(this.size() > otherSet.size()) { return false }

    let subset   = this.values().filter( (element) => {
      if(otherSet.has(element)) {
        return element
      }
    })

    return subset.length === this.size() ? true : false
  }

  isSubsetV2(otherSet) {
    if(this.size() > otherSet.size()) { return false }

    let isSubset = true
    this.values().every( (element) => {
      if(!otherSet.has(element)) {
        isSubset = false
        return false
      }
      return true
    })

    return isSubset
  }
}

// Export the Set
module.exports = Set