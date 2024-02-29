import React, { useState } from 'react'
import SliderItem from './SliderItem'

function Slider() {
  const [currentSlide, setcurrentSlide] = useState(0)

  const nextSlide = () => {
    setcurrentSlide((prevSlide) =>(prevSlide+1)%3)
  }
  
  const prevSlide = () => {
    setcurrentSlide((prevSlide) =>(prevSlide -1 + 3)%3)
  }

  return (
    <section className="slider">
    <div className="slider-elements">
      {currentSlide === 0 && <SliderItem ImageSrc={"img/slider/slider1.jpg"}/>}
      {currentSlide === 1 &&  <SliderItem ImageSrc={"img/slider/slider2.jpg"}/>}
      {currentSlide === 2 &&  <SliderItem ImageSrc={"img/slider/slider3.jpg"}/>}
     
    

      <div className="slider-buttons">
        <button onClick={prevSlide}>
          <i className="bi bi-chevron-left"></i>
        </button>
        <button onClick={nextSlide} >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
      <div className="slider-dots">
        <button onClick={() => setcurrentSlide(0)} className={`slider-dot ${currentSlide === 0 && 'active'}`} >
          <span></span>
        </button>
        <button onClick={() => setcurrentSlide(1)} className ={`slider-dot ${currentSlide === 1 && 'active'}`}>
          <span></span>
        </button>
        <button onClick={() => setcurrentSlide(2)} className={`slider-dot ${currentSlide === 2 && 'active'}`}>
          <span></span>
        </button>
      </div>
    </div>
  </section>
  )
}

export default Slider