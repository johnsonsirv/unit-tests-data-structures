//prime number as the size of the array


function hash_function(n) {
  return Math.abs(n) % 11
}

class HashTable{
  constructor(size = 53){
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
    let index = this.r_hash(key)
    if(!this.keyMap[index]){
      this.keyMap[index] = []
    }
    this.keyMap[index].push([key, value])
  }

  get(key){
    let index = this.r_hash(key)
    if(this.keyMap[index]){
      for(let i = 0; i < this.keyMap[index].length; i++){
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined
  }

  r_hash(key){
    return Math.abs(key) % 11
  }


}

let ht = new HashTable(17)
ht.set("singer", "jamie")
ht.set("gamer", "julius")
ht.set("footballer", "abbey")
ht.set("golfer", "ifeanyi")
ht.set("geek", "victor")
