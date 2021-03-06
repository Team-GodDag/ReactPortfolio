import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
   const [letterClass, setLetterClass] = useState('text-animate')
   const form = useRef()

   useEffect(() => {
      setTimeout(() => {
         setLetterClass('text-animate-hover')
      }, 4000)
   }, [])

   const sendEmail = (e) => {
      e.preventDefault()

      emailjs
         .sendForm(
            'gmail',
            'template_YeJhZkgb',
            form.current,
            'your-token'
         )
         .then(
            () => {
               alert('Message successfully sent!')
               window.location.reload(false)
            },
            () => {
               alert('Failed to send the message, please try again')
            }
         )
   }

   const position = [51.505, -0.09]

   return (
      <>
         <div className="container contact-page">
            <div className="text-zone">
               <h1>
                  <AnimatedLetters
                     letterClass={letterClass}
                     strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'U', 's']}
                     idx={15}
                  />
               </h1>
               <p>
               Contact us now to make your next project stand out from the crowd.
               </p>
               <div className="contact-form">
                  <form ref={form} onSubmit={sendEmail}>
                     <ul>
                        <li className="half">
                           <input placeholder="Name" type="text" name="name" required />
                        </li>
                        <li className="half">
                           <input
                              placeholder="Email"
                              type="email"
                              name="email"
                              required
                           />
                        </li>
                        <li>
                           <input
                              placeholder="Subject"
                              type="text"
                              name="subject"
                              required
                           />
                        </li>
                        <li>
                           <textarea
                              placeholder="Message"
                              name="message"
                              required
                           ></textarea>
                        </li>
                        <li>
                           <input type="submit" className="flat-button" value="SEND" />
                        </li>
                     </ul>
                  </form>
               </div>
            </div>
            <div className="info-map">
               Team God Dag,
               <br />
               Denmark,
               <br />
               Gl. Landevej 2, 7400 <br />
               Herning <br />
               <br />
               <span>teamgoddag@gmail.com</span>
            </div>

            <div className="map-wrap">
               <MapContainer center={[56.143519616070705, 8.979911003912767]} zoom={16}>
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={[56.143519616070705, 8.979911003912767]}>
                     <Popup>We work here, stop by for a coffee and a chat</Popup>
                  </Marker>
               </MapContainer>
            </div>
         </div>
         <Loader type="line-scale-pulse-out-rapid" />
      </>
   )
}

export default Contact