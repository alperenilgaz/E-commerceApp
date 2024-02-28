import React from 'react'
import Header from '../components/Layout/Header/Header'
import Policy from '../components/Layout/Policy/Policy'
import Slider from '../components/Slider/Slider'
import Categories from '../components/Categories/Categories'
import Product from '../components/Products/Product'
import Campaign from '../components/Campaign/Campaign'
import Blog from '../components/Blog/Blog'
import Brands from '../components/Brands/Brands'
import CampaignSingle from '../components/CampaignSingle.jsx/CampaignSingle'
import Footer from '../components/Layout/Footer/Footer'

const HomePage = () => {
  return (
        <>       
        <Policy/>
        <Slider/>
        <Categories/>
        <Product/>
        <Campaign/>
        <Product/>
        <Blog/>
        <Brands/>
        <CampaignSingle/>
        </>
  )
}

export default HomePage