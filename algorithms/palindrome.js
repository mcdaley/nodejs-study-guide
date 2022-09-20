#!/usr/bin/env node
//-----------------------------------------------------------------------------
// algorithms/palindrome.js
//-----------------------------------------------------------------------------

/**
 * Return true if the string is a palindrome. Need to convert the string 
 * to lowercase, remove all non-alphabetic characters, remove all spaces,
 * and reverse the string.
 * 
 * @param {*} string 
 */
const palindrome = (string) => {
  const  cleaned = string.toLowerCase().replace(/[^a-z]/gi, '')
  const  reverse = cleaned.split('').reverse().join('')
  
  return reverse === cleaned ? true : false
}

/**
 * Helper to test the palindrome function.
 */
const test = (string) => {
  if(palindrome(string)) {
    console.log(`[INFO] \"${string}\" is a palindrome`)
  }
  else {
    console.log(`[WARN] \"${string}\" is NOT a palindrome`)
  }
}

/**
 * main
 */

// Palindrome
const str1 = 'Cigar? Toss it in a can. It is so tragic'
test(str1)

// Not a Palindrome
const str2 = 'sit ad est love'
test(str2)