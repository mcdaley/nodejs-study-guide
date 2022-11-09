#!/usr/bin/env node
//-----------------------------------------------------------------------------
// datastructures/array-stack.js
//-----------------------------------------------------------------------------

/**
 * @class ArrayStack
 */
class ArrayStack {
  data = []

  /**
   * @method push
   */
  push(item) {
    this.data.push(item)
  }

  /**
   * @method pop
   */
  pop() {
    if(this.data.length === 0) {
      return undefined
    }

    return this.data.pop()
  }

  /**
   * @method size
   */
  size() {
    return this.data.length
  }

  /**
   * @method toString
   */
  toString() {
    return this.data.join(", ")
  }
}

// Export ArrayStack
module.exports = ArrayStack

/**
 * main()
 */
let stack = new ArrayStack()
stack.push('one')
stack.push('two')
stack.push('three')
//* console.log(`[info] Stack= `, stack.toString())

//* console.log(`[info] Pop ${stack.pop()}, stack size= ${stack.size()}`)
//* console.log(`[info] Pop ${stack.pop()}, stack size= ${stack.size()}`)
//* console.log(`[info] Stack= `, stack.toString())
