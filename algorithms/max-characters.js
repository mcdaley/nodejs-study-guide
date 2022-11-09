#!/usr/bin/env node
//-----------------------------------------------------------------------------
// algorithms/max-characters.js
//-----------------------------------------------------------------------------

const maxCharacters = (str) => {
  let totals   = new Map()
  let cleaned  = str.toLowerCase().replace(/[^a-z]/g, '')
  let maxChar  = undefined
  let maxCount = 0

  for(let i = 0; i < cleaned.length; i++) {
    const char = cleaned[i]
    if(!totals.has(char)) {
      totals.set(char, 1)

      if(maxCount === 0) {
        maxChar  = char
        maxCount = 1
      }
    }
    else {
      const count = totals.get(char) + 1
      totals.set(char, count)

      if(count > maxCount) {
        maxCount = count
        maxChar  = char
      }
    }
  }
  console.log(`[INFO] \"${str}\", max char = ${maxChar}, max count = ${maxCount}`)

  return maxChar
}

/**
 * main()
 */
const str  = "Hello World!"
const char = maxCharacters(str)
console.log(`[INFO] Max character = ${char}`)

// Export maxCharacters
module.exports = maxCharacters