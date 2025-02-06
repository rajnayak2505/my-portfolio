import React from 'react'
import css from "../images/css.png"
import html from "../images/html.png"
import js from "../images/js.png"
import rj from "../images/rj.png"
import redux from "../images/redux.png"
import tailwind from "../images/tailwind.png"

const Skills = () => {
  return (
    <div className='skills'>
      <div>
        <p>These are the technologies I've worked with</p>
        <div className='skills-wrap'>
            <ul>
                <li><img alt='img' src={js} /> <span>JavaScript</span></li>
                <li><img alt='img' src={rj} /> <span>ReactJS</span></li>
                <li><img alt='img' src={redux} /> <span>Redux</span></li>
                <li><img alt='img' src={html} /> <span>HTML5</span></li>
                <li><img alt='img' src={css} /> <span>CSS3</span></li>
                <li><img alt='img' src='https://sass-lang.com/assets/img/styleguide/color.png' /> <span>SASS</span></li>
                <li><img alt='img' src={tailwind} /> <span>Tailwind CSS</span></li>
                <li><img alt='img' src='https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png' /> <span>GIT</span></li>
                <li><img alt='img' src='https://cdn.sanity.io/images/599r6htc/regionalized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png' /> <span>Figma</span></li>
                <li><img alt='img' src='https://cdn.worldvectorlogo.com/logos/jira-1.svg' /> <span>Jira</span></li>
            </ul>
        </div>
    </div>
  </div>
  )
}

export default Skills