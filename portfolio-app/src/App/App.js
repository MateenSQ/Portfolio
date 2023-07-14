import { useState, useEffect } from 'react';
import './App.css';

function Fade() {

  const [showTitle, setShowTitle] = useState(true);
  const [showIntro, setShowIntro] = useState(true);
  const [showPage, setShowPage] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTitle(false);
    }, 1000); // Set the timeout duration in milliseconds (e.g., 2000ms = 2 seconds)

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowIntro(false);
    }, 2500); // Set the timeout duration in milliseconds (e.g., 2000ms = 2 seconds)

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPage(false);
    }, 4000); // Set the timeout duration in milliseconds (e.g., 2000ms = 2 seconds)

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div id='Home'>
      <h1 className={`Fade ${showTitle ? 'fade-in' : 'fade-out'}`} id="sup">Welcome</h1>
      <h2 className={`Fade ${showIntro ? 'fade-in' : 'fade-out'}`}>I'm Mateen, a junior software developer</h2>
      <p className={`Fade ${showPage ? 'fade-in' : 'fade-out'}`}>This is my page</p>
    </div>
  );
}

export default Fade;
