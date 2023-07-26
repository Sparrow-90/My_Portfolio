import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdOutlineSchool} from 'react-icons/md';
import {PiMaskHappyFill} from 'react-icons/pi'
import {BsCameraReelsFill} from 'react-icons/bs'
import {MdOutlineComputer} from 'react-icons/md'
import '../styles/Experience.css'
import experienceIMG from '../img/classic.jpg'

const Experience = () => {
  return (
    <div className='experience'>
        <img src={experienceIMG} alt="" className="experience-img" />
        <VerticalTimeline lineColor='#f2e0a4'>
            <VerticalTimelineElement 
            className='vertical-timeline-element--education'
            date='2009 - 2012' 
            iconStyle={{background: '#cb9f5c', color:'#fff'}}
            icon={<MdOutlineSchool/>}
            >
                <h3 className='vertical-timeline-element-title'>UMCS Lublin</h3>
                <p>Pedagogy: Animator and Cultural Manager</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement 
            className='vertical-timeline-element--education'
            date='2012 - 2016' 
            iconStyle={{background: '#cb9f5c', color:'#fff'}}
            icon={<MdOutlineSchool/>}
            >
                <h3 className='vertical-timeline-element-title'>UJ Kraków</h3>
                <p>Pedagogy: Social and Cultural Animation</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement 
            className='vertical-timeline-element--education'
            date='2012 - 2021' 
            iconStyle={{background: 'lightcoral', color:'#fff'}}
            icon={<PiMaskHappyFill/>}
            >
                <h3 className='vertical-timeline-element-title'>Teatr Figur Kraków</h3>
                <p>Actor, Theater Pedagogue</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement 
            className='vertical-timeline-element--education'
            date='2021 - now' 
            iconStyle={{background: 'lightcoral', color:'#fff'}}
            icon={<BsCameraReelsFill/>}
            >
                <h3 className='vertical-timeline-element-title'>Interia</h3>
                <p>Image and Sound Operator</p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement 
            className='vertical-timeline-element--education'
            date='From January 2023' 
            iconStyle={{background: 'lightseagreen', color:'#fff'}}
            icon={<MdOutlineComputer/>}
            >
                <h3 className='vertical-timeline-element-title'>Frontend Developer</h3>
                <p>Self-education</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

export default Experience