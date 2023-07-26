import React from 'react'
import ProjectItem from '../components/ProjectItem'
import {projectList} from '../helpers/ProjectList'
import '../styles/Project.css'
import projectImg from '../img/classic.jpg'

const Projects = () => {
  return (
    <div className='projects'>
      <h1>My Projects</h1>
      <div className='projectList'>
        {projectList.map((project,idx )=>{
          return <ProjectItem id={idx} name={project.name} image={project.image}/>
        })}
      </div>
        <img src={projectImg} alt="" className="project-img" />
    </div>
  )
}

export default Projects