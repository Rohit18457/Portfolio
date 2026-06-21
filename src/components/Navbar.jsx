import { Link } from 'react-router-dom';
import { Moon, Sun, Terminal } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <nav className="navbar glass">
      <div className="container navbar-container">
        <Link to="/" className="logo text-gradient">
          Rohit.dev
        </Link>

        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#journey" className="nav-link">Journey</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        <div className="nav-actions">
          <Link to="/terminal" className="nav-icon" title="Developer Terminal">
            <Terminal size={20} />
          </Link>
          <button onClick={toggleTheme} className="nav-icon" title="Toggle Theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
