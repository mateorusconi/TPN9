import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhatIsAudit from './pages/WhatIsAudit';
import Types from './pages/Types';
import Planning from './pages/Planning';
import Policies from './pages/Policies';
import Example from './pages/Example';
import Dashboard from './pages/Dashboard';
import Team from './pages/Team';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/que-es-auditoria" element={<WhatIsAudit />} />
            <Route path="/tipos" element={<Types />} />
            <Route path="/planificacion" element={<Planning />} />
            <Route path="/politicas" element={<Policies />} />
            <Route path="/ejemplo" element={<Example />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/integrantes" element={<Team />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;