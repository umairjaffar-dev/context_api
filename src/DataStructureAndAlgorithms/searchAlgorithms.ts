// Binary Search: find the index of element "t" of an array "n",
// export function indexIs(n: Array<number>, t: number) {
//   return n.findIndex((value) => value === t);
// }
export function linearSearch(n: Array<number>, t: number) {
  for (let i = 0; i < n.length; i++) {
    if (n[i] === t) {
      return i;
    }
  }
  return -1;
} // big-O - O(n)

// Binary Search:
export function binarySearch(arr: Array<number>, target: number) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  while (leftIndex <= rightIndex) {
    if (arr[middleIndex] === target) {
      return middleIndex;
    }

    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
} // Big-O __ O(logn)

function search(
  arr: Array<number>,
  target: number,
  leftIndex: number,
  rightIndex: number
) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (target === arr[middleIndex]) {
    return middleIndex;
  }

  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}

export function recursiveBinarySearch(arr: Array<number>, target: number) {
  return search(arr, target, 0, arr.length - 1);
} // Big-O - O(logn)
