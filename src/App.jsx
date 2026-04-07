import React from 'react'
import { useState } from 'react'
import Dock from './components/Dock'
import Nav from './components/Nav'
import "./app.scss"
import MacWindows from './components/Windows/MacWindows'
import Github from './components/Windows/Github'
import Note from './components/Windows/Note'
import Resume_pdf from './components/Windows/Resume_pdf'

const App = () => {
  return (
    <div>
      <main>
        <Nav/>
        <Dock/>
       <Github/>
       <Note/>
       <Resume_pdf/>
      </main>
    </div>
  )
}

export default App