import React from 'react'
import { Link } from 'react-router-dom'

const Hello = () => {
  return (
    <div className='main'>
        <div className='toppage'>
            <div className='intro'>
                <span>Hi all. I am</span>
                <h1>  Rajesh M Nayak </h1>
                <h2><code>&#62;</code> Frond-end developer</h2>
                <div className='info'>
                    <p className='cmnt'><span>&#47;</span><span>&#47;</span> my number</p>
                    <div>
                        <span className='const'>const</span>
                        <span className='name'>mobile</span>
                        <span className='eql'>=</span>
                        <Link to="tel:9768 14 5656"><span className='tel'>9768 14 5656</span></Link>
                    </div>
                    <p className='cmnt'><span>&#47;</span><span>&#47;</span> my email</p>
                    <div>
                        <span className='const'>const</span>
                        <span className='name'>email</span>
                        <span className='eql'>=</span>
                        <Link to="mailto:rajnayak2505@gmail.com"><span className='string'>"rajnayak2505@gmail.com"</span></Link>
                    </div>
                    <p className='cmnt'><span>&#47;</span><span>&#47;</span> my github repo</p>
                    <div>
                        <span className='const'>const</span>
                        <span className='name'>githubLink</span>
                        <span className='eql'>=</span>
                        <Link to="https://github.com/rajnayak2505"><span className='string'>"https://github.com/rajnayak2505"</span></Link>
                    </div>
                    <p className='cmnt'><span>&#47;</span><span>&#47;</span> my linkedin Page</p>
                    <div>
                        <span className='const'>const</span>
                        <span className='name'>linkedinPage</span>
                        <span className='eql'>=</span>
                        <Link to="https://www.linkedin.com/in/rajesh-m-nayak/"><span className='string'>"https://www.linkedin.com/in/rajesh-m-nayak"</span></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hello