import { useState } from "react";
import "../App.css";

const ClickCounter = () => {
  const [contadorValue, updateContador] = useState(0);
  const increase = () => {
    updateContador(contadorValue + 1);
  };
  const reset = () => {
    updateContador(0);
  };

  return (
    <div className="click-counter">
      <p>How many clicks you can do?</p>
      <h1>{contadorValue}</h1>
      <button className="button" onClick={increase}>
        Increase
      </button>
      <button className="button reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default ClickCounter;
