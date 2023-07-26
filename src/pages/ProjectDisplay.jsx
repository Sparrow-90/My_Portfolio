import React from 'react'
import { useParams } from 'react-router-dom'
import { projectList } from '../helpers/ProjectList'
import {FaGithub, FaPlay} from 'react-icons/fa'
import '../styles/ProjectDisplay.css'

const ProjectDisplay = () => {
const {id} = useParams();
const project = projectList[id]
  return (
    <div className='project-container'>
        <div className="project">
          <section className="project-image-container"><img src={project.image} alt="" /></section>
          <section className="project-description-container">
            <div className="description">
              <h1>{project.name}</h1>
              <p>{project.description}</p>
            </div>
            <div className="skill">
              <p>{project.skill}</p>
              <div className="button-container">
                <a href={project.codeLink} target="blank">
                  <button>
                  <FaGithub/>
                  Code
                  </button>
                </a>
                <a href={project.playLink} target="blank">
                  <button>
                  <FaPlay/>
                  live view
                  </button>
                </a>
              </div>
            </div>
          </section>
        </div>
    </div>
  )
}

export default ProjectDisplay