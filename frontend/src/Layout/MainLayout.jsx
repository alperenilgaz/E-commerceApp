import React, { useState } from 'react'
import Header from '../components/Layout/Header/Header'
import Footer from '../components/Layout/Footer/Footer'
import SearchModal from '../components/Modals/Search/SearchModal'

const MainLayout = ({children}) => {
    const [isSearchShow, setisSearchShow] = useState(false)
    
  return (
    <>
        <Header setisSearchShow={setisSearchShow}/>
        
        <SearchModal isSearchShow={isSearchShow} setisSearchShow={setisSearchShow}/>
        {children}
        <Footer/>
    </>
  )
}

export default MainLayout

