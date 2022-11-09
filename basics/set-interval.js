#!/usr/bin/env node
//-----------------------------------------------------------------------------
// basics/set-interval.js
//-----------------------------------------------------------------------------

const interval = 2000
let   count    = 1

const timer = setInterval( () => {
  console.log(`[info] Total time = ${count++ * interval/1000}`)
  if(count === 5) {
    console.log(`[info] Clear the timer`)
    clearInterval(timer)
  }
}, interval)