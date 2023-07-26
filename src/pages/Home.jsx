import React from 'react';
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'
import '../styles/Home.css';
import homeBg from '../img/classic2.jpg'

const Home = () => {
  return (
    <div className='home' >
        <section className='about'>
          <img src={homeBg} alt="" className="portfolio-img" />
            <header>
                <h1>Mateusz Wróbel</h1>
                <div className="prompt">
                    <p>Junior Frontend Developer with a passion for learning and creating</p>
                    <a href="https://www.instagram.com/wrobel.album/"><FaInstagram/></a>
                    <a href="https://www.linkedin.com/in/mateusz-wr%C3%B3bel-70195b197/">
                      <FaLinkedin />
                    </a>
                    <a href="https://github.com/Sparrow-90"><FaGithub/></a>
                </div>
            </header>
        </section>
    </div>
  )
}

export default Home