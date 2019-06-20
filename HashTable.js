//prime number as the size of the array


function hash_function(n) {
  return Math.abs(n) % 11
}

class HashTable{
  constructor(size = 17){
    this.keyMap = new Array(size)
  }

  hash(key) {
    let total = 0
    const WEIRD_PRIME = 31
    for (let i =0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length
    }
    return total
  }

  set(key, value){
    let index = this.hash(key)
    if(!this.keyMap[index]){
      this.keyMap[index] = []
    }
    this.keyMap[index].push([key, value])
  }
}