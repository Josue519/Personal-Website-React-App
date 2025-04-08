import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BusinessCard from './components/BusinessCard';
import SpecialtiesPage from './components/pages/SpecialtiesPage';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BusinessCard />} />
        <Route path="/specialties" element={<SpecialtiesPage />} />
      </Routes>
    </Router>
  );
}

export default App; 