import React, { useState } from 'react';

function StateHandling() {
  const [counter, setCounter] = useState(20);
  const [bgColor, setBgColor] = useState('white');

  function increment() {
    setCounter(counter + 10);
  }

  function changeBGcolor() {
    const randomColor =
      '#' + Math.floor(Math.random() * 16777215).toString(16);

    setBgColor(randomColor);
  }

  return (
    <div style={{ backgroundColor: bgColor, padding: '30px' }}>
      <h2>Counter = {counter}</h2>

      <button onClick={increment}>
        Increase
      </button>

      <button onClick={() => setCounter(counter - 5)}>
        Decrease Counter
      </button>

      <button onClick={changeBGcolor}>
        Change BG Color
      </button>
    </div>
  );
}

export default StateHandling;