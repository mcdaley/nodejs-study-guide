//-----------------------------------------------------------------------------
// datastructures/sets/set.test.js
//-----------------------------------------------------------------------------
const Set = require('./set')

describe(`Set`, () => {
  let set

  beforeEach( ()=> {
    set = new Set()
    set.add(1)
    set.add(2)
  })

  it(`Add elements to a set`, () => {
    set.add(3)
    set.add(4)

    expect(set.values()).toEqual([1, 2, 3, 4])
    expect(set.size()).toBe(4)
  })

  it(`Returns true if element is in the set`, () => {
    expect(set.has(1)).toBe(true)
  })

  it(`Returns false if element is NOT in the set`, () => {
    expect(set.has(99)).toBe(false)
  })

  it(`Deletes an element from the set`, () => {
    expect(set.delete(1)).toBe(true)
    expect(set.size()).toBe(1)

    expect(set.delete(99)).toBe(false)
    expect(set.size()).toBe(1)
  })

  it(`Clears the elements in the set`, () => {
    set.clear()
    expect(set.items).toEqual({})
  })

  it(`Returns the values in the set`, () => {
    set.add(3)
    set.add(4)
    set.add(5)
    set.add(6)

    expect(set.values()).toEqual([1, 2, 3, 4, 5, 6])
    expect(set.size()).toBe(6)
  })

  it(`Returns the union of two sets`, () => {
    let otherSet = new Set()
    otherSet.add(2)
    otherSet.add(3)
    otherSet.add(4)

    let unionSet = set.union(otherSet)
    expect(unionSet.values()).toEqual([1, 2, 3, 4])
    expect(unionSet.size()).toBe(4)
  })

  it(`Returns the intersection of two sets`, () => {
    let otherSet = new Set()
    otherSet.add(2)
    otherSet.add(3)
    otherSet.add(4)

    let intersectionSet = set.intersection(otherSet)
    expect(intersectionSet.values()).toEqual([2])
    expect(intersectionSet.size()).toBe(1)
  })

  it(`Returns the difference of two sets`, () => {
    let otherSet = new Set()
    otherSet.add(2)
    otherSet.add(3)
    otherSet.add(4)

    let differenceSet = otherSet.difference(set)
    expect(differenceSet.values()).toEqual([3, 4])
    expect(differenceSet.size()).toBe(2)
  })

  it(`Checks if set is a subset`, () => {
    let otherSet = new Set()
    otherSet.add(1)
    otherSet.add(2)
    otherSet.add(3)
    otherSet.add(4)

    expect(set.isSubset(otherSet)).toBe(true)

    set.add(99)
    expect(set.isSubset(otherSet)).toBe(false)
  })

  it(`Checks if set is a subset`, () => {
    let otherSet = new Set()
    otherSet.add(1)
    otherSet.add(2)
    otherSet.add(3)
    otherSet.add(4)

    expect(set.isSubsetV2(otherSet)).toBe(true)

    set.add(99)
    expect(set.isSubsetV2(otherSet)).toBe(false)
  })
})