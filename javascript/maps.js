#!/usr/bin/env node
//-----------------------------------------------------------------------------
// javascript/maps.js
//-----------------------------------------------------------------------------

/**
 * main()
 */
// Initialize Map
console.log(`[TEST] Initialize Map w/ [][]`)
let map = new Map([
  ['0', 'labradoodle'],
  ['1', 'poodle'],
])

// Add data to Map
console.log(`[TEST] Add key/value pairs to Map`)
map.set('2', 'corgi')
map.set('3', 'mutt')

// Verify Map has data
console.log(`[TEST] Verify Map has keys`)
console.log(`[INFO] map has key = \'1\' => `, map.has('1') ? true : false)
console.log(`[INFO] map has key = \'2\' => `, map.has('2') ? true : false)
console.log(`[INFO] map does NOT have = \'77\' => `, !map.has('77') ? true : false)

// Get record from Map
console.log(`[TEST] Get values from Map`)
console.log(`[INFO] value for key = \'1\' => `, map.get('1'))
console.log(`[INFO] value for key = \'3\' => `, map.get('3'))

// Remove data from Map
console.log(`[TEST] Remove key/value pairs from Map`)
console.log(`[INFO] map delete key    = \'1\' => `, map.delete('1'))
console.log(`[INFO] map does NOT have = \'1\' => `, !map.has('1') ? true : false)

// Iterate with forEach
console.log(`[TEST] Iterate through map w/ "forEach"`)
map.forEach( (value, key) => {
  console.log(`[INFO] key= ${key}, value= ${value}`)
});

// Iterate with "for...of"
console.log(`[TEST] Iterate through map w/ "for...of"`)
for( const [key, value] of map) {
  console.log(`[INFO] key= ${key}, value= ${value}`)
}

// Clear data from map
console.log(`[TEST] Clear data from map`)
console.log(`[INFO] Map size = ${map.size}, after clear size= ${map.clear()}`)