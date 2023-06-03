import React from 'react';
import './calculator.css';

const Buttons = () => (

  <div className=" calculator-app">
    <div className="result">0</div>
    <div className="buttons">
      <button type="button" className="greyButtons">AC</button>
      <button type="button" className="greyButtons">+/-</button>
      <button type="button" className="greyButtons">%</button>
      <button type="button" className="orangeButtons">÷</button>
      <button type="button" className="greyButtons">7</button>
      <button type="button" className="greyButtons">8</button>
      <button type="button" className="greyButtons">9</button>
      <button type="button" className="orangeButtons">x</button>
      <button type="button" className="greyButtons">4</button>
      <button type="button" className="greyButtons">5</button>
      <button type="button" className="greyButtons">6</button>
      <button type="button" className="orangeButtons">-</button>
      <button type="button" className="greyButtons">1</button>
      <button type="button" className="greyButtons">2</button>
      <button type="button" className="greyButtons">3</button>
      <button type="button" className="orangeButtons">+</button>
      <button type="button" className="greyButton-0">0</button>
      <button type="button" className="greyButtons">.</button>
      <button type="button" className="orangeButtons">=</button>
    </div>
  </div>
);

const Calculator = () => (
  <Buttons />
);

export default Calculator;
