import React from 'react'
import './productDetails.css'
 
import BreadCrumb from './BreadCrumb/BreadCrumb.jsx'
import ProductGallery from './Gallery/ProductGallery.jsx'
import ProductInfo from './ProductInfo/ProductInfo.jsx'
import ProdctTabs from './ProductTabs/ProductTabs.jsx'
const ProductDetails = ({singleProduct,setSingleProduct}) => {

  return (
    <section className="single-product">
      <div className="container">
        <div className="single-product-wrapper">

          <div className="single-topbar">
          <BreadCrumb/>
          </div>
 
          <div className="single-content">
            <main className="site-main">
              <ProductGallery singleProduct={singleProduct}/>
              <ProductInfo singleProduct={singleProduct}/>
            </main>
          </div>
         
    <ProdctTabs setSingleProduct={setSingleProduct} singleProduct={singleProduct}/>

        </div>
      </div>
    </section>
  )
}

export default ProductDetails