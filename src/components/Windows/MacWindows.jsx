// react rnd-- it is used to make component resizable 
// React Rnd (react-rnd) is an open-source library that provides a single, flexible React component for making elements both resizable and draggable.

import { Rnd } from 'react-rnd';
import "./windows.scss";

const MacWindows = ({ children, width="40vw", height="40vh", windowName, windowState, setWindowState }) => {
  return (
    <Rnd
      default={{
        width: width,
        height: height,
        x: 300,
        y: 200
      }}
    >
      <div className='windows'> 
        <div className="nav-content">
          <div className="dots">
            <div onClick={() => setWindowState(state => ({ ...state, [windowName]: false }))} className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="title"><p>prashastijaiswal-zsh</p></div>
        </div>
        <div className="main-content">{children}</div>  
      </div>
    </Rnd>
  );
};

export default MacWindows;