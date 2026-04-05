import React from 'react'
import { useState } from 'react'
import Dock from './components/Dock'
import Nav from './components/Nav'
import "./app.scss"
import MacWindows from './components/Windows/MacWindows'

const App = () => {
  return (
    <div>
      <main>
        <Nav/>
        <Dock/>
        <MacWindows>
          <h2>hello</h2>
          </MacWindows>
      </main>
    </div>
  )
}

export default App