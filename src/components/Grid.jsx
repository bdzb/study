import React, { useState } from 'react';
import './Grid.css';

const Grid = (props) => {
  // Initialize head state with an initial value
  const [head, setHead] = useState('');

  // Assign props.data1 to variable x
  let x = props.data1;

  // Access head property from variable x
  console.log(x.head);

  return (
    <>
      <div className="contain">
        <div className="boxx b1">{head}</div>
      <img className='b2 bb' src={props.data1.img1} alt="" />
       <img className='b3 bc' src={props.data1.img3} alt="" />
        <img className='b4 bb' src={props.data1.img2} alt="" />
      </div>
    </>
  );
};

export default Grid;
