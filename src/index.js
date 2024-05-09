class HashMap {
  constructor() {
    this.tableSize = 2;
    this.loadFactor = 0.75;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i += 1) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.tableSize;
    }

    return hashCode;
  }
}

const hm = new HashMap();

console.log(hm.hash('cole'));
console.log(hm.hash('matt'));
