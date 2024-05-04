import React, { useEffect, useState } from 'react'
import SliderItem from './SliderItem'
import { message } from 'antd'

function Slider() {
  const [currentSlide, setcurrentSlide] = useState(0)
  const apiUrl = import.meta.env.VITE_API_BASE_URL
  const [sliders, setSliders] = useState([])
  const nextSlide = () => {
    setcurrentSlide((prevSlide) =>(prevSlide+1)%3)
  }
  
  const prevSlide = () => {
    setcurrentSlide((prevSlide) =>(prevSlide -1 + 3)%3)
  }
  useEffect(() => {
    const fetchSlider = async() => {
      try {
        const response = await fetch(`${apiUrl}/api/slider`)
        if(response.ok){
          const data = await response.json()
          setSliders(data)
        }else{
          message.error("veri getirme hatası")
        }
      } catch (error) {
        console.log("veri hatası",error);
      }
    }
    fetchSlider()
  },[apiUrl])

  return (
    <section className="slider">
    <div className="slider-elements">
      {
        sliders.map((slider,index) => (
          currentSlide === index && <SliderItem slider={slider} key={slider._id}/>
        ))
      }
    

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