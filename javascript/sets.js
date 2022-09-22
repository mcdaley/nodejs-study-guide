#!/usr/bin/env node
//-----------------------------------------------------------------------------
// javascript/arrays.js
//-----------------------------------------------------------------------------

const print = (set) => {
  let values = []
  for(item of set.values()) {
    values.push(item)
  }
  console.log(`[INFO] Set = `, values.join(', '))
}

/**
 * main()
 */
let data = [ 10, 8, 6, 4, 2 ]
let set  = new Set()

// Add data to the set
data.forEach( (element) => set.add(element))
print(set)

// Check if set has data
console.log(`[INFO] Set has 8 = `, set.has(8) ? true : false)
console.log(`[INFO] Set has 7 = `, set.has(7) ? true : false)

// Remove element from set
console.log(`[INFO] Remove 8 and 6 from set`)
set.delete(8)
set.delete(6)
console.log(`[INFO] Set has 8 = `, set.has(8) ? true : false)
print(set)

// Convert set to array
const arr1 = Array.from(set)
console.log(`[INFO] Convert set to array = `, arr1)

// Convert array to a set
const  arr2 = [1, 3, 5, 7, 9]
const  set2 = new Set(arr2)
console.log(`[INFO] Convert array = [${arr2}] to set`)
print(set2)

// Iterate w/ forEach
console.log(`[INFO] Iterate through set w/ forEach`)
let arr3 = []
set2.forEach( (value) => arr3.push(value))
console.log(`[INFO] Set.forEach = `, arr3.join(', '))

// Iterate w/ "for...of"
console.log(`[INFO] Iterate through set w/ "for...of`)
arr3 = []
for(const element of set2) {
  arr3.push(element)
}
console.log(`[INFO] Set.forEach = `, arr3.join(', '))
