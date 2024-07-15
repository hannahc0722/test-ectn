// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import WasteComp from './components/WasteComp';
import WasteDiv from './components/WasteDiv';
import LoginPage from './components/LoginPage';
import SampleImages from './components/SampleImages';
import CreateAccount from './components/CreateAccount2';
import HelloPage from './components/HelloPage'; // Import HelloPage component
import Welcome from './components/Welcome';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const PrivateRoute = ({ children }) => {
  const auth = getAuth();
  const [authenticated, setAuthenticated] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, [auth]);

  if (authenticated === null) {
    return <div>Loading...</div>;
  }

  return authenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<WasteComp />} />
          <Route path="/wastediv" element={<WasteDiv />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sample-images" element={<PrivateRoute><SampleImages /></PrivateRoute>} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/hello" element={<HelloPage />} /> {/* Add HelloPage route */}
          <Route path="/welcome" element={<Welcome />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
