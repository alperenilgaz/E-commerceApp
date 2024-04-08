import React from 'react'
import './slider.css'
function SliderItem({ImageSrc}) {
  return (
    <div className="slider-item fade">
    <div className="slider-image">
      <img src={ImageSrc} className="img-fluid" alt="" />
    </div>
  </div>
  )
}

export default SliderItem