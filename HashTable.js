function hash(key, arrayLength) {
  let total = 0
  for (let char of key) {
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLength
  }
  return total
}

function hash_function(n) {
  return Math.abs(n) % 11
}