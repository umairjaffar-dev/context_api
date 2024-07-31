console.log('Insertion Sort')

function insertionSort(arr : Array<number>){
    for(let i=1; i<arr.length; i++){
    // number to sort from array;
      let numberToSort = arr[i]
    // sorted array elements;
      let j = i - 1
      while(j >= 0 && arr[j] > numberToSort){
          arr[j + 1] = arr[j]
          j = j - 1
      }
      arr[j+1] = numberToSort
    }
} // Big-O - O(n^2) because of nested loops.

let arr = [-6, 20, 8, -2, 4] // Sort this array using Insertion Sort.
insertionSort(arr)
console.log("sorted Array", arr)