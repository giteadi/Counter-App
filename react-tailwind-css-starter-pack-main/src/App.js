import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function decreaseHandler() {
    setCount(count - 1);
  }

  function increaseHandler() {
    setCount(count + 1);
  }

  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl">
        <div className="text-3xl font-semibold text-gray-800 mb-4">
          Increment & Decrement
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            onClick={decreaseHandler}
          >
            -
          </button>
          <div className="text-2xl font-semibold">{count}</div>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            onClick={increaseHandler}
          >
            +
          </button>
        </div>
        <button
          className="block mx-auto mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={resetHandler}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
