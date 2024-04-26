import React from 'react';
import jsonData from './details.json';
import './Detail.css';
import Navbar from './Navbar';
import IIT from './IIT.jpg';
import JAVA from "./JAVA.jpg";
import { Link } from 'react-router-dom';
import C from "./C++.jpg";

const Detail = (props) => {
  console.log(props.data);
  let course;
  let logo;
  if (props.data === 'IIT') {
    logo = IIT;
    course = jsonData.IIT;
  } else if (props.data === 'JAVA') {
    logo = JAVA;
    course = jsonData.JAVA;
  } else if (props.data === 'C++') {
    logo = C;
    course = jsonData['C++'];
  }
  let benefits = course.benefits;
let syllabus=course.syllabus;
  // Generate JSX elements for benefits
  const syllabusitems=syllabus.map((syllab,index1) => (
    <li key={index1} >{syllab}</li>
  ));
  const benefitItems = benefits.map((benefit, index) => (
    <li key={index}>{benefit}</li>
  ));
let teachers=course.teachers;
  const teachersitem = teachers.map((teacher, index3) => (
    <div className='a'>
    <li key={index3}>{teacher.name}</li>
    <li key={++index3}>Expertise in:{teacher.expertise}</li>
    </div>
  ));

  // If you need this data, ensure it's used appropriately
  return (
    <div id="b">
      <div id="top">
        <Navbar active={'courses'} />
      </div>
      <div id="bottom">
        <div id="img">
          <div className="courseimg">
            <img src={logo} height="300px" width="100%" alt="" />
            <div className="overlay">{course.course_name}</div> 
            <div className="data">
              <button  className='btn'>Price:{course.price}</button>
              <button className='btn'>Start Date:{course.start_date}</button>
              <button className='btn'>Duration:{course.duration}</button>
              <button className='btn'>
              <Link to={{ pathname:'/'+`${props.data}` }}>Trial Video</Link>
          </button>
            </div>
            
          </div>
        </div>
        <div id="content">
          <div className="benefits">
            <h2>Benefits:</h2>
            <br />
            <br />
            <ol className='ul'> 
              {benefitItems} 
            </ol>
          </div>
          <div className="teachers">
            <h2 style={{marginLeft:'100px'}}>Faculties</h2>
            <br />
          <ul className="ull">
            {teachersitem}

          </ul>
          </div>
          <div className="syllabus">
            
            <ol className='ol'>    
            <h2 className='h2'>Syllabus:</h2> 
            <br />
                   
{syllabusitems}
</ol>
          </div>
          {/* Add content here if needed */}
        </div>
      </div>
    </div>
  );
}

export default Detail;
