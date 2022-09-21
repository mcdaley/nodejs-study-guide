#!/usr/bin/env node
//-----------------------------------------------------------------------------
// javascript/arrays.js
//-----------------------------------------------------------------------------

/**
 * Create functions for the following:
 * [x] - findIndexOf(), includes(),  
 * [x] - append item to an array
 * [x] - remove last item from array
 * [x] - remove first item from array
 * [x] - add first item to array
 * [x]- remove a single item from an array
 * [x] - remove multiple items from array, splice()
 * [x] - replace multiple items from array
 * [x] - merge arrays, concat()
 * - sort()
 * - iterate over an array
 * [x] - forEach()
 * [x] - map()
 * [x] - filter()
 * [x] - reduce()
 * - copy array
 * - group items
 * - 2 dimensional arrays
 */

const test = (value, expected) => {
  if(value === expected) {
    console.log(`[INFO] Value = ${value} equals Expected = ${expected}`)
  }
  else {
    console.log(`[WARN] Value = ${value} NOT equal to Expected = ${expected}`)
  }
}

/**
 * Exampled for array methods findIndex, find, includes
 */
const find = () => {
  console.log(`\n[INFO] Array.findIndex, Array.find, & Array.includes`)
  let arr = [5, 12, 8, 130, 44]
  //* let arr = ['Mustang', 'Firebird', 'Corvette', 'Probe', 'Eldorado']

  // findIndex() returns index of array of 1st element that matched criteria
  const isLargeNumber = (element) => element > 13
  const index         = arr.findIndex(isLargeNumber)
  test(index, 3)

  // find() returns the 1st element that matches test
  const element = arr.find( (element) => element > 13)
  test(element, 130)

  // includes() determines if array includes a certain value
  test(arr.includes(12), true)
  test(arr.includes(999), false)
}

/**
 * Test adding items to the front and end of an array
 */
const append = () => {
  console.log(`\n[INFO] Array.unshift & Array.push`)
  let arr = ['Mustang', 'Firebird', 'Corvette', 'Probe', 'Eldorado']

  // Add item to beginning of array
  arr.unshift('Forrester')
  test(arr[0], 'Forrester')

  // Add item to end of array
  arr.push('Outback')
  test(arr[arr.length - 1], 'Outback')
}

/**
 * Test removing items from front and end of an array
 */
const remove = () => {
  console.log(`\n[INFO] Array.shift & Array.pop`)
  let arr = ['Mustang', 'Firebird', 'Corvette', 'Probe', 'Eldorado']

  // Remove item from front of array
  let front = arr.shift()
  test(front, 'Mustang')
  test(arr[0], 'Firebird')

  // Remove last item of array
  let last = arr.pop()
  test(last, 'Eldorado')
  test(arr[arr.length - 1], 'Probe')
}

/**
 * Test remove, replace, and add items to an array
 */
const splice = () => {
  console.log(`\n[INFO] Array.splice`)
  let months = ['Jan', 'Mar', 'Apr', 'Bad', 'Bad', 'Sep']

  // Add Feb at index 1
  months.splice(1, 0, 'Feb')
  test(months[1], 'Feb')

  // Replace 1st 'Bad' w/ 'May'
  months.splice(4, 1, 'May')
  test(months[4], 'May')

  // Replace 2nd 'Bad' w/ 'May', 'Jun', 'Jul', 'Aug'
  months.splice(5, 1, 'Jun', 'Jul', 'Aug')
  test(months.length, 9)
  test(months[7],'Aug' )
}

/**
 * Use concat() to merge 2 arrays
 */
const merge = () => {
  console.log(`\n[INFO] Array.concat`)
  const arr1 = ['a', 'b', 'c', 'd']
  const arr2 = ['d', 'e', 'f']

  const result = arr1.concat(arr2)
  test(result.length, arr1.length + arr2.length)
}

/**
 * Array.forEach()
 */
const forEach = () => {
  console.log(`\n[INFO] Array.forEach()`)
  let arr = [1, 2, 3, 4, 5]

  // Create array w/ double the values
  let result = []
  arr.forEach( (element) => result.push(element * 2))
  test(arr[0], 1)
  test(arr[3], 4)
  test(result[0], 2)
  test(result[3], 8)

  // Modify array by doubling value of each element
  arr.forEach( (element, index) => arr[index] = element * 2)
  test(arr[0], 2)
  test(arr[3], 8)
}

/**
 * Array.map()
 */
const map = () => {
  console.log(`\n[INFO] Array.map()`)
  const arr = [1, 3, 5, 7, 9]
  const result = arr.map( (element) => element *2 )
  test(result[0], 2)
  test(result[2], 10)
  test(result[4], 18)
}

/**
 * Array.filter()
 */
const filter = () => {
  console.log(`\n[INFO] Array.filter()`)
  const arr = [5, 12, 8, 130, 44]

  const result = arr.filter( (element) => element >= 13)
  test(result.length, 2)
  test(result[0], 130)
  test(result[1], 44)
}

/**
 * Array.reduce()
 */
const reduce = () => {
  console.log(`[INFO] Array.reduce()`)
  const arr = [1, 2, 3, 4, 5]

  const sum   = (previousValue, currentValue) => previousValue + currentValue
  let   total = arr.reduce( sum )

  test(total, 15)

  const initialValue = 10
  total = arr.reduce( sum, initialValue)
  test(total, 25)
}

/**
 * main()
 */
console.log(
  "# -----------" + "\n" +
  "# Array Tests" + "\n" +
  "# -----------"
)
find()
append()
remove()
splice()
merge()
forEach()
map()
filter()
reduce()