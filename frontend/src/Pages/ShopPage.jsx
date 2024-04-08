import React from 'react'
import Header from '../components/Layout/Header/Header'
import Categories from '../components/Categories/Categories'
import Product from '../components/Products/Product'

import Policy from '../components/Layout/Policy/Policy'
import Footer from '../components/Layout/Footer/Footer'
const ShopPage = () => {
  return (
    <>
      <Categories/>
      <Product/>

      <Product/>
      <Policy/>

    </>
  )
}

export default ShopPage