import React from 'react'
import Dock from './components/Dock'
import Nav from './components/Nav'
import "./app.scss"

const App = () => {
  return (
    <div>
      <main>
        <Nav/>
        <Dock/>
      </main>
    </div>
  )
}

export default App