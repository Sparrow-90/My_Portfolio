import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../styles/Navbar.css"
import { CiMenuFries } from 'react-icons/ci'
const Navbar = () => {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();

    useEffect(()=>{
        setExpandNavbar(false)
    },[location])
  return (
    <nav id={expandNavbar ? 'open' : 'close'}>
        <div className='toggleButton'>
            <button onClick={()=>{setExpandNavbar((prev)=>!prev)}}><CiMenuFries/></button>
        </div>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experience">Experience</Link>
        </div>
    </nav>
  )
}

export default Navbar