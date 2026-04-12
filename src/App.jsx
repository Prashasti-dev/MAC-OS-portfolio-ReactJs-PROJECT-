import React from 'react'
import { useState } from 'react'
import Dock from './components/Dock'
import Nav from './components/Nav'
import "./app.scss"
import MacWindows from './components/Windows/MacWindows'
import Github from './components/Windows/Github'
import Note from './components/Windows/Note'
import Resume_pdf from './components/Windows/Resume_pdf'
import Spotify from './components/Windows/Spotify'

const App = () => {
  return (
    <div>
      <main>
        <Nav/>
        <Dock/>
       <Github/>
       <Note/>
       <Resume_pdf/>
       <Spotify/>
      </main>
    </div>
  )
}

export default App