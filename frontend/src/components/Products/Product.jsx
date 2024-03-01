import React, { useContext, useState } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import ProductItem from './ProductItem'
import Data from '../../data.json'
import Slider from "react-slick";
import './product.css'

const Product = () => {
  const [products] = useState(Data)

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextBtn/>,
    prevArrow: <PrevBtn/>,
    autoplaySpeed:3000,
    autoplay:true,
    responsive:[
      {
      breakpoint:992,
      settings:{
        slidesToShow:2
      }
    },
    {
      breakpoint:520,
      settings:{
        slidesToShow:1
      }
    }
  ]
  };

  function NextBtn({onClick}) {
      return(
        <button onClick={onClick} className="glide__arrow glide__arrow--right" data-glide-dir=">">
        <i className="bi bi-chevron-right"></i>
      </button>
      )
  }
  function PrevBtn({onClick}){
    return(
      <button onClick={onClick} className="glide__arrow glide__arrow--left" data-glide-dir="<">
      <i className="bi bi-chevron-left"></i>
    </button>
    )
  }
  return (
    <section className="products">
    <div className="container">
        <SectionTitle title = {"New Arrivals"} desc = {"Summer Collection New Morden Design"}/>
      <div className="product-wrapper product-carousel2">
        <div className="glide__track">
          <Slider {...settings}>
              {
                products.map((item) => (
                    <ProductItem   item={item} key={item.id}/>
                ))
              }
            </Slider>  
        </div>
        <div className="glide__arrows" data-glide-el="controls">
      
         
        </div>
      </div>
    </div>
  </section>
  )
}

export default Product