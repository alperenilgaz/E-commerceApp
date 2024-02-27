import React from 'react'
import SliderItem from './SliderItem'

function Slider() {
  return (
    <section class="slider">
    <div class="slider-elements">
     <SliderItem/>
      <div class="slider-buttons">
        <button>
          <i class="bi bi-chevron-left"></i>
        </button>
        <button >
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>
      <div class="slider-dots">
        <button class="slider-dot active" >
          <span></span>
        </button>
        <button class="slider-dot">
          <span></span>
        </button>
        <button class="slider-dot">
          <span></span>
        </button>
      </div>
    </div>
  </section>
  )
}

export default Slider