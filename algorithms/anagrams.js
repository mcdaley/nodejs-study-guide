#!/usr/bin/env node
//-----------------------------------------------------------------------------
// algorithms/anagrams.js
//-----------------------------------------------------------------------------

const anagrams = (str1, str2) => {
  const cleanedStr1 = str1.toLowerCase().replace(/[^a-z]/gi, '').split('').sort().join('')
  const cleanedStr2 = str2.toLowerCase().replace(/[^a-z]/gi, '').split('').sort().join('')

  return cleanedStr1 === cleanedStr2 ? true : false
}

/**
 * main()
 */
let str1   = "hello world"
let str2   = "world hello"
let result = anagrams(str1, str2)
console.log(`[INFO] anagrams = ${result}`)

str1   = "hellow world"
str2   = "hello there"
result = anagrams(str1, str2)
console.log(`[INFO] anagrams = ${result}`)