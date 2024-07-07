import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import WasteComp from './components/WasteComp';
import LoginPage from './components/LoginPage';
import WasteDiv from './components/WasteDiv';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<WasteComp />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/wastediv" element={<WasteDiv />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
