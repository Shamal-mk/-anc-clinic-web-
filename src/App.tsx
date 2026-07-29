import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cosmetology from './pages/Cosmetology';
import Ayurveda from './pages/Ayurveda';
import Kalari from './pages/Kalari';
import Booking from './pages/Booking';
import PageTransition from './components/PageTransition';
import { LightboxProvider } from './context/LightboxContext';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/departments/cosmetology" element={<PageTransition><Cosmetology /></PageTransition>} />
        <Route path="/departments/ayurveda" element={<PageTransition><Ayurveda /></PageTransition>} />
        <Route path="/departments/kalari" element={<PageTransition><Kalari /></PageTransition>} />
        <Route path="/booking" element={<PageTransition><Booking /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <LightboxProvider>
      <Router>
        <div className="min-h-screen bg-clinical-white selection:bg-sage-green selection:text-white flex flex-col">
          <Navbar />
          <main className="flex-1">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </LightboxProvider>
  );
}

export default App;
