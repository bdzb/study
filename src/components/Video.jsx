import React from 'react'
import Navbar from './Navbar'
import './Video.css'
import { useState } from 'react'
const Video = (prop) => {
  let title=prop.prop;
 let x= title.split('.')
 let y=x[0];
const[buy,setbuy]=useState('');

const[bool,setbool]=useState(false);
 function end()
 {
  setbuy({y});
  setbool(true);
 }

  return (
    <>
    <Navbar active='courses'></Navbar>

    <div id="vidbody">
      <img className='logoo' src="channels4_profile-removebg-preview.png" alt="" />
      <h1>best course for {y} </h1>
    <video id='vid' src={prop.prop} controls onEnded={end}></video>
    </div>
    {setbool? <p id='PP'>BUY {setbuy} COURSE</p>:
    <p></p>}
    </>
  )
}

export default Video