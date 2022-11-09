#!/usr/bin/env node
//-----------------------------------------------------------------------------
// basics/set-timeout.js
//-----------------------------------------------------------------------------

 const interval = 2000    // 2 seconds

 setTimeout( () => {
  console.log(`[info] Sleep ${interval/1000} seconds`)
 }, interval)