function hash(key, arrayLength) {
  let total = 0
  const WEIRD_PRIME = 0
  for (let i =0; i < Math.min(key.length, 100); i++) {
    let char = key[i]
    let value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrayLength
  }
  return total
}

function hash_function(n) {
  return Math.abs(n) % 11
}