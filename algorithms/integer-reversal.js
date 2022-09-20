#!/usr/bin/env node
//-----------------------------------------------------------------------------
// algorithms/integer-reversal.js
//-----------------------------------------------------------------------------

/**
 * Reverse an integer.
 */
const reverse = (integer) => {
  const  result = parseInt(
    integer.toString().split('').reverse().join('')
  ) * Math.sign(integer)
  
  return result
}

/**
 * Test the reverse functoin
 */
const test = (integer, answer) => {
  const result = reverse(integer)

  if(result === answer) {
    console.log(`[INFO] Reverse of \"${integer}\" = ${answer}`)
  }
  else {
    console.log(`[WARN] Reverse of \"${integer}\"  is NOT ${answer}`)
  }
}

/**
 * main()
 */
const int1 = 1234
test(int1, 4321)

const int2 = -1200
test(int2, -21)