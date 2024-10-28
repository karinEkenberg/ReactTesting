// src/components/Box.jsx
import { useState } from "react";

const Box = () => {
  const [boxes, setBoxes] = useState([]); // För att hålla reda på rutorna

  const addBox = () => {
    setBoxes((prevBoxes) => [...prevBoxes, {}]); // Lägger till en ny tom ruta
  };

  return (
    <section id="add-a-box" className="tallscreen:section-min-height py-52">
      <div className="p-4">
        <div className="mb-4">
          <button
            onClick={addBox}
            className="bg-purple-400 text-white p-2 rounded"
          >
            Add a Box
          </button>
        </div>
        <div className="flex flex-col space-y-2 font-mono">
          {boxes.map((_, index) => (
            <div
              key={index}
              className="bg-rose-400 p-4 rounded shadow w-20 mx-auto"
            >
              Box {index + 1}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Box;
