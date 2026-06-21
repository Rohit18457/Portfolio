import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Terminal, Home } from 'lucide-react';
import './TerminalPage.css';

const TerminalPage = () => {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to Rohit.dev Terminal v1.0.0' },
    { type: 'system', text: 'Type "help" to see available commands.' }
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const endRef = useRef(null);
  const navigate = useNavigate();

  const commands = {
    help: () => [
      'Available commands:',
      '  help      - Show this help message',
      '  projects  - List my featured projects',
      '  skills    - List my technical skills',
      '  resume    - Download my resume',
      '  contact   - Show contact information',
      '  clear     - Clear the terminal',
      '  home      - Go back to the main portfolio',
      '  whoami    - About me'
    ],
    whoami: () => [
      'Rohit Suryawanshi',
      'Computer Science Student & Aspiring Software Engineer.',
      'Passionate about Cloud, AI, and Full-Stack Development.'
    ],
    projects: () => [
      '1. Smart Crop Advisory System (ML, React, Node.js)',
      '2. AI Chatbot for Student Assistance (GenAI, React)',
      '3. PCB Defect Detection System (Computer Vision, Python)'
    ],
    skills: () => [
      'Languages: C++, Python, JavaScript',
      'Web: React, Node.js, Express.js',
      'Cloud & AI: AWS, Prompt Engineering',
      'Core: DSA, OOP, DBMS, OS, Networks'
    ],
    contact: () => [
      'Email: rohitsuryawanshi775682@gmail.com',
      'Phone: +91 7756822035',
      'LinkedIn: linkedin.com/in/rohit-suryawanshi-816281290',
      'GitHub: github.com/Rohit18457'
    ],
    resume: () => [
      'Downloading resume...',
      <a href="/resume.pdf" download className="terminal-link">Click here if download does not start automatically</a>
    ],
    clear: () => [],
    home: () => {
      navigate('/');
      return ['Redirecting to home...'];
    }
  };

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === '') return;

    if (trimmedCmd === 'clear') {
      setHistory([]);
      return;
    }

    let output = [];
    if (commands[trimmedCmd]) {
      output = commands[trimmedCmd]();
    } else {
      output = [`Command not found: ${trimmedCmd}. Type "help" for available commands.`];
    }

    setHistory(prev => [
      ...prev,
      { type: 'user', text: `guest@rohit.dev:~$ ${cmd}` },
      ...output.map(text => ({ type: 'output', text }))
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div className="terminal-page">
      <div className="terminal-header glass">
        <div className="term-buttons">
          <span className="term-btn close" onClick={() => navigate('/')}></span>
          <span className="term-btn min"></span>
          <span className="term-btn max"></span>
        </div>
        <div className="term-title">
          <Terminal size={14} /> bash - rohit.dev
        </div>
        <button className="term-home-btn" onClick={() => navigate('/')}>
          <Home size={14} /> Home
        </button>
      </div>
      
      <div className="terminal-body" onClick={() => inputRef.current?.focus()}>
        {history.map((entry, i) => (
          <div key={i} className={`term-entry ${entry.type}`}>
            {entry.text}
          </div>
        ))}
        
        <form onSubmit={handleSubmit} className="term-input-line">
          <span className="term-prompt">guest@rohit.dev:~$ </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="term-input"
            autoFocus
            autoComplete="off"
            spellCheck="false"
          />
        </form>
        <div ref={endRef} />
      </div>
    </div>
  );
};

export default TerminalPage;
