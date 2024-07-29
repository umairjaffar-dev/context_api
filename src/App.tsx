import { odd } from "./DataStructureAndAlgorithms/arrays";
import {
  factResult,
  fibnocciSequenceResult,
  isPowerofTwoResult,
  isPrimeNumberResult1,
  isPrimeNumberResult2,
  isPrimeNumberResult3,
} from "./DataStructureAndAlgorithms/mathsAlgorithms/fibonacciSequence";
import Home from "./pages/Home";

const App = () => {
  // // 1) JS Objects:
  // console.log({ keys, values, entries });

  // // 2) Arrays:
  // console.log({ odd });

  //  3) Fibonacci Sequence:
  console.log({ fibnocciSequenceResult, factResult, isPrimeNumberResult1, isPowerofTwoResult });

  return (
    <div>
      <Home />
      <div className="bg-gray-900 text-white h-full">Main Component</div>
    </div>
  );
};

export default App;
