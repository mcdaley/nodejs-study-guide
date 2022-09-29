#!/usr/bin/env node
//-----------------------------------------------------------------------------
// algorithms/array-chunk.js
//-----------------------------------------------------------------------------

const chunk = (arr, size) => {
  console.log(`[DEBUG] Array = `, arr)
  let chunks = []
  if(size >= arr.length) {
    chunks.push(arr)
    return chunks
  }

  let index = 0
  while(index < arr.length) {
    let data = arr.slice(index, index + size)
    chunks.push(data)

    index += size
  }
  return chunks
}

/**
 * main()
 */
let result = {}

result = chunk([1, 2, 3, 4], 2)
console.log(`[INFO] Chunks = `, result)

result = chunk([1, 2, 3, 4], 3)
console.log(`[INFO] Chunks = `, result)

result = chunk([1, 2, 3, 4], 5)
console.log(`[INFO] Chunks = `, result)