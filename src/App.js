import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ExpensePage from './components/ExpensePage';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <ExpensePage />
      </div>
    </div>
  );
}

export default App;
