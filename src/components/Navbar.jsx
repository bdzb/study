import React from 'react'
import { useState,useEffect } from 'react';
import './Navbar.css'
const navbar = (prop) => {


useEffect(() => {
  
let x=document.getElementById(`${prop.active}`)
x.classList.add('hover');
  
}, [])


  function welcome()
  {
    
    const login=document.getElementById('login');
    login.textContent='welcome to family';

    
  }
  function bye()
  {
    const logyoin=document.getElementById('login');
    logyoin.textContent='Login/Register';
    
  }
  return (
    <>
    <div className="nav" id='navbar'>
      <img src="src\components\channels4_profile.jpg" alt=""  height={'100px'} style={{paddingLeft:'200px', borderRadius:'60px'}}/>
    <ul>
      
      <li id='courses'><a href="/courses">Courses</a></li>
      <li id='past'><a href="/Dashboard">Dashboard</a></li>
      <li id='about'><a href="/about">About Us</a></li>
      <li id='store'><a href="/store">Store</a></li>
      
      <a href="/sign"> <button id='login' onMouseOver={welcome} onMouseLeave={bye} style={{marginLeft:'200px'}}> Login/Register</button></a>
      
    </ul>
    </div>
    
    </>
  )
}

export default navbar