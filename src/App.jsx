import React from 'react'
import Dock from './components/Dock'
import Nav from './components/Nav'
import "./app.scss"

import Github from './components/Windows/Github'
import Note from './components/Windows/Note'
import Resume_pdf from './components/Windows/Resume_pdf'
import Spotify from './components/Windows/Spotify'
import Terminal_cli from './components/Windows/Terminal_cli'

const App = () => {
  return (
    <div>
      <main>
        <Nav />
        <Dock />

        <Github />
        <Note />
        <Resume_pdf />
        <Spotify />
        <Terminal_cli />
        
      </main>
    </div>
  )
}

export default App