import React from 'react'
import '../styles/About.css'
import profileImg from '../img/fotoMW.jpg'
import AboutImg from '../img/classic.jpg'
import {FaCss3Alt, FaHtml5, FaReact, FaGitAlt, FaFigma, FaSass, FaBootstrap} from 'react-icons/fa'
import {SiJavascript, SiTailwindcss} from 'react-icons/si'

const About = () => {
  return (
    <div className='about'>
        <section className="img-container">
            <img src={profileImg} alt="" />
        </section>
        <section className="description-container">
        <img className='bg-about' src={AboutImg} alt="" />
            <h1>About me</h1>
            <p>I am an ambitious and dedicated programming enthusiast who aspires to develop my skills as a Frontend Developer. I have a solid foundation in HTML, CSS, and JavaScript. Currently, I am working on my projects using frameworks like React. I am seeking an opportunity to gain my first professional experience in the industry to leverage my passion for creating websites and applications. I am ready to engage in new projects and put effort into advancing my skills. </p>
            <div className="tech-stack">
                <FaHtml5/> <FaCss3Alt/><FaSass/><FaBootstrap/><SiJavascript/><FaReact/><FaGitAlt/><SiTailwindcss/><FaFigma/>
            </div>
        </section>
    </div>
  )
}

export default About