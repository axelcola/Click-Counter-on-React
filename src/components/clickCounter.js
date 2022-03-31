import { useState } from "react";
import "../App.css";
import Timer from "./Timer";

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
      <p>El valor de contador es:</p>
      <h1 className="clock">{contadorValue}</h1>
      <button className="button" onClick={increase}>
        Increase
      </button>
      <button className="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default ClickCounter;
