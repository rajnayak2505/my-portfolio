import React from 'react'
import {Link} from "react-router-dom"
// import Resume from "./resume.pdf"
const Header = () => {
  return (
    <div className='header'>
        <ul>
            <li><Link to='/'>rajesh_nayak</Link></li>
            <li><Link to='about'>_about-me</Link></li>
            <li><Link to='skills'>_skills</Link></li>
            <li><Link to='projects'>_projects</Link></li>
        </ul>
        <a href={`${process.env.PUBLIC_URL}/resume.pdf`} className='resume' download="Rajesh_Nayak_Resume.pdf">_resume</a>
    </div>
  )
}

export default Header