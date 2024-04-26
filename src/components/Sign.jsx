
import React, { useState, useEffect } from 'react';
import './Signn.css';
import NavSign from './Nav-sign';
import Footer from './Footer';

const Sign = () => {
  const backgrounds = [
    '/p11.jpg',
   '/p0.jpg',
   '/p4.jpg',
    '/p3.jpg'
  ];

  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const changeBackground = () => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    };

    const intervalId = setInterval(changeBackground, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div id="body" className="background"
        style={{
          backgroundImage: `url(${backgrounds[backgroundIndex]})`,
          position: 'fixed',
          top: 0,
          left: 0,
         
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          transition: 'background-image 1s ease-in-out',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <NavSign />
        <div id='logo'>
          
        </div>
        <div id="cover">
          <div id="sign-box" 
            style={{
              backgroundImage: `url(${backgrounds[backgroundIndex]})`,
             
              
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              transition: 'background-image 1s ease-in-out',
              overflowX:'hidden',
            
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="overlay">
              <label htmlFor="">Username:
                <input type="text" name="username" id="username" placeholder='Enter your username' />
              </label>
              <label htmlFor="">Email:
                <input type="email" name="email" id="email" placeholder='Enter your email' />
              </label>
              <label htmlFor="">Password:
                <input type="password" name="password" id="password" placeholder='Enter your password' />
              </label>
              <label htmlFor="">Date of Birth:
                <input type="date" name="dob" id="dob" placeholder='Enter your date of birth' />
              </label>
              <label htmlFor="">City:
                <input type="text" name="city" id="city" placeholder='Enter your city name' />
              </label>
              <button id='signin'><a href="/about">Sign In</a></button>
            </div>
          </div>
        </div>
      </div>
      <div id='Footer'>
        <Footer />
      </div>
    </>
  );
};

export default Sign;