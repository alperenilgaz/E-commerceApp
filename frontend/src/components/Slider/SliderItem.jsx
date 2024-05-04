import React from 'react'
import './slider.css'
function SliderItem({slider}) {
  console.log(slider);
  return (
    <div className="slider-item fade">
    <div className="slider-image">
      <img src={slider.img} className="img-fluid" alt="" />
    </div>
  </div>
  )
}

export default SliderItem