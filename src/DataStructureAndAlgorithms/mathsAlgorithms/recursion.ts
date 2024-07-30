/**
 * Recursion : Recursion is a problem-solving technique in programming.
 * Recursion is a process in which a function calls itself.
 * Recursion and loops work in similar ways.Every recursive function you write has an alternative solution with a loop.
 */

//  Find fectorial of a number using recursion.
// Using Loop:

function factOfNumberUsingRecursiveMethod(n: number) {
  if (n === 0) return 1;
  let fact: number = n * factOfNumberUsingRecursiveMethod(n - 1);
  return fact;
} // Big-O = O(n) linear time complexity

console.log("Fact using Recursive:", factOfNumberUsingRecursiveMethod(5)); // 120

// Recursive solution of fibonacci Series: Incomplete
function fibnocciSequence(n: number) {
  let fib = [0, 1];
  if (n < 2) {
    console.log("n is less than 2");
    return fib;
  }
  // for (let i = 2; i < n; i++) {
  //   // fib.push(fib[i - 1] + fib[i - 2]);
  //   fib[i] = fib[i - 1] + fib[i - 2];
  // }

  let newValue = fib.length - 1 + (fib.length - 2);
  fib.push(newValue);
  console.log("n", n);
  fibnocciSequence(n - 1);
  return fib;
} // Exponential time complexity - O(2^n) i.e 8 => 64
console.log("fibonacci series using recursion:", fibnocciSequence(8));
