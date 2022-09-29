#!/usr/bin/env node
//-----------------------------------------------------------------------------
// algorithms/vowels.js
//-----------------------------------------------------------------------------

const vowels = (string) => {
  const  v = string.toLowerCase().replace(/[^aeiou]/gi, '')
  return v.length
}

const altVowels = (string) => {
  let count = 0
  let vowels = ['a', 'e', 'i', 'o', 'u']

  for(const char of string.toLowerCase()) {
    if(vowels.includes(char)) {
      count += 1
    }
  }
  return count
}

/**
 * main()
 */
let total = vowels("Hello World")
console.log(`[INFO] Vowels = ${total}`)

total = altVowels("Hello World")
console.log(`[INFO] Vowels = ${total}`)