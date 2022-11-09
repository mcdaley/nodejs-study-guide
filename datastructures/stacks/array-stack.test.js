//-----------------------------------------------------------------------------
// datastructures/array-stack.test.js
//-----------------------------------------------------------------------------
const ArrayStack = require('./array-stack')

describe(`Array Stack`, () => {
  let stack

  beforeEach( () => {
    stack = new ArrayStack()
    stack.push('one')
    stack.push('two')
  })

  it(`Push item on stack`, () => {
    stack.push('three')
    stack.push('four')

    expect(stack.data).toEqual(['one', 'two', 'three', 'four'])
  })

  it(`Pop item from stack`, () => {
    expect(stack.pop()).toBe('two')
    expect(stack.pop()).toBe('one')
    expect(stack.size()).toBe(0)
  })
})