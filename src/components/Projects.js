import React, { useState } from 'react'
import {Reactprojects,JSprojects, CSSprojects} from '../utils/constants'
import { Link } from 'react-router-dom';


const Projects = () => {

  return (
    <div className='projects'>
      <h1>ReactJS Projects</h1>
      <ul>
        {Reactprojects.map((project) => 
          <li>
            <img alt='project img' src={project.img}/>
            <h2>{project.name}</h2>
            <Link target="_blank" to={project.github}>GitHub Repo.</Link>
            <Link target="_blank" to={project.livePreview}>Preview</Link>
          </li>
        )}
      </ul>
      <h1>JavaScript Projects</h1>
      <ul>
        {JSprojects.map((project) => 
          <li>
            <img alt='project img' src={project.img}/>
            <h2>{project.name}</h2>
            <Link target="_blank" to={project.github}>GitHub Repo.</Link>
            <Link target="_blank" to={project.livePreview}>Preview</Link>
          </li>
        )}
      </ul>
      <h1>CSS Projects</h1>
      <ul>
        {CSSprojects.map((project) => 
          <li>
            <img alt='project img' src={project.img}/>
            <h2>{project.name}</h2>
            <Link target="_blank" to={project.github}>GitHub Repo.</Link>
            <Link target="_blank" to={project.livePreview}>Preview</Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Projects