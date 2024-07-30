type PERSONTYPE = {
  name: string;
  age: number;
  city: string;
  country: string;
  gender: string;
  height?: string;
};

const person: PERSONTYPE = {
  name: "John",
  age: 30,
  city: "New York",
  country: "USA",
  gender: "male",
};
person.height = "6 feet";
/** Objects ______ Big-O
 * if we add or remove properties from an object, it will take O(1) time, means time complaxcity is constant.
 * if I want to access a value from an object, it will take O(1) time, means time complaxcity is also constant.
 * if we want to search value from an object, it will take O(n) time, means time complaxcity is linear.
 */
export const keys = Object.keys(person); // return an array of keys from an object its time complexity is O(n) means linear.
export const values = Object.values(person); // return an array of values from an object its time complexity is O(n) means linear.
export const entries = Object.entries(person); // return an array of entries from an object its time complexity is O(n) means linear.

//** Time Complexcity: How does the runtime of the function grow as the size of the inputs grow?
/**
 * ___ Constant time complexity - O(1)
 * An algorithm is said to run in constant time. It means that as you increase the size of the input to the function
 * The execution time remains the same. No matter how many properties you have in the object it takes the same amount
 * of time to remove and insert a property.
 *
 * ___ Linear time complexity - O(n)
 * In linear time complexity The execution time of the function is directly proportional to the input size. the run
 * time of function grows as the input grows and we mark it as O(n).
 *
 * ___ Logarithmic time complexity - O(log(n))
 * function execute by half of input value.
 * 
 * ___ Quadratic time complexity - O(n^2)
 * ___ Cubic time complexity - O(n^3)
 * ___ Exponential time complexity - O(2^n)
 * ___ Factorial time complexity - O(n!)
 * ___ Prime number time complexity - O(sqrt(n))
 */
