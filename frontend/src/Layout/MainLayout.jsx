import React from 'react'
import Header from '../components/Layout/Header/Header'
import Footer from '../components/Layout/Footer/Footer'
import PropTypes from 'prop-types'
const MainLayout = ({children}) => {
  return (
    <>
        <Header/>
        {children}
        <Footer/>
    </>
  )
}

export default MainLayout

MainLayout.PropTypes = {
    children:PropTypes.node
}