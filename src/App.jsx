import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Sahifalarni lazy load qilamiz
const Home = lazy(() => import('./page/Home'));
const About = lazy(() => import('./page/About'));
const Contact = lazy(() => import('./page/Contact'));

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Sahifalar yuklanayotganda Suspense orqali yuklanish xabari */}
        <Suspense fallback={<div>Yuklanmoqda...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;

