#!/usr/bin/env node
//-----------------------------------------------------------------------------
// algorithms/reverse-words.js
//-----------------------------------------------------------------------------

/**
 * Reverse every word in a sentence.
 */
const reverseWords = (sentence) => {
  let words = sentence.split(/\s+/)

  let reversed = words.map( (word) => {
    return word.split('').reverse().join('')
  })
  
  return reversed.join(' ')
}

/**
 * main()
 */
let result
let sentence = 'I love JavaScript!'

result = reverseWords(sentence)
console.log(`[INFO] Reversed = `, result)