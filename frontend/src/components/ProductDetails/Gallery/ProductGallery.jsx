import React, { useState } from 'react'
import './productGallery.css'
import Data from '../../../data.json'
import Slider from "react-slick";
const ProductGallery = ({singleProduct}) => {
  const [selectedImage, setSelectedImage] = useState({
    img:singleProduct.img[0],
    imgIndex:0,
  }
  )
  console.log(singleProduct.img[0]);
  
  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextBtn/>,
    prevArrow: <PrevBtn/>,
  };

  function NextBtn({onClick}) {
      return(
        <button style={{zIndex:2}}  onClick={onClick} className="glide__arrow glide__arrow--right" data-glide-dir=">">
        <i className="bi bi-chevron-right"></i>
      </button>
      )
  }
  function PrevBtn({onClick}){
    return(
      <button  style={{zIndex:2}} onClick={onClick} className="glide__arrow glide__arrow--left" data-glide-dir="<">
            <i className="bi bi-chevron-left"></i>
          </button>
    )
  }
  return (
    <div className="product-gallery">
      <div className="single-image-wrapper">
        <img src={`${selectedImage.img}`} id="single-image" alt="" />
      </div>
      <div className="product-thumb">
        <div className="glide__track" data-glide-el="track">
          <ol className="gallery-thumbs glide__slides">
          <Slider {...settings}>
            {
              singleProduct.img.map((item,index) => (
                <li onClick={() => setSelectedImage({img:item,imgIndex:index})} key={index} className="glide__slide glide__slide--active">
                <img 
                src={`${item}`} 
                alt="" 
                className={`img-fluid ${selectedImage.imgIndex === index ? 'active' : ''}`} />
              </li>
              ))
            }
           </Slider>

        
          </ol>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
          
         
        </div>
      </div>
    </div>
  )
}

export default ProductGallery