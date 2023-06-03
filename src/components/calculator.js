// import React from 'react';
// import './calculator.css';

// const Buttons = () => (

//   <div className=" calculator-app">
//     <div className="result">0</div>
//     <div className="buttons">
//       <button type="button" className="greyButtons">AC</button>
//       <button type="button" className="greyButtons">+/-</button>
//       <button type="button" className="greyButtons">%</button>
//       <button type="button" className="orangeButtons">÷</button>
//       <button type="button" className="greyButtons">7</button>
//       <button type="button" className="greyButtons">8</button>
//       <button type="button" className="greyButtons">9</button>
//       <button type="button" className="orangeButtons">x</button>
//       <button type="button" className="greyButtons">4</button>
//       <button type="button" className="greyButtons">5</button>
//       <button type="button" className="greyButtons">6</button>
//       <button type="button" className="orangeButtons">-</button>
//       <button type="button" className="greyButtons">1</button>
//       <button type="button" className="greyButtons">2</button>
//       <button type="button" className="greyButtons">3</button>
//       <button type="button" className="orangeButtons">+</button>
//       <button type="button" className="greyButton-0">0</button>
//       <button type="button" className="greyButtons">.</button>
//       <button type="button" className="orangeButtons">=</button>
//     </div>
//   </div>
// );

// const Calculator = () => (
//   <Buttons />
// );

// export default Calculator;
// import { useState } from 'react';
// import './calculator.css';
// import calculate from '../logic/calculate.js ';

// const Buttons = () => {
//   const [total, setTotal] = useState(null);
//   const [next, setNext] = useState(null);
//   const [operation, setOperation] = useState(null);

//   const Click = (e) => {
//     const result = calculate({ total, next, operation }, e.target.value);
//     setTotal(result.total);
//     setNext(result.total);
//     setOperation(result.operation);
//   };

//     <div className=" calculator-app">
//       <div className="result">
//         {total}
//         {operation}
//         {next}
//       </div>
//       <div className="buttons">
//         <button onClick={Click} type="button" className="greyButtons">AC</button>
//         <button onClick={Click} type="button" className="greyButtons">+/-</button>
//         <button onClick={Click} type="button" className="greyButtons">%</button>
//         <button onClick={Click} type="button" className="orangeButtons">÷</button>
//         <button onClick={Click} type="button" className="greyButtons">7</button>
//         <button onClick={Click} type="button" className="greyButtons">8</button>
//         <button onClick={Click} type="button" className="greyButtons">9</button>
//         <button onClick={Click} type="button" className="orangeButtons">x</button>
//         <button onClick={Click} type="button" className="greyButtons">4</button>
//         <button onClick={Click} type="button" className="greyButtons">5</button>
//         <button onClick={Click} type="button" className="greyButtons">6</button>
//         <button onClick={Click} type="button" className="orangeButtons">-</button>
//         <button onClick={Click} type="button" className="greyButtons">1</button>
//         <button onClick={Click} type="button" className="greyButtons">2</button>
//         <button onClick={Click} type="button" className="greyButtons">3</button>
//         <button onClick={Click} type="button" className="orangeButtons">+</button>
//         <button onClick={Click} type="button" className="greyButton-0">0</button>
//         <button onClick={Click} type="button" className="greyButtons">.</button>
//         <button onClick={Click} type="button" className="orangeButtons">=</button>
//       </div>
//     </div>;
// };

// const Calculator = () => (
//   <Buttons />
// );

// export default Calculator;
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

    </>

  );
};

const Calculator = () => (
  <div className="calculator">
    <Buttons />
  </div>

);

export default Calculator;
