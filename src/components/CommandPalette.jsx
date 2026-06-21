import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Terminal, User, Code, FileText, Mail, Trophy, Map } from 'lucide-react';
import './CommandPalette.css';

const CommandPalette = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const commands = [
    { id: 'home', title: 'Home', icon: <User size={18} />, action: () => { navigate('/'); window.scrollTo(0,0); } },
    { id: 'terminal', title: 'Developer Terminal', icon: <Terminal size={18} />, action: () => navigate('/terminal') },
    { id: 'about', title: 'About Me', icon: <User size={18} />, action: () => { navigate('/'); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); } },
    { id: 'skills', title: 'Skills', icon: <Code size={18} />, action: () => { navigate('/'); document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }); } },
    { id: 'projects', title: 'Projects', icon: <Code size={18} />, action: () => { navigate('/'); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); } },
    { id: 'achievements', title: 'Achievements', icon: <Trophy size={18} />, action: () => { navigate('/'); document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' }); } },
    { id: 'journey', title: 'Journey', icon: <Map size={18} />, action: () => { navigate('/'); document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' }); } },
    { id: 'resume', title: 'Resume', icon: <FileText size={18} />, action: () => { navigate('/'); document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' }); } },
    { id: 'contact', title: 'Contact', icon: <Mail size={18} />, action: () => { navigate('/'); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); } },
  ];

  const filteredCommands = commands.filter(cmd => 
    cmd.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setSearch('');
      setTimeout(() => document.getElementById('command-input')?.focus(), 100);
    }
  }, [isOpen]);

  const handleCommand = (action) => {
    action();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="command-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div 
            className="command-palette glass-card"
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
          >
            <div className="command-header">
              <input 
                id="command-input"
                type="text" 
                placeholder="Type a command or search..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="command-list">
              {filteredCommands.length > 0 ? (
                filteredCommands.map((cmd) => (
                  <button 
                    key={cmd.id} 
                    className="command-item"
                    onClick={() => handleCommand(cmd.action)}
                  >
                    <span className="cmd-icon">{cmd.icon}</span>
                    <span>{cmd.title}</span>
                  </button>
                ))
              ) : (
                <div className="command-empty">No results found.</div>
              )}
            </div>
            <div className="command-footer">
              <span>Use <kbd>↑</kbd> <kbd>↓</kbd> to navigate</span>
              <span><kbd>Enter</kbd> to select</span>
              <span><kbd>Esc</kbd> to close</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
