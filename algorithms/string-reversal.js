#!/usr/bin/env node
//-----------------------------------------------------------------------------
// algorithms/string-reversal.js
//-----------------------------------------------------------------------------

/**
 * @function reverse
 * @param    {*} string
 */
const reverse = (string) => {
  const  result = string.split('').reverse().join('')
  return result
}

/**
 * main()
 */
const string = 'Hello World!'
const result = reverse(string)

if(result === '!dlroW olleH') {
  console.log(`Reverse of ${string} = ${result}`)
}
else {
  console.log(`Error: result= ${result}`)
}