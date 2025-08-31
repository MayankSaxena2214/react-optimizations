import React, { useState } from 'react'
// import './carusel.css' // custom css

const Carusel2 = () => {
  const items = ["Item1", "Item2", "Item3", "Item4", "Item5"];

  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(2);
  const [curr, setCurr] = useState(1);

  const getRandomBg = (i) => {
    const colors = ["#ff6666", "#66ccff", "#99ff99", "#ffcc66", "#cc99ff"];
    return colors[i % colors.length];
  };

  const handleChange = () => {
    setPrev(curr);
    setCurr(next);
    setNext((next + 1) % items.length);
  };

  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="w-full flex items-center gap-10 justify-between text-white">
        <div
          key={`prev-${prev}`}
          className="card fade"
          style={{ backgroundColor: getRandomBg(prev) }}
        >
          {items[prev]}
        </div>

        <div
          key={`curr-${curr}`}
          className="card active scale-up"
          style={{ backgroundColor: getRandomBg(curr) }}
        >
          {items[curr]}
        </div>

        <div
          key={`next-${next}`}
          className="card fade"
          style={{ backgroundColor: getRandomBg(next) }}
        >
          {items[next]}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <div
          className="px-5 py-2 bg-gray-200 rounded-full cursor-pointer"
          onClick={handleChange}
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default Carusel2;
