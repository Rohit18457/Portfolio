import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import TerminalPage from './pages/TerminalPage';
import CustomCursor from './components/CustomCursor';
import CommandPalette from './components/CommandPalette';
import Navbar from './components/Navbar';
import FloatingWidgets from './components/FloatingWidgets';

function App() {
  const [theme, setTheme] = useState('dark');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <div className="app-container">
        <CustomCursor />
        <div className="bg-glow"></div>
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terminal" element={<TerminalPage />} />
        </Routes>
        
        <FloatingWidgets />
        <CommandPalette isOpen={isCommandPaletteOpen} onClose={() => setIsCommandPaletteOpen(false)} />
      </div>
    </Router>
  );
}

export default App;
