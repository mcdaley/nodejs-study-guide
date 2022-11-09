#!/usr/bin/env node
//-----------------------------------------------------------------------------
// basics/polyfill.js
//-----------------------------------------------------------------------------

/**
 * Polyfill the Array.map method
 */
Array.prototype.myMap = function(cb) {
  let arr = []
  for(let i = 0; i < this.length; i++) {
    arr.push( cb(this[i], i, this))
  }
  return arr
}

const arr = [1, 2, 3]
console.log(`[info] `, arr.myMap( (el) => el * 2))