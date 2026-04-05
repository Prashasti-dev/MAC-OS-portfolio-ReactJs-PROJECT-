import React from 'react'
import { useState } from 'react'
import Dock from './components/Dock'
import Nav from './components/Nav'
import "./app.scss"
import MacWindows from './components/Windows/MacWindows'
import Github from './components/Windows/Github'

const App = () => {
  return (
    <div>
      <main>
        <Nav/>
        <Dock/>
       <Github/>
      </main>
    </div>
  )
}

export default App