import React from 'react'
import './productDetails.css'
import Reviews from '../Reviews/Reviews'
import BreadCrumb from './BreadCrumb/BreadCrumb.jsx'
import ProductGallery from './Gallery/ProductGallery.jsx'
import ProductInfo from './ProductInfo/ProductInfo.jsx'
const ProductDetails = () => {
  return (
    <section className="single-product">
      <div className="container">
        <div className="single-product-wrapper">

          <div className="single-topbar">
          <BreadCrumb/>
          </div>
 
          <div className="single-content">
            <main className="site-main">
              <ProductGallery/>
              <ProductInfo/>
            </main>
          </div>
         


        </div>
      </div>
    </section>
  )
}

export default ProductDetails