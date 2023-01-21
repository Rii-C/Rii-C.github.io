import './index.scss';
import { Link, NavLink } from "react-router-dom"

import LogoSub from "../../Assets/newR.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faFileVideo,  faHome, faS, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to ="/" >
            {/* <img src={LogoS} alt="logo"/> */}
            <img src={LogoSub} alt="Rii-C"/>
        </Link>
        <nav>
            <NavLink exact = "true" activexclassname ="active" to="/" >
                {/* <FontAwesomeIcon icon = {faHome} color ="4d4d4d4e" /> */}
                <p>HOME</p>
            </NavLink> 
            <NavLink exact = "true" activexclassname ="active"  className="about-link" to="/about" >
                {/* <FontAwesomeIcon icon = {faUser} color ="4d4d4d4e" />  */}
                <p>ABOUT</p>
            </NavLink>
            <NavLink exact = "true" activexclassname ="active"  className="skill-link" to="/skill" >
                {/* <FontAwesomeIcon icon = {faS} color ="4d4d4d4e" />  */}
                <p>SKILLS</p>
            </NavLink>
            <NavLink exact = "true" activexclassname ="active"  className="project-link" to="/project" >
                {/* <FontAwesomeIcon icon = {faFileVideo} color ="4d4d4d4e" />  */}
                <p>PROJECTS</p>
            </NavLink>
            <NavLink exact = "true" activexclassname ="active"  to="/contact" >
                {/* <FontAwesomeIcon icon = {faEnvelope} color ="4d4d4d4e" />  */}
                <p>CONTACT</p>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank"  rel='noreferrer' href='https://www.linkedin.com/in/rishi-raj-singh-r250599'>
                    <FontAwesomeIcon icon={faLinkedin}  color = "#4d4d4e"/> 
                </a>
            </li>
            <li>
                <a target="_blank"  rel='noreferrer' href='https://github.com/Rii-C'>
                    <FontAwesomeIcon icon={faGithub} color = "#4d4d4e" /> 
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;