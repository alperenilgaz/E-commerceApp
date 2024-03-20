import React, { useCallback, useEffect, useState } from 'react'
import CategoryItem from './CategoryItem'
import { message } from 'antd'

import './category.css'
import SectionTitle from '../SectionTitle/SectionTitle'
const Categories = () => {
  const [categories, setCategories] = useState([])
  const apiUrl = import.meta.env.VITE_API_BASE_URL


  useEffect(() => {
    const fetchCategories = async() => {
      try {
        const response = await fetch(`${apiUrl}/api/categories`)
        if(response.ok){
          const data = await response.json()
          setCategories(data)
        }
        else{
          message.error("Veri Getirme Başarısız")
        }
      } catch (error) {
         console.log("Veri hatası!",error)
      }
    }
    fetchCategories()
  },[apiUrl])
  return (
    <section className="categories">
    <div className="container">
        <SectionTitle title={"All Categories"} desc={"Summer Collection New Morden Design"}/>
      <ul className="category-list">
        {categories.map((category) => (
            <CategoryItem key={category._id} category={category}/>
        ))}
      </ul>
    </div>
  </section>
  )
  }

export default Categories