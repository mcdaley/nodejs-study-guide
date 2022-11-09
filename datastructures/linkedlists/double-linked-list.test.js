//-----------------------------------------------------------------------------
// datastructures/double-linked-list.test.js
//-----------------------------------------------------------------------------
const DoubleLinkedList = require('./double-linked-list')

describe(`DoubleLinkedList`, () => {
  let list

  beforeEach( () => {
    list = new DoubleLinkedList()
    list.addToHead('one')
    list.addToHead('two')
  })

  it(`Adds item to the front of the list`, () => {
    list.addToHead('three')
    expect(list.head.element).toBe('three')
    expect(list.tail.element).toBe('one')
    expect(list.length()).toBe(3)

    list.addToHead(4)
    expect(list.head.element).toBe(4)
    expect(list.tail.element).toBe('one')
    expect(list.length()).toBe(4)
  })

  it(`Adds item to the rear of the list`, () => {
    list.addToRear('three')
    expect(list.head.element).toBe('two')
    expect(list.tail.element).toBe('three')
    expect(list.length()).toBe(3)

    list.addToRear(4)
    expect(list.head.element).toBe('two')
    expect(list.tail.element).toBe(4)
    expect(list.length()).toBe(4)
  })

  it(`Removes item from the front of the list`, () => {
    expect(list.removeHead()).toBe('two')
    expect(list.removeHead()).toBe('one')
    expect(list.length()).toBe(0)
    expect(list.removeHead()).toBeUndefined()
  })

  it(`Removes item from the rear of the list`, () => {
    list.addToRear('three')
    expect(list.removeTail()).toBe('three')
    expect(list.removeTail()).toBe('one')
    expect(list.length()).toBe(1)
  })

  it(`Removes an item from the list`, () => {
    list.addToRear('three')
    list.addToRear('four')
    list.addToRear('five')

    expect(list.remove('four')).toBe(true)
    expect(list.length()).toBe(4)
  })

  it(`Returns true if the list is empty`, () => {
    expect(list.isEmpty()).toBe(false)
    list.removeTail()
    list.removeTail()
    expect(list.isEmpty()).toBe(true)
  })

  it(`Clears the double linked list`, () => {
    list.clear()
    expect(list.head).toBeNull()
    expect(list.tail).toBeNull()
    expect(list.isEmpty()).toBe(true)
  })

  it(`Returns the list converted to a string`, () => {
    expect(list.toString()).toBe(`[two, one]`)
  })

  it(`Implements forEach loop`, () => {
    let numbers = new DoubleLinkedList()
    numbers.addToRear(1)
    numbers.addToRear(2)
    numbers.addToRear(3)

    let output = []
    numbers.forEach( (el) => output.push(2 * el) )
    expect(output).toEqual([2, 4, 6])
    expect(true).toBe(true)
  })
})