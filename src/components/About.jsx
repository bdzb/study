import React from 'react'
import Navbar from './Navbar.jsx'
import './About.css'
import WordByWordDisplay from './WordByWordDisplay.jsx'
import Footer from './Footer.jsx'
import Key from './Key.jsx'
const About = () => {

  return (
   <>
 
   <Navbar active='about'/>
  
   <div id="homebody">
    <div id="about">
      <video src="public\New Project - Made with Clipchamp.mp4" loop controls></video>
    </div>
    <div id="left">

       
      
   <WordByWordDisplay paragraph={"Welcome to StudyHub, where learning meets limitless possibilities! Are you ready to unlock your full academic potential? With StudyHub, you're not just a student, you're an educational pioneer equipped with the finest tools of the digital age. Say goodbye to one-size-fits-all learning and hello to personalized mastery. Our cutting-edge ed tech platform offers tailor-made training, real-time tutoring, and an expansive online library bursting with knowledge waiting to be explored. Whether you're conquering complex concepts or diving into diverse subjects, StudyHub is your passport to success. Join us on this exhilarating journey of discovery, where every click brings you closer to your dreams. The future of education is here, and it starts with you on StudyHub."}/>

    </div>

      <div id="personalised"> <Key></Key> </div>

      <div id='footer'>
      <Footer></Footer>
      </div>
   </div>



   </>
  )
}

export default About