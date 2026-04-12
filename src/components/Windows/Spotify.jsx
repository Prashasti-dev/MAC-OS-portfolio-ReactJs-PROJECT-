import React from 'react'
import MacWindows from './MacWindows'
import "./style.scss"
const Spotify = () => {
  return (
    <MacWindows width='25vw'>
        <div className="spotify-window">

<iframe data-testid="embed-iframe" style={{borderRadius:"12px"} }src="https://open.spotify.com/embed/playlist/23JEUekDgKrFnveq52QzN6?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>        </div>
        
        </MacWindows>
  )
}

export default Spotify
