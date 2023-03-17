import { useEffect, useRef, useState } from 'react'
import '../NeonButton/index.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Loader from 'react-loaders'
import AnimatedLetter from '../Animation'
import './index.scss'
import emailjs from '@emailjs/browser';
// import Button from '../NeonButton'


const Contact = () => {

    const [letterClass, setLetterClass] = useState("text-animate")
    const nameArr = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']
    const form = useRef();

    useEffect(() => {
        setTimeout(() => {
          return  setLetterClass('text-animate-hover')
        },3000)
    },[])

    const sendEmail = (e) => {
        // e.preventDefault();

    emailjs.sendForm('service_stjmmtx', 'template_d6trvfy', form.current, '0VsN-OJYPeFcYJck5')
      .then((result) => {
          console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
      });

    }

  return (
    <>
        <div className='container contact-page' >
            <div className='text-zone'>
                <h1>
                    <AnimatedLetter letterClass={letterClass} strArray={nameArr} idx={15} />
                </h1>
                <p>I am instrested in freelance opportunities - especially ambitious
                    or large projects. However, if you have other request or question,
                    don't hesitate to contact me using below form either. 
                </p>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' placeholder='Name' name='name' required />
                            </li>
                            <li className='half'>
                                <input type='email' placeholder='Email' name='email' required />
                            </li>
                            <li>
                                <input type='text' placeholder='Subject' name='subject' required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND' /> 
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className="info-map">
          Rishi Raj Singh,
          <br />
          India,
          <br />
          Ektanagar raibareli road, 226301 <br />
          Lucknow <br />
          <br />
          <span>rrishi535@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[26.7375583, 80.9509405]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[26.7375583, 80.9509405]}>
              <Popup>Rishi lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
        </div>
    <Loader  type="pacman" />
    </>
  )
}

export default Contact;
