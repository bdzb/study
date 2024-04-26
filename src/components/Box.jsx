import React from "react";
import { useState } from "react";
import './Box.css'
import { Link } from "react-router-dom";
const Box = () => {
  // Define state variables using useState hook
  const [box1ClassName, setBox1ClassName] = useState('defaultClassName');
  const [box2ClassName, setBox2ClassName] = useState('defaultClassName');
  const [box3ClassName, setBox3ClassName] = useState('defaultClassName');
  const [trial, setTrial] = React.useState(false);
  const [value, setValue] = React.useState('');

  // Function to handle button click and change the class of all boxes
  const handleButtonClick = (boxId) => {
    // Change the class of box1
    if (boxId === 'box1') {
      setBox1ClassName('hover');
      setBox2ClassName('defaultClassName');
      setBox3ClassName('defaultClassName');
    }
    // Change the class of box2
    else if (boxId === 'box2') {
      setBox1ClassName('defaultClassName');
      setBox2ClassName('hover');
      setBox3ClassName('defaultClassName');
    }
    // Change the class of box3
    else if (boxId === 'box3') {
      setBox1ClassName('defaultClassName');
      setBox2ClassName('defaultClassName');
      setBox3ClassName('hover');
    }
  };

  // Function to handle trial button click
  const handleTrialButtonClick = () => {
    // Implement functionality here, if needed
    // You can use dataToPass if necessary
  };



 
  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

 
  return (
    <>
      <div id='aside'>
        <div className='co'>COURSES</div>
        {/* Render buttons for each course */}
        <button className='box1 box' onClick={() => handleButtonClick('box1')}>IIT-JEE</button>
        <button className='box2 box' onClick={() => handleButtonClick('box2')}>JAVA AND DSA</button>
        <button className='box3 box' onClick={() => handleButtonClick('box3')}>C++ AND DSA</button>
      </div>

      <div id="box-container">
        {/* Render boxes with dynamically changed classes */}
        <div id="box1" className={box1ClassName}>
          <div className="CourseName">IIT-JEE</div>
          <div className="Price">$50</div>
          <div className="poster"><img src="https://i.pinimg.com/736x/40/af/09/40af0927b6f03ac0c8c7c68eb36e631f.jpg" height={300} width={400} alt="" /></div>
          <button className="btnbuy">Buy</button>
          <button id='box1trial' className='trial' onClick={handleTrialButtonClick}>
            {/* Render Link for trial video */}
            <Link to={{ pathname: '/IIT'}}>Trial Video</Link>
          </button>
          <button id='Know' className="know"><Link to={{ pathname: '/detail/IIT'}}>know more</Link></button>
        </div>
        <div id="box2" className={box2ClassName}>
          <div className="CourseName">JAVA AND DSA</div>
          <div className="Price">$50</div>
          <button className="btnbuy">Buy</button>
          <div className="poster"><img src="https://user-images.githubusercontent.com/102843159/211679770-ba6259bb-e87b-4932-b59c-f283d2628d7b.jpg" height={300} width={400} alt="" /></div>
          <button id='box1trial' className='trial' onClick={handleTrialButtonClick}>
            {/* Render Link for trial video */}
            <Link to={{ pathname: '/JAVA'}}>Trial Video</Link>
          </button>
          <button id='Know' className="know"><Link to={{ pathname: '/detail/JAVA'}}>know more</Link></button>
        </div>
        <div id="box3" className={box3ClassName}>
          <div className="CourseName">C++ AND DSA</div>
          <div className="Price">$50</div>
          <button className="btnbuy">Buy</button>
          <div className="poster"><img src="https://repository-images.githubusercontent.com/403817624/3d10f761-1027-4d0a-9906-48361e466d87" height={300} width={400} alt="" /></div>
          <button id='box1trial' className='trial' onClick={handleTrialButtonClick}>
            {/* Render Link for trial video */}
            <Link to={{ pathname: '/C++'}}>Trial Video</Link>
          </button>
          <button id='Know' className="know"><Link to={{ pathname: '/detail/C++'}}>know more</Link></button>
        </div>
      </div>
    </>
  );
};

// Export the Box component
export default Box;