function hash(key) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < key.length; i += 1) {
    hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.tableSize;
  }

  return hashCode;
}

class HashMap {
  map = new Array(97);

  set(key, value) {
    const index = this.hash(key)
    if(storage[index] === undefined){
      storage[index] = [[key, value]];
    } else {
      let inserted = false;
      for(let i = 0; i < storage[index].length; i += 1) {
        if(storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (!inserted)  {
        storage[index].push([key, value]);
      }
    }
  }
}

const hm = new HashMap();

console.log(hm.hash('cole'));
console.log(hm.hash('matt'));
