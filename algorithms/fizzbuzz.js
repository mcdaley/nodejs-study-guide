#!/usr/bin/env node
//-----------------------------------------------------------------------------
// algorithms/fizzbuzz.js
//-----------------------------------------------------------------------------

/**
 * @function fizzBuzz
 * @param    {*} integer 
 */
const fizzBuzz = (number) => {
  let result = []
  for(let i = 1; i <= number; i++) {
    if(i % 6 === 0) {
      result.push(`Fizz Buzz`)
    }
    else if(i % 2 === 0) {
      result.push(`Fizz`)
    }
    else if(i % 3 === 0) {
      result.push(`Buzz`)
    }
    else {
      result.push(i)
    }
  }
  return result
}

/**
 * Test fizz buzz algorithm
 */
const test = (result, index, output) => {
  if(result[index] === output) {
    console.log(`[INFO] ${index} = ${output}`)
  }
  else {
    console.log(`[WARN] ${index} != ${output} instead = ${result[index]}`)
  }
}

/**
 * main
 */
const input  = 30
const result = fizzBuzz(input)

test(result, 0, 1)
test(result, 1, 'Fizz')
test(result, 2, 'Buzz')
test(result, 5, 'Fizz Buzz')
test(result, 6, 7)