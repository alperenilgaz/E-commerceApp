import React from 'react'
import './brand.css'
import BrandItem from './BrandItem'
import { message } from 'antd'
import { useEffect, useState } from 'react'



const Brands = () => {
  const [brands, setBrands] = useState([])
  const apiUrl = import.meta.env.VITE_API_BASE_URL

  useEffect(() => {

    const fetchBrands = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/brands`)
        if (response.ok) {
          const data = await response.json()
          setBrands(data)
        } else {
          message.error("Veri Getirme Hatası")
        }
      } catch (error) {
        console.log("Veri hatası", error);
      }
    }
    fetchBrands()

  }, [apiUrl])
  return (
    <section className="brands">
      <div className="container">
        <ul className="brand-list">
          <BrandItem brands={brands} />
        </ul>
      </div>
    </section>
  )
}

export default Brands