console.log("Merge Sort");

function merge(leftArr: Array<number>, rightArr: Array<number>): Array<number> {
  let sortedArray = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArray.push(leftArr.shift());
    } else {
      sortedArray.push(rightArr.shift());
    }
  }

  return [...sortedArray, ...leftArr, ...rightArr].filter(
    (item) => item !== undefined
  );
}
export function mergeSort(arr: Array<number>): Array<number> {
  if (arr.length < 2) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

let arr = [-6, 20, 8, -2, 4, 9, -8, 1];
console.log("MergeSortedArray", mergeSort(arr));
