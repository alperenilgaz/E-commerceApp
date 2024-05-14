import React, { useEffect, useState } from 'react'
import ShopItem from './ShopItem'
import './shop.css'
import { message } from 'antd'


const Shop = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL
  const [product, setproduct] = useState([])

  useEffect(() => {
    const fetchProduct = async() => {
      try {
        const response = await fetch(`${apiUrl}/api/product`)
        if(response.ok){
          const data = await response.json()
          setproduct(data)
        }else{
          message.error("Veri getirme başarısız")
        }
      } catch (error) {
        console.log(error);
      }
    }    
    fetchProduct()
  }, [apiUrl])
  

  return (
    <section className="shop">
      <div className="container">
        <div className="shop-wrapper">
          {
            product.map(products => (
              <>
              <ShopItem products={products} key={products._id}/>
              
              </>
            ))
          }
        </div>
      </div>
  </section>
  )
}

export default Shop