import React, { useState } from 'react'
import './searchModal.css'
import { message } from 'antd'
import { Link } from 'react-router-dom'
import { Spin } from 'antd';
const SearchModal = ({isSearchShow,setisSearchShow}) => {
  const [searchResult, setSearchResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const apiUrl = import.meta.env.VITE_API_BASE_URL
  
  
  const handleClose = () => {
    setisSearchShow(false)
    setSearchResult(null)
    
  }
  const handleSearch =  async(e) => {
    e.preventDefault()
    const productName = e.target[0].value
    if(productName.trim().length===0){
      message.warning("boş karakter arayamazsınız")
      return;
    }
    setLoading(true)
    try {
      const res = await fetch(`${apiUrl}/api/product/search/${productName.trim()}`)
      if(!res.ok){
        message.error("Ürünü getirme hatası")
        return;
      }
      const data = await res.json()
      setSearchResult(data)
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
  }
  console.log(searchResult)
  return (
    <div className={`modal-search ${isSearchShow ? 'show':''}`}>
    <div className="modal-wrapper">
      <h3 className="modal-title">Search for products</h3>
      <p className="modal-text">Start typing to see products you are looking for.</p>
      <Spin style={{display:"flex",justifyContent:"center",alignItems:"center"}} spinning={loading}/>
      <form className="search-form" onSubmit={handleSearch}>
        <input type="text" placeholder="Search a product" />
        <button>
          <i className="bi bi-search"></i>
        </button>
      </form>
      <div className="search-results">
        <div className="search-heading">
          <h3>RESULTS FROM PRODUCT</h3>
        </div>
        <div className="results" style={{display:`${searchResult?.length===0 || !searchResult ? "flex":"grid"}`}}>
        {!searchResult && (
              <b style={{justifyContent:"center",width:"100%"}}  className="result-item">
                Lütfen aradığınız ürünün ismini giriniz 
              </b>
          )}
          {searchResult?.length === 0 && (
              <a style={{justifyContent:"center", width:"100%"}} href="#" className="result-item">
                <i class="bi bi-emoji-frown"></i>  Aradığınız ürün bulunamadı <i class="bi bi-emoji-frown"></i> 
              </a>
          )}
         {
         searchResult?.length > 0  && 
     
         searchResult?.map(result => (
           
            <Link to={`/product/${result._id}`} key={result._id} href="#" className="result-item">
              
            <img src={result.img[0]} className="search-thumb" alt="" />
            <div className="search-info">
              <h4>{result.name}</h4>
              <span className="search-sku">SKU: PD0016</span>
              <div className="search-wrapper">
                  <span className='search-newprice'>{result.price.current-((result.price.current*result.price.discount)/100)}TL</span>
                  <span className="search-price">{result.price.current}TL</span>
              </div>
            </div>
          </Link>
          ))
        } 
          
         
        </div>
      </div>
      <i onClick={handleClose} className="bi bi-x-circle" id="close-search"></i>
    </div>
    <div onClick={handleClose} className="modal-overlay">
      
    </div>
  </div>
  )
}

export default SearchModal