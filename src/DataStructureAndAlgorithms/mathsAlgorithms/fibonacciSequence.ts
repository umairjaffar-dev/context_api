/** Fibonacci Sequence:
 * In maths the fibonacci sequence is a series of numbers in which each number is the sum of the two preceding numbers.
 * The first two numbers are 0 and 1. The next number is the sum of the previous two numbers.
 */

function fibnocciSequence(n: number) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    // fib.push(fib[i - 1] + fib[i - 2]);
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
export const fibnocciSequenceResult = fibnocciSequence(8); // [0,1,1,2,3,5]

function factOfNumber(n: number) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact = fact * i;
  }

  return fact;
}
export const factResult = factOfNumber(8);

function isPrimeNumber(n: number) {
  if (n % 2 !== 0 && n > 1) {
    return `${n} is a prime number`;
  } else {
    return `${n} is not a prime number`;
  }
} // its time complexity is O(1) because by increasing the input the execution time remains the same
export const isPrimeNumberResult1 = isPrimeNumber(8);
export const isPrimeNumberResult2 = isPrimeNumber(5);
export const isPrimeNumberResult3 = isPrimeNumber(4);

// function isPowerofTwo(n: number) {
//   if (n < 1) return false;
//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false;
//     }
//     n = n / 2;
//   } 
//   return true;
// } // time complexity is O(log(n))
function isPowerofTwoBitWise(n: number) {
  if (n < 1) return false;
  return (n & (n - 1)) === 0;
} // time complexity is O(1)
// both the above methods return the same output.
export const isPowerofTwoResult = isPowerofTwoBitWise(4); 
