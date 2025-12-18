import React from 'react'
import { Carousel } from 'react-bootstrap';
import Firstslide from './84770f_1406897499474080bb0a986c3a2eba44~mv2.avif'
import secoundslide from './img2avif.avif'
import thiredslide from './84770f_b22b78850e964f75859b2954a48887dc~mv2.avif'
import {  Navigate, useNavigate } from 'react-router-dom';
import './Sliderbar.css';
const Sliderbar = () => {
  const  navigate= useNavigate();
  return (
    <div className='slidebar'>
      <div className='slidebar2'>
<h1>TIMELESS QUALITY</h1>
<p>I'm a paragraph. Click here to add your own text and edit me.<br></br>
 I’m a great place for you to tell a story and let your<br></br> users know a little more about you.</p>
 <button  onClick={() => navigate("/cart")}>Shop now</button>
</div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Firstslide}
          alt=""
         
        />
        {/* <Carousel.Caption>
          <div style={{color:'black'}}>
          <h3>First Slide Label</h3>
          <p>Some description text here.</p>
          </div>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={secoundslide}
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h3>Second Slide Label</h3>
          <p>More text here.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={thiredslide}
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third Slide Label</h3>
          <p>More description.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
   </div> 
  );
}
export default Sliderbar