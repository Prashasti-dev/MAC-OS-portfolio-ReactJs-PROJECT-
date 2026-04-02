    import React from 'react'
    import "./dock.scss"
    
    const Dock = () => {
    return (
        <footer className='dock'>
  <div className='icon github'><img src="/docs-icons/github.svg" alt="" /></div>
  <div className='icon notes'><img src="/docs-icons/notes.svg" alt="" /></div>
  <div className='icon gmail'><img src="/docs-icons/gmail.svg" alt="" /></div>
  <div className='icon spotify'><img src="/docs-icons/spotify.svg" alt="" /></div>
  <div className='icon pdf'><img src="/docs-icons/pdf.svg" alt="" /></div>
  <div className='icon link'><img src="/docs-icons/link.svg" alt="" /></div>
  <div className='icon calendar'><img src="/docs-icons/calendar.png" alt="" /></div>
    <div className='icon cli'><img src="/docs-icons/cli.png" alt="" /></div>

</footer>
    )
    }

    export default Dock