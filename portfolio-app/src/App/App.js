import { useState, useEffect } from 'react';
import './App.css';
import Main from '../Main/Main.js'

function App() {

    // || FADE-IN STATES
  const [showTitle, setShowTitle] = useState(true);
  const [showIntro, setShowIntro] = useState(true);
  const [showPage, setShowPage] = useState(false)

//  || FADE-INS
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTitle(false);
    }, 1000); // Set the timeout duration in milliseconds (e.g., 2000ms = 2 seconds)

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowIntro(false);
    }, 2000); // Set the timeout duration in milliseconds (e.g., 2000ms = 2 seconds)

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPage(false);
    }, 3000); // Set the timeout duration in milliseconds (e.g., 2000ms = 2 seconds)

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div id="main">

      <div>
        <h1 className={`text fade ${showTitle ? 'fade-in' : 'fade-out'}`} id="sup">Welcome</h1>
      </div>

      <div>
        <h2 className={`text fade ${showIntro ? 'fade-in' : 'fade-out'}`}>I'm Mateen, a junior software developer</h2>
      </div>

        <Main showPage={showPage}/>

    </div>
  );
}

export default App;
