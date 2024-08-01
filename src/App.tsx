import { useEffect } from "react";
import Home from "./pages/Home";
import {
  binarySearch,
  linearSearch,
  recursiveBinarySearch,
} from "./DataStructureAndAlgorithms/searchAlgorithms";
import { bubbleSortResult } from "./DataStructureAndAlgorithms/sortAlgorithms/bubbleSort";
import { mergeSort } from "./DataStructureAndAlgorithms/sortAlgorithms/mergeSort";
import ArraysDataStructure from "./DataStructureAndAlgorithms/DataStructure/arraysDataStructure";

const App = () => {
  // // 1) JS Objects:
  // console.log({ keys, values, entries });

  // // 2) Arrays:
  // console.log({ odd });

  // //  3) Fibonacci Sequence:
  // console.log({
  //   fibnocciSequenceResult,
  //   factResult,
  //   isPrimeNumberResult1,
  //   isPowerofTwoResult,
  // });

  // // 4) Search Algorithms
  // console.log("index is", recursiveBinarySearch([-5, 2, 5, 20], 5)); // 2
  // console.log("index is", recursiveBinarySearch([-5, 2, 5, 20], 20)); // 3
  // console.log("index is", recursiveBinarySearch([-5, 2, 5, 20], 15)); // -1

  // 5) Sorting Algorithms
  // console.log("bubbleSortResult",bubbleSortResult);
  // console.log("mergeSortResult", mergeSort([-6, 20, 8, -2, 4]));
  return (
    <div>
      <Home />
      <div className="bg-gray-900 text-white h-full">
        <ArraysDataStructure />
      </div>
    </div>
  );
};

export default App;
