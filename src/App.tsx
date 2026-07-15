import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cosmetology from './pages/Cosmetology';

// Temporary placeholders for missing pages
const Ayurveda = () => <div className="pt-32 text-center text-3xl font-serif">Samsara Ayurveda Unit - Coming Soon</div>;
const Kalari = () => <div className="pt-32 text-center text-3xl font-serif">CVN Kalari Unit - Coming Soon</div>;
const Booking = () => <div className="pt-32 text-center text-3xl font-serif">Booking Widget - Coming Soon</div>;

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-clinical-white selection:bg-sage-green selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/departments/cosmetology" element={<Cosmetology />} />
          <Route path="/departments/ayurveda" element={<Ayurveda />} />
          <Route path="/departments/kalari" element={<Kalari />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
