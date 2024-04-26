import React from 'react'
import Box from './Box'
import './Courses.css'
import Navbar from './Navbar'
const Courses = () => {
  return (
   <>
   <Navbar active='courses'></Navbar>
   <div id="coursebody" className='ccc'>
   <Box/>

   </div>
   </>
  )
}

export default Courses