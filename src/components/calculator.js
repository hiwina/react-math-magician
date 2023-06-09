import { useState } from 'react';
import calculate from '../logic/calculate';
import './calculator.css';

const Buttons = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const Click = (e) => {
    const result = calculate({ total, next, operation }, e.target.textContent);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  return (

    <>
      <h1>Let&apos;s do some math</h1>
      <div>
        <div className="result">
          {total}
          {operation}
          {next}
        </div>
        <div className="buttons">

          <button onClick={Click} type="button" className="greyButtons">AC</button>
          <button onClick={Click} type="button" className="greyButtons">+/-</button>
          <button onClick={Click} type="button" className="greyButtons">%</button>
          <button onClick={Click} type="button" className="orangeButtons">÷</button>
          <button onClick={Click} type="button" className="greyButtons">7</button>
          <button onClick={Click} type="button" className="greyButtons">8</button>
          <button onClick={Click} type="button" className="greyButtons">9</button>
          <button onClick={Click} type="button" className="orangeButtons">x</button>
          <button onClick={Click} type="button" className="greyButtons">4</button>
          <button onClick={Click} type="button" className="greyButtons">5</button>
          <button onClick={Click} type="button" className="greyButtons">6</button>
          <button onClick={Click} type="button" className="orangeButtons">-</button>
          <button onClick={Click} type="button" className="greyButtons">1</button>
          <button onClick={Click} type="button" className="greyButtons">2</button>
          <button onClick={Click} type="button" className="greyButtons">3</button>
          <button onClick={Click} type="button" className="orangeButtons">+</button>
          <button onClick={Click} type="button" className="greyButton-0">0</button>
          <button onClick={Click} type="button" className="greyButtons">.</button>
          <button onClick={Click} type="button" className="orangeButtons">=</button>
        </div>
      </div>
    </>

  );
};

const Calculator = () => (
  <div className="calculator">
    <Buttons />
  </div>

);

export default Calculator;
