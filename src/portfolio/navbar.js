import { useEffect, useState } from 'react';


export default function Navbar({ text }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isToggleVisible, setToggleVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    setToggleVisible(false); 
    document.body.style.overflow = isSidebarOpen ? 'auto' : 'hidden';
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
    setToggleVisible(true); 
    document.body.style.overflow = 'auto';
  };

  const handleClickOutside = (e) => {
    if (e.target.classList.contains('sidebar')) {
      closeSidebar();
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeSidebar(); 
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <div className="header">
      <div className="head">
        <nav className={`vinoth-details ${isScrolled ? 'scrolled' : ''}`}>
          <div className="name">
            <h1 className="first">VINOTH</h1>
          </div>
          <div className="details">
            <ul className="list">
              <li><a href="#fullname" onClick={() => scrollToSection('fullname')}>Home</a></li>
              <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
              <li><a href="#services" onClick={() => scrollToSection('services')}>Service</a></li>
              <li><a href="#portfolio" onClick={() => scrollToSection('portfolio')}>Portfolio</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </div>
          {isToggleVisible && (
            <button className="toggle-btn" onClick={toggleSidebar}>
              ☰
            </button>
          )}
        </nav>

        {isSidebarOpen && (
          <div className={`sidebar active`} onClick={handleClickOutside}>
            <button className="close-btn" onClick={closeSidebar}>
              ✕
            </button>
            <ul>
              <li><a href="#fullname" onClick={() => scrollToSection('fullname')}>Home</a></li>
              <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
              <li><a href="#services" onClick={() => scrollToSection('services')}>Service</a></li>
              <li><a href="#portfolio" onClick={() => scrollToSection('portfolio')}>Portfolio</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </div>
        )}

        <div className="fullname" id="fullname">
          <div className="last">
            <h1>Hi, I'm Vinoth Rajasekaran</h1>
          </div>
          <div className="background-section" id="home">
            <div className="slider">
              <span id="text-slider">{text}</span><span className="cursor">|</span>
            </div>
           
          </div>
          
        </div>
        
      </div>
    </div>
  );
}
