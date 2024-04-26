import React from 'react';
import Grid from './Grid';
import './Key.css';

const Key = () => {
  let data1 = {
    img1: "personalised1.png",
    img2: "personalised2.jpg",
    img3: "personalised3.jpg",
    head: "Personalised Study"
  };

  // Define default props for Grid component
  const defaultData1 = {
    img3: "lib1.png",
    img1: "lib3.jpeg",
    img2: "lib2.png",
    head: "Default Head"
  };
  const defaultData2 = {
    img1: "mentor1.jpg",
    img2: "mentor2.jpeg",
    img3: "mentor3.jpg",
    head: "Default Head"
  };

  return (
    <>
      {/* Render Grid component with data1 */}
      <Grid data1={data1}></Grid>

      {/* Render Grid component with default props */}
      <Grid data1={defaultData1}></Grid>

      {/* Render Grid component with default props */}
      <Grid data1={defaultData2}></Grid>
    </>
  );
};

export default Key;
