// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Map In JavaScript");

//  create a map interface.
const map = new Map();

// Insert Item to map.
map.set('num1', '12')
map.set('num2', '13')
map.set('info',{
    name:"umair",
    age:24
})
map.set('education', {
    level:"Standered",
    degree:"BS(SE)"
})
map.set('address', {
    city:"Islamabad",
    Prov:"Punjab"
})

// access specific value from map.
console.log('mapValue', map.get('info'));
// check value is present in map
console.log('isValue', map.has('education'));
// delete value from map
console.log('deleteValue', map.delete('address'));
// check the size of map
console.log('size', map.size);

// iterate through a map
for (const [key, value] of map){
    console.log(`item ${key}: ${Object.entries(value)}`)
}
// iterate over map keys
for (const key of map.keys()){
    console.log(`key ${key}`)
}
// iterate over map values
for (const value of map.values()){
    console.log(`value ${value}`)
}
// Get Key/Values of Map
for (const elem of map.entries()){
    console.log(`elem : ${elem[0]}--${elem[1]}`)
}










