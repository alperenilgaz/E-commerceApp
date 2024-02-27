import React from 'react'
import './slider.css'
function SliderItem() {
  return (
    <div class="slider-item fade">
    <div class="slider-image">
      <img src="img/slider/slider1.jpg" class="img-fluid" alt="" />
    </div>
    <div class="container">
      <p class="slider-title">SUMMER 2022</p>
      <h2 class="slider-heading">Save up to 70%</h2>
      <a href="#" class="btn btn-lg btn-primary">Explore Now</a>
    </div>
  </div>
  )
}

export default SliderItem