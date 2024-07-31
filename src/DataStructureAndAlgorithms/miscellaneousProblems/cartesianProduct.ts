// Cartesian  Product:
function cartesianProduct() {
  let setA = [1, 2];
  let setB = [3, 4, 5];
  let arr = [];

  for (let i = 0; i <= setA.length - 1; i++) {
    for (let j = 0; j < setB.length; j++) {
      arr.push([setA[i], setB[j]]);
    }
  }
  console.log("Product", arr); //[ [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ] ]
} // time complexity is O(mn) product of arr1 and arr2.

cartesianProduct();

// Climbing Staircase
function climbingStairCase(n: number) {
  let noOfWays = [1, 2];
  for (let i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }
  return noOfWays[n - 1];
}

console.log(climbingStairCase(1)); // 1
console.log(climbingStairCase(2)); // 2
console.log(climbingStairCase(3)); // 3
console.log(climbingStairCase(4)); // 5
console.log(climbingStairCase(5)); // 8
