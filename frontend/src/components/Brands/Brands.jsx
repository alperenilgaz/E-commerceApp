import React from 'react'
import './brand.css'
import BrandItem from './BrandItem'

const Brands = () => {
  return (
    <section className="brands">
    <div className="container">
      <ul className="brand-list">
        <BrandItem/>
      </ul>
    </div>
  </section>
  )
}

export default Brands