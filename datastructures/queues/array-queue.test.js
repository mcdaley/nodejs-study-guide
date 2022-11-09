//-----------------------------------------------------------------------------
// datastructures/array-queue.test.js
//-----------------------------------------------------------------------------
const ArrayQueue = require('./array-queue')

describe('ArrayQueue', () => {
  let queue 

  beforeEach( () => {
    queue = new ArrayQueue(['one', 'two'])
  })

  it(`Adds items to rear of the queue`, () => {
    queue.enqueue('three')
    queue.enqueue('four')

    expect(queue.data).toEqual(['one', 'two', 'three', 'four'])
  })

  it(`Removes items from the front of the queue`, () => {
    queue.enqueue('three')
    queue.enqueue('four')

    expect(queue.dequeue()).toBe('one')
    expect(queue.dequeue()).toBe('two')
    expect(queue.dequeue()).toBe('three')
    expect(queue.size()).toBe(1)
  })
})