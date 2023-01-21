import "./index.scss"
import LogoS from '../../Assets/newR.png'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import AnimatedLetter from "../Animation"
import Button from "../NeonButton"
import Loader from "react-loaders"
// import AnimatedLetter from "../AnimatedLetter"


const Home = () => {

    const [letterClass, setLetterClass ] = useState('text-animate')
    const nameArr = ['i', 's', 'h', 'i', ' ', 'R', 'a', 'j', ' ', 'S', 'i', 'n', 'g', 'h' ]
    const jobArr = ['F', 'u', 'l', 'l', ' ', 'S', 't', 'a', 'c', 'k', ' ' ,'W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'] 

    useEffect(()=>{
        setTimeout(()=>{
           return setLetterClass('text-animate-hover')
        },4000)
    },[])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span> 
                     <br/>
                     <span className={`${letterClass} _13`}>I</span>
                     <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoS}  alt="developer" />
                <AnimatedLetter letterClass={letterClass} strArray={nameArr} idx={20} />
                <br/>
                <AnimatedLetter letterClass={letterClass} strArray={jobArr} idx={34} />
                </h1>
                <h2>Frontend Developer / Javascript / React.js</h2>
                <Link ><Button/></Link>
            </div>
            {/* <div className="logoPic">
                <img src={rishirajsingh} alt='logo'/>
            </div> */}

        </div>
        <Loader type='pacman' />
        </>
    ) 

}

export default Home