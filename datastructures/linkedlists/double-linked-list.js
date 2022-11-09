//-----------------------------------------------------------------------------
// datastructures/double-linked-list.js
//-----------------------------------------------------------------------------
const { defaultEquals } = require('../utils/utils')

/**
 * @class Node
 */
class Node {
  constructor(element, next = null, prev = null) {
    this.element = element
    this.next    = next
    this.prev    = prev
  }
}

/**
 * @class DoubleLinkedList
 */
class DoubleLinkedList {
  constructor(equalsFn = defaultEquals) {
    this.head     = null
    this.tail     = null
    this.size     = 0
    this.equalsFn = equalsFn
  }

  getHead() {
    return this.head
  }

  addToHead(item) {
    let node = new Node(item)

    if(this.head === null) {
      this.head = node
      this.tail = this.head
    }
    else {
      node.next       = this.head
      node.prev       = null
      this.head.prev  = node
      this.head       = node
    }
    this.size += 1
  }

  addToRear(item) {
    let node = new Node(item)

    if(this.tail === null) {
      this.tail = node
      this.head = this.tail
    }
    else {
      node.prev       = this.tail
      node.next       = null
      this.tail.next  = node 
      this.tail       = node
    }
    this.size += 1
  }

  removeHead() { 
    // Empty list
    if(this.size === 0) {
      return undefined
    }

    let element = this.head.element

    if(this.size === 1) {
      this.head = null
      this.tail = null
      this.size = 0
    }
    else {
      this.head       = this.head.next
      this.head.prev  = null
      this.size      -= 1
    }

    return element
  }

  removeTail() {
    if(this.size === 0) {
      return undefined
    }

    let element = this.tail.element

    if(this.size === 1) {
      this.head = null
      this.tail = null
      this.size = 0
    }
    else {
      this.tail       = this.tail.prev
      this.tail.next  = null
      this.size      -= 1
    }

    return element
  }

  remove(element) {
    if(this.isEmpty()) return false

    if(this.equalsFn(this.head.element, element)) {
      return this.removeHead()
    }
    else if(this.equalsFn(this.tail.element, element)) {
      return this.removeTail()
    }
    else {
      let ptr   = this.head 
      let found = false

      while(!found && ptr != null)  {
        if(this.equalsFn(ptr.element, element)) {
          ptr.prev.next  = ptr.next
          ptr.next.prev  = ptr.prev
          ptr.prev       = null
          this.size     -= 1
          found          = true
        }
        else {
          ptr = ptr.next
        }
      }
      return true
    }
  }

  isEmpty() {
    return this.size === 0 ? true : false
  }

  length() {
    return this.size
  }

  clear() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  toString() {
    let data = []
    let ptr  = this.head
    while(ptr != null) {
      data.push(ptr.element)
      ptr = ptr.next
    }

    return `[${data.join(", ")}]`
  }

  forEach(fn) {
    let ptr = this.head
    while(ptr != null) {
      fn(ptr.element)
      ptr = ptr.next
    }
  }
}

// Export the DoubleLinkedList
module.exports = DoubleLinkedList