import React from 'react'
import Sign from './components/Sign'
import Courses from './components/Courses'
import './App.css'
import About from './components/About'
import Detail from './components/Detail.module'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Slides from './Slider'
import Video from './components/Video'
const App = () => {
  return (
   <>

         <Routes>
         <Route path='/' element={<About/>}/>
<Route path='/IIT' element={<Video  prop={"IIT.mp4"}/>}/>
<Route path='/C++' element={<Video  prop={"C++.mp4"}/>}/>
<Route path='/JAVA' element={<Video  prop={"JAVA.mp4"}/>}/>
<Route path='/detail/IIT' element={<Detail data={"IIT"}/>}></Route>
<Route path='/courses' element={<Courses/>}/>
<Route path='/sign' element={<Sign/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/detail/JAVA' element={<Detail data={'JAVA'}/>}></Route>
<Route path='/detail/C++' element={<Detail data={'C++'}/>}></Route>
 {/* <Route path='/results' element={<Result/>}/> */}
{/* <Route path='/store' element={<Store/>}/>  */}
          </Routes> 
{/*      
  <Slides></Slides> */}
  
      </>
  )
}

export default App