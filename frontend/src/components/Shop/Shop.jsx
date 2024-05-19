import React, { useEffect, useState } from 'react'
import ShopItem from './ShopItem'
import './shop.css'
import { Spin, message } from 'antd'

const Shop = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState([])
  const [selectedValue, setSelectedValue] = useState("")
  const [selectedPriceValue, setSelectedPriceValue] = useState("")
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${apiUrl}/api/product`)
        if (response.ok) {
          const data = await response.json()
          setProducts(data)
          setFilteredProducts(data) // İlk başta tüm ürünleri göster
        } else {
          message.error("Veri getirme başarısız")
        }
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/categories`)
        if (response.ok) {
          const data = await response.json()
          setCategory(data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchCategories()
    fetchProduct()
  }, [apiUrl])

  useEffect(() => {
    let filtered = products
    if (selectedValue !== "") {
      filtered = filtered.filter(product => product.category === selectedValue)
    }
    setFilteredProducts(filtered)
  }, [selectedValue, products])

  useEffect(() => {
    let sortedProducts = [...filteredProducts]
 
     if (selectedPriceValue === "increasing") {
      sortedProducts.sort((a, b) => {
        const aPrice = a.price.current - (a.price.current * a.price.discount) / 100
        const bPrice = b.price.current - (b.price.current * b.price.discount) / 100
        return aPrice - bPrice
      })
    } else if (selectedPriceValue === "decreasing") {
      sortedProducts.sort((a, b) => {
        const aPrice = a.price.current - (a.price.current * a.price.discount) / 100
        const bPrice = b.price.current - (b.price.current * b.price.discount) / 100
        return bPrice - aPrice
      })
    }else if (selectedPriceValue === "random") {
       sortedProducts.sort(() => Math.random() - 0.5)
    }
    setFilteredProducts(sortedProducts)
  }, [selectedPriceValue])

  return (
    <section className="shop">
      <div className="container">
        <div className="shop-filter">
          <div className="category-filter">
            <label htmlFor="select">Kategori Seçimi</label>
            <select
              value={selectedValue}
              id="select"
              onChange={(e) => setSelectedValue(e.target.value)}
            >
              <option value="">Bütün Kategoriler</option>
              {
                category.map(categories => (
                  <option value={categories._id} key={categories._id}>{categories.name}</option>
                ))
              }
            </select>
          </div>
          <div className="price-filter">
            <label htmlFor="select">Fiyat Seçimi</label>
            <select
              value={selectedPriceValue}
              id="select"
              onChange={(e) => setSelectedPriceValue(e.target.value)}
            >
              <option value="random">Karışık</option>
              <option value="increasing">Fiyata göre artan</option>
              <option value="decreasing">Fiyata göre azalan</option>
            </select>
          </div>
        </div>
        <Spin spinning={loading} className='spin' />
        <div className="shop-wrapper">
          {filteredProducts.length === 0 && !loading ?
            <h3 style={{ fontSize: "21px", marginTop: "40px" }}>Aradığınız ürün bulunamadı...</h3>
            :
            filteredProducts.map(product => (
              
              <ShopItem product={product} key={product._id} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Shop
