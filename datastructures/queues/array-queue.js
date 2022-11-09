//-----------------------------------------------------------------------------
// datastructures/array-queue.js
//-----------------------------------------------------------------------------

class ArrayQueue {
  constructor(items = []) {
    this.data = [...items]
  }

  enqueue(item) {
    this.data.push(item)
  }

  dequeue() {
    if(this.data.length === 0) {
      return undefined
    }

    return this.data.shift()
  }

  size() {
    return this.data.length
  }
}

// Export the ArrayQueue
module.exports = ArrayQueue