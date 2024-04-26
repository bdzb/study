import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
 
import React from 'react'

const Slides = () => {
  const slides = [
    { title: 'First item', description: 'Lorem ipsum'},
    { title: 'Second item', description: 'Lorem ipsum'},
    { title: 'Second item', description: 'Lorem ipsum'}

  ];
  return (
    <Slider>
    
    {slides.map((slide, index) => <div key={index}>
      <h2>{slide.title}</h2>
      <div>{slide.description}</div>
    </div>)}
  </Slider>
  )
}

export default Slides

