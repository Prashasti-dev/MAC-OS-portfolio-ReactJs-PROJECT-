import React from 'react'
import MacWindows from './MacWindows'
import githubData from "../../assets/github.json"
import "./github.scss"

const GitCard=({data={
    id:1,
    image:"",
    title:"",
    description:"",
    tags:[],
    repolink:"",
    demolink:""
}})=>{
return <div className="card">
    <img src={data.image }alt="" />
    <h1>{data.title}</h1>
    <p>{data.description}</p>
    <div className="tags">
        {
            data.tags.map(tag=><p className='tag'>{tag}</p>)
        }
    </div>
      <div className="urls">
  <a href={data.repolink} target="_blank">Repository</a>

  {data.demolink && (
    <a href={data.demolink} target="_blank">Demo Link</a>
  )}
</div>
</div>
}

const Github = ({windowName, windowState, setWindowState}) => {
  return (
    <MacWindows windowName={windowName} windowState={windowState} setWindowState={setWindowState}>
            <div className="cards">
                {githubData.map(project=>{
                    return <GitCard data={project}/>
                })}
            </div>
    </MacWindows>
  )
}

export default Github