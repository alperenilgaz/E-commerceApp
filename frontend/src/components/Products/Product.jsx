import React, { useEffect, useState } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import ProductItem from './ProductItem'
import { message } from 'antd'
import Slider from "react-slick";
import './product.css'

const Product = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL
  const [products, setProducts] = useState([])
  
  useEffect(() => {
   const fetchProduct = async() => {
    try {
      const response = await fetch(`${apiUrl}/api/product`)
      if(response.ok){
        const data = await response.json()
        setProducts(data)
      }else{
        message.error("Veri Getirme Başarısız")
      }
    } catch (error) {
      console.log("Veri hatası",error);
    }
   }
   fetchProduct()
  },[apiUrl])
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
        <SectionTitle title = {"Ürünlerimiz"} desc = {"El işlemesi ile yapılmış ürünlerimiz"}/>
      <div className="product-wrapper product-carousel2">
        <div className="glide__track">
          <Slider  {...settings}>
              {
                products.map((product) => (
                  <ProductItem  product={product}/>
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