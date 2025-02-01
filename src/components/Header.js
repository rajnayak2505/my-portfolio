import React from 'react'
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <div className='header'>
        <ul>
            <li><Link to='/'>rajesh_nayak</Link></li>
            <li><Link to='about'>_about-me</Link></li>
            <li><Link to='skills'>_skills</Link></li>
            <li><Link to='projects'>_projects</Link></li>
        </ul>
        {/* <div className='resume'>_resume</div> */}
    </div>
  )
}

export default Header