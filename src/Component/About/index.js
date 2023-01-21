import { useEffect, useState } from 'react';
import AnimatedLetter from '../Animation';
import rishirajsingh from '../../Assets/rishirajsingh.png'
import './index.scss'
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass ] = useState('text-animate')

    useEffect(()=>{
        setTimeout(()=>{
           return setLetterClass('text-animate-hover')
        },4000)
    },[])


    const arr = ['M', 'e', ',', ' ', 'M', 'y', 's', 'e', 'l', 'f', ' ', '&', ' ', 'I']
    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetter  letterClass={letterClass} strArray={arr}  idx={15} />
                </h1>
                <p>
                    I'm very ambitious Full stack web developer looking for a role in 
                    established IT company with the opportunitiy to work with latest
                    technologies on challenging and diverse projects.
                </p>
                <p>
                    If I need to defined myself in one sentence that would be a
                    family person, Travel all over the world, a sports fanatic,
                    photography enthusiast,and tech-obsessed!!! 
                </p>
            </div>
            <div className="logoPic">
                <img src={rishirajsingh} alt='logo'/>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default About;