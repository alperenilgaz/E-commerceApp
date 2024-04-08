import React from 'react'
import Header from '../components/Layout/Header/Header'
import Policy from '../components/Layout/Policy/Policy'
import Slider from '../components/Slider/Slider'
import Categories from '../components/Categories/Categories'
import Product from '../components/Products/Product'

import Brands from '../components/Brands/Brands'


const HomePage = () => {
  return (
        <>       
        <Policy/>
        <Slider/>
        <Categories/>
        <Product/>
        <Brands/>
        
        </>
  )
}

export default HomePage