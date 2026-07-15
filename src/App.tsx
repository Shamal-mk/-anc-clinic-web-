import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cosmetology from './pages/Cosmetology';
import Ayurveda from './pages/Ayurveda';
import Kalari from './pages/Kalari';
import Booking from './pages/Booking';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-clinical-white selection:bg-sage-green selection:text-white flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/departments/cosmetology" element={<Cosmetology />} />
            <Route path="/departments/ayurveda" element={<Ayurveda />} />
            <Route path="/departments/kalari" element={<Kalari />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
