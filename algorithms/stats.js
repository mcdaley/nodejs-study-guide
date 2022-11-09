#!/usr/bin/env node
//-----------------------------------------------------------------------------
// algorithms/stats.js
//-----------------------------------------------------------------------------

/**
 * Calculate the average/mean for an array of numbers.
 */
const mean = (data) => {
  const  sum = (previousValue, currentValue) => previousValue + currentValue
  const  avg = data.reduce( sum ) / data.length

  return avg
}

/**
 * Calculate the median for an array of numbers.
 */
const median = (data) => {
  let median

  data.sort( compare )

  if(data.length % 2 === 1) {
    const index = Math.floor(data.length / 2)
    median = data[index]
  }
  else {
    const x = data.length / 2
    const y = x - 1
    median = mean([data[y], data[x]])
  }
  return median
}

/**
 * Calculate the mode for an array of numbers. The mode is the number(s) that
 * appear most frequently in the array. If all the numbers appear the same 
 * amount then return an empty array.
 */
const mode = (data) => {
  let max  = 0
  let hash = new Map()
  let mode = []

  data.forEach( (element) => {
    if(!hash.has(element)) {
      hash.set(element, 1)
      
      if(max < 1) { max = 1 }
    }
    else {
      let count  = hash.get(element)
      count     += 1
      hash.set(element, count)

      if(max < count) { max = count }
    }
  })

  for( const [key, value] of hash) {
    if(value === max) {
      mode.push(key)
    }
  }

  return mode.length === hash.size ? [] : mode
}

/**
 * Compare function to sort array of numbers in ascending order
 */
const compare = (a, b) => {
  if(a > b) {
    return 1
  }
  else if(a < b) {
    return -1
  }
  return 0
}

/**
 * main()
 */
const stat1 = [1, 2, 3, 4, 4, 5, 5]
const stat2 = [1, 1, 2, 2, 3, 3, 4, 4]

console.log(`[info] mean for stat1 = `, mean(stat1))
console.log(`[info] mean for stat2 = `, mean(stat2))

console.log(`[info] median for stat1 = `, median(stat1))
console.log(`[info] median for stat2 = `, median(stat2))

console.log(`[info] mode for stat1 = `, mode(stat1))
console.log(`[info] mode for stat2 = `, mode(stat2))

// Export the mean, median, and mode
module.exports = mean
