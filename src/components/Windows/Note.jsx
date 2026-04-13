// Component loads
//    ↓
// useEffect runs (once)
//    ↓
// fetch note.txt Converts the response into plain text
//    ↓
// convert to text
//    ↓
// store in state (setMarkdown)
//    ↓
// UI re-renders with new data

import React , {useEffect, useState} from 'react'
import { useEffectEvent } from 'react'
import Markdown from 'react-markdown'
import MacWindows from './MacWindows'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "./note.scss"

const Note = ({windowName,windowState, setWindowState}) => {
    const [markdown, setMarkdown] = useState(null)
    
 useEffect(()=>{
    fetch("/note.txt")
    .then(res=>res.text())    
    .then(text=>setMarkdown(text))
 },[])
  return (
   <MacWindows windowName={windowName} windowState={windowState} setWindowState={setWindowState}>
    <div className="note-window">
        {markdown ?  <SyntaxHighlighter language="typescript" style={atelierDuneDark}>
      {markdown}
    </SyntaxHighlighter> :<p>Loading..</p>}
    </div>
   </MacWindows>

  )
}

export default Note