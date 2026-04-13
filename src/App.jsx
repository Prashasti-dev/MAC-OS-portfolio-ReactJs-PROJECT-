import React, { useState } from 'react'
import Dock from './components/Dock'
import Nav from './components/Nav'
import "./app.scss"

// Window Components
import Github from './components/Windows/Github'
import Note from './components/Windows/Note'
import Resume_pdf from './components/Windows/Resume_pdf'
import Spotify from './components/Windows/Spotify'
import Terminal_cli from './components/Windows/Terminal_cli'

const App = () => {

  /* -------------------- Intro Popup State -------------------- */
  // Controls visibility of intro modal
  const [showIntro, setShowIntro] = useState(true);

  // Controls closing animation
  const [closing, setClosing] = useState(false);


  /* -------------------- Window State -------------------- */
  // Tracks which window is open
  const [windowState, setWindowState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    terminal: false,
  });


  /* -------------------- Handlers -------------------- */
  // Handles smooth closing of intro popup
  const handleClose = () => {
    setClosing(true); // trigger fade-out animation

    // Remove popup after animation completes
    setTimeout(() => {
      setShowIntro(false);
    }, 300);
  };


  /* -------------------- UI -------------------- */
  return (
    <div>
      <main>

        {/* Top Navigation */}
        <Nav />

        {/* Bottom Dock (App Launcher) */}
        <Dock 
          windowState={windowState} 
          setWindowState={setWindowState} 
        />

        {/* -------------------- Intro Popup -------------------- */}
        {showIntro && (
          <div className={`intro-overlay ${closing ? "fade-out" : ""}`}>
            <div className="intro-box">

              {/* Mac-style control buttons */}
              <div className="dots">
                <div className="dot red" onClick={handleClose}></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
              </div>

              {/* Intro Content */}
              <h2>👋 Hey, I'm Prashasti</h2>
              <p>A Computer Science Student & Developer</p>

              <p>Welcome to my interactive portfolio.</p>
              <p>Click the icons below to explore:</p>

              <ul>
                <li>💻 Terminal → About Me</li>
                <li>📝 Notes → Projects</li>
                <li>🎵 Spotify → Interests</li>
                <li>📄 Resume → My CV</li>
              </ul>

              {/* Close Button */}
              <button onClick={handleClose}>
                Get Started
              </button>

            </div>
          </div>
        )}

        {/* -------------------- Windows Rendering -------------------- */}
        
        {/* GitHub Window */}
        {windowState.github && (
          <Github 
            windowName="github" 
            windowState={windowState} 
            setWindowState={setWindowState}
          />
        )}

        {/* Notes Window */}
        {windowState.note && (
          <Note 
            windowName="note" 
            windowState={windowState} 
            setWindowState={setWindowState}
          />
        )}

        {/* Resume Window */}
        {windowState.resume && (
          <Resume_pdf 
            windowName="resume" 
            windowState={windowState} 
            setWindowState={setWindowState}
          />
        )}

        {/* Spotify Window */}
        {windowState.spotify && (
          <Spotify 
            windowName="spotify" 
            windowState={windowState} 
            setWindowState={setWindowState}
          />
        )}

        {/* Terminal Window */}
        {windowState.terminal && (
          <Terminal_cli 
            windowName="terminal" 
            windowState={windowState} 
            setWindowState={setWindowState}
          />
        )}

      </main>
    </div>
  )
}

export default App;