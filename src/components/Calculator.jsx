// src/components/Calculator.jsx
import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState(""); // För att hålla reda på användarens inmatning
  const [result, setResult] = useState(null); // För att hålla reda på resultatet

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value); // Lägg till värdet till input
  };

  const calculateResult = () => {
    try {
      // Använd eval för att beräkna resultatet (var försiktig med eval i verkliga applikationer)
      const evalResult = eval(input);
      setResult(evalResult);
    } catch (error) {
      setResult("Fel"); // Hantera felaktiga beräkningar
    }
  };

  const clearInput = () => {
    setInput("");
    setResult(null);
  };

  return (
    <div className="p-4 bg-amber-300 rounded shadow-md w-80 mx-auto mt-10 mb-10">
      <h2 className="text-2xl">Calculator</h2>
      <div className="my-2">
        <input
          type="text"
          value={input}
          readOnly
          className="border p-2 w-full text-right rounded"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        <button
          onClick={() => handleButtonClick("1")}
          className="bg-emerald-300 text-black rounded p-2"
        >
          1
        </button>
        <button
          onClick={() => handleButtonClick("2")}
          className="bg-emerald-300 text-black rounded p-2"
        >
          2
        </button>
        <button
          onClick={() => handleButtonClick("3")}
          className="bg-emerald-300 text-black rounded p-2"
        >
          3
        </button>
        <button
          onClick={() => handleButtonClick("+")}
          className="bg-rose-500 text-white p-2 rounded"
        >
          +
        </button>

        <button
          onClick={() => handleButtonClick("4")}
          className="bg-emerald-300 text-black rounded p-2"
        >
          4
        </button>
        <button
          onClick={() => handleButtonClick("5")}
          className="bg-emerald-300 text-black rounded p-2"
        >
          5
        </button>
        <button
          onClick={() => handleButtonClick("6")}
          className="bg-emerald-300 text-black rounded p-2"
        >
          6
        </button>
        <button
          onClick={() => handleButtonClick("-")}
          className="bg-rose-500 text-white p-2 rounded"
        >
          -
        </button>

        <button
          onClick={() => handleButtonClick("7")}
          className="bg-emerald-300 text-black rounded p-2"
        >
          7
        </button>
        <button
          onClick={() => handleButtonClick("8")}
          className="bg-emerald-300 text-black rounded p-2"
        >
          8
        </button>
        <button
          onClick={() => handleButtonClick("9")}
          className="bg-emerald-300 text-black rounded p-2"
        >
          9
        </button>
        <button
          onClick={() => handleButtonClick("*")}
          className="bg-rose-500 text-white p-2 rounded"
        >
          *
        </button>

        <button
          onClick={clearInput}
          className="bg-red-500 text-white p-2 col-span-2 rounded"
        >
          C
        </button>
        <button
          onClick={() => handleButtonClick("0")}
          className="bg-emerald-300 text-black rounded p-2"
        >
          0
        </button>
        <button
          onClick={calculateResult}
          className="bg-emerald-500 text-white p-2 rounded"
        >
          =
        </button>
        <button
          onClick={() => handleButtonClick("/")}
          className="bg-rose-500 text-white p-2 rounded"
        >
          /
        </button>
      </div>
      {result !== null && <h3 className="mt-4 text-xl">Result: {result}</h3>}
    </div>
  );
};

export default Calculator;
