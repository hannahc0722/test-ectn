import React from 'react';
import Navbar from './components/Navbar';
import ChartComponent from './components/ChartComponent';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ChartComponent />
      <div className="parallax"></div>
      <Gallery />
    </div>
  );
}

export default App;
