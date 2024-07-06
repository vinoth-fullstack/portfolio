import { useEffect, useState, useMemo } from 'react';
import './App.css';
import Navbar from './portfolio/navbar';
import About from './portfolio/about';
import Service from './portfolio/service';
import Portfolio from './portfolio/portfolio';
import Contact from './portfolio/contact';

const App = () => {
  const words = useMemo(() => ["Frontend Developer", "Mern Stack Developer"], []);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const updateText = () => {
      const currentWord = words[currentWordIndex];

      if (deleting) {
        setCurrentCharIndex((prev) => prev - 1);
        if (currentCharIndex === 0) {
          setDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setCurrentCharIndex((prev) => prev + 1);
        if (currentCharIndex === currentWord.length) {
          setDeleting(true);
        }
      }
    };

    const timer = setTimeout(updateText, deleting ? 100 : 200);
    return () => clearTimeout(timer);
  }, [currentWordIndex, currentCharIndex, deleting, words]);

  return (
    <div>
      <Navbar text={words[currentWordIndex].substring(0, currentCharIndex)} />
      <About />
      <Service />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
