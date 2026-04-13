        import React from 'react'
        import "./dock.scss"
        
        const Dock = ({windowState, setWindowState}
        ) => {
        return (
            <footer className='dock'>

    <div 
     title="GitHub Projects"
        onClick={()=>{setWindowState(state=>({...state,github:true}))}}
        className='icon github'><img src="/docs-icons/github.svg" alt="" /></div>
    <div 
    title="Notes "
        onClick={()=>{setWindowState(state=>({...state,note:true}))}}
        className='icon notes'><img src="/docs-icons/notes.svg" alt="" /></div>

    <div 
     title="Send Mail"
  onClick={() => window.open(
  "https://mail.google.com/mail/u/0/#inbox?compose=new&to=jaiswal24prashasti@example.com",
  "_blank"
)}
        className='icon gmail'><img src="/docs-icons/gmail.svg" alt="" /></div>
    <div 
    title="Spotify "
        onClick={()=>{setWindowState(state=>({...state,spotify:true}))}}
        className='icon spotify'><img src="/docs-icons/spotify.svg" alt="" /></div>
    <div 
     title="View Resume"
        onClick={()=>{setWindowState(state=>({...state,resume:true}))}}
        className='icon pdf'><img src="/docs-icons/pdf.svg" alt="" /></div>
    <div 
      title="LinkedIn Profile"
        onClick={()=>window.open("https://www.linkedin.com/in/prashasti-jaiswal-4028052a7/" , "_blank")}
        className='icon link'><img src="/docs-icons/link.svg" alt="" /></div>

    <div
    title="Open Google Calendar"
    onClick={()=>window.open("https://calendar.google.com", "_blank")} 
    className='icon calendar'><img src="/docs-icons/calendar.png" alt="" /></div>
    <div
     title="Open Terminal"
        onClick={()=>{setWindowState(state=>({...state,terminal:true}))}}
        className='icon cli'><img src="/docs-icons/cli.png" alt="" /></div>

    </footer>
        )
        }

        export default Dock