// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");

const set = new Set([1,3,4,5]); // an empty set
set.add(2) // add value to set
console.log('size',set.size); // check size of the Set.
set.delete(2) // delete value from set
console.log("is:",set.has(2)) // check value is avaliable in set
// print the values of set.
console.log('values', set.values())

// print all the values of set using for of loop.
for(const item of set){
    console.log('item', item)
}

set.clear() // clear the set
console.log('clear the set', set)