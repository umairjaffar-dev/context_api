import { useEffect } from "react";

const ArraysDataStructure = () => {
  const arr = [1, 2, 3, 4, "umair", false];
  //   // 1) The constructor property returns the constructor function for the array.
  //   let constructor = arr.constructor;
  //   console.log("constructor", constructor);

  //   // 2) The copyWithin() method copies array elements from one position to another in the given array.
  //   let words = ["dell", "hp", "acer", "asus", "lenovo"];
  //   let copy = words.copyWithin(3, 0); // change index 3 with index 0.
  //   console.log("copy", copy);
  //   let copy1 = words.copyWithin(0, 2, 4); // replace elements from index-0 to index-2 with index-4
  //   console.log("copyWithin", copy1);

  // 3) The splice method is used to remove element from a specific index.
  function arraySpliceMethod() {
    arr.splice(
      4,
      1
    ); /** here 4 is index of the array and 1 is items length b/c i only remove one element i.e "umair" from array. */
    // console.log("remaining array:", arr);
  }

  // 4) The concat method of array return new array by merging two or more arrays.
  function arrayConcat() {
    let arr1: Array<number | string | boolean> = [1, 2, 3, 4, 5];
    let arr2 = [6, 7, 8, 9];
    let arr3 = ["umair", "ali", false];
    let newArr = arr1.concat(arr2, arr3, "Usman");
    // console.log("concat", newArr);
  }

  // 5) The entries() method returns a new Array Iterator object containing key/value pairs for each array index.
  function arrayEntries() {
    const alphabets = ["A", "B", "C"];
    const iterator = alphabets.entries();
    // console.log("entries", iterator);
    for (const entry of iterator) {
      //   console.log("item", entry);
    }
  }

  //   6) The every method check that the array every element pass the given test condition and return true if pass else false.
  function arrEvery() {
    const ageArray = [34, 23, 20, 26, 12];
    let check = ageArray.every((age) => age > 18); // this array check every element of array is grater then 18.
    // console.log("check", check); // not fullfil return false
  }

  // 7) The fill() method returns an array by filling all elements with a specified value.
  function arrayFill() {
    let fruits = ["Apple", "Banana", "Grape"];
    fruits.fill("Cherry"); // fill all the array element with cherry.
    // console.log("fruits", fruits);
  }

  // 8) The flat() method creates a new array by flattening a nested array up to the specified depth.
  function arrayFlat() {
    let numbers = [1, 2, [3, 4, [5, 6, [7, 8]]]];
    const numbersFlat = numbers.flat(2);
    // console.log("flat", numbersFlat);
  }
  // 9) The flatMap() method creates a new array by flattening a nested array up to the specified depth.
  function arrayFlatMap() {
    let numbers = [
      {
        pages: [
          {
            result: [1, 2, 3],
          },
          {
            result: [4, 5, 6],
          },
          {
            result: [7, 8, 9],
          },
        ],
      },
      {
        pages: [
          {
            result: [11, 12, 13],
          },
          {
            result: [14, 15, 16],
          },
          {
            result: [17, 18, 19],
          },
        ],
      },
    ];
    // console.log("flat", numbers[0].pages.flat(3)); // flat fail here b/c flat only work with array within array.

    const numbersFlatMap = numbers.flatMap((num) =>
      num.pages.flatMap((item) => item.result)
    );
    // console.log("flatMap", numbersFlatMap);
  }

  // forOf loop is used to iterate all the elements in array.
  function forOfLoop() {
    for (const item of arr) {
      //   console.log({ item });
    }
  }
  useEffect(() => {
    forOfLoop();
    // arrays Methods:
    arraySpliceMethod();
    arrayConcat();
    arrayEntries();
    arrEvery();
    arrayFill();
    arrayFlat();
    arrayFlatMap();
  }, []);

  return (
    <div>
      <p>Arrays Data Structure</p>
    </div>
  );
};

export default ArraysDataStructure;
