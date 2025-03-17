import LinkedList from "./linkedList.js";

class HashMap {
  constructor(loadFactor = .75, capacity = 16) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.buckets = Array.from({ length: capacity }).map(() => new LinkedList());
    this.keyMap = [];
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i));
    }
    return hashCode % this.capacity;
  }

  set(key, value){
    const index = this.hash(key);
    if (this.buckets[index]){
        this.buckets[index].pop();
    }
    this.buckets[index].append(value);
    this.keyMap.push(key);
  }

  get(key){
    const index = this.hash(key);
    if(this.buckets[index]){
        return this.buckets[index].at(0);
    } else return null;
  }

  has(key){
    return this.get(key) ? true : false;
  }

  remove(key){
    if(this.has(key)){
        let index = this.hash(key);
        this.buckets[index].pop();
        this.keyMap[key] = '';
        return true;
    } else return false;
  }

  length(){
    let s = 0;
    this.buckets.forEach((bucket) => s+= bucket.size());
    return s;
  }

  clear(){
    this.buckets.forEach((bucket) => bucket.pop());
    this.keyMap = [];
  }

  keys(){
    return this.keyMap;
  }

  values(){
    const r = []
    this.keyMap.forEach(key => {
        r.push(this.get(key));
    });
    return r;
  }

  entries(){
    const r = [];
    const keys = this.keys();
    keys.forEach((key) =>{
        r.push([key, this.get(key).data]);
    })
    return r;
  }
}

const test = new HashMap() 
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
console.log(test.entries());
