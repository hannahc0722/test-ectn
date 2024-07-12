// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import WasteComp from './components/WasteComp';
import WasteDiv from './components/WasteDiv';
import LoginPage from './components/LoginPage';
import SampleImages from './components/SampleImages';
import CreateAccount from './components/CreateAccount'; // Import CreateAccount component

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<WasteComp />} />
          <Route path="/wastediv" element={<WasteDiv />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sample-images" element={<SampleImages />} />
          <Route path="/create-account" element={<CreateAccount />} /> {/* Add this line */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
