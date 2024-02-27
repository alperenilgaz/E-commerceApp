import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import ProductItem from './ProductItem'
import './product.css'
const Product = () => {
  return (
    <section className="products">
    <div className="container">
        <SectionTitle title = {"New Arrivals"} desc = {"Summer Collection New Morden Design"}/>
      <div className="product-wrapper product-carousel2">
        <div className="glide__track" data-glide-el="track">
          <ul className="product-list glide__slides">
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            
          </ul>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
          <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
            <i className="bi bi-chevron-left"></i>
          </button>
          <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Product