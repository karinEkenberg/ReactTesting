// src/components/Counter.jsx
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <section id="counter" className="tallscreen:section-min-height py-52">
      <div className="flex flex-col items-center mt-10 mb-10">
        <h2 className="text-2xl">Counter: {count}</h2>
        <div className="mt-4">
          <button
            onClick={() => setCount(count + 1)}
            className="bg-emerald-500 text-white py-2 px-4 rounded mr-2"
          >
            Increace
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 text-white py-2 px-4 rounded"
          >
            Decreace
          </button>
          <button
            onClick={() => setCount(0)}
            className="bg-gray-500 text-white py-2 px-4 rounded ml-2"
          >
            Reset
          </button>
        </div>
      </div>
    </section>
  );
};

export default Counter;
