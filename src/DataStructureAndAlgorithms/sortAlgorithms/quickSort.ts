console.log("Quick Sort");
// Sort this array using Insertion Sort.

function quickSort(arr: Array<number>): Array<number> {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
let arr = [-6, 20, 8, -2, 4];

console.log("sorted Array", quickSort(arr));
