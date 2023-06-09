import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import Quotes from './components/quotes';
import Home from './components/Home';
import Navbar from './components/Nav';

const App = () => (
  <>
    <BrowserRouter>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quotes />} />
        </Routes>
      </div>
    </BrowserRouter>
  </>
);

export default App;
