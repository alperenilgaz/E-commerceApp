import React from 'react'
import './categoryItem.css'
const CategoryItem = () => {
    const categoryImages = [
        'img/categories/categories1.png',
        'img/categories/categories2.png',
        'img/categories/categories3.png',
        'img/categories/categories4.png',
        'img/categories/categories5.png',
        'img/categories/categories6.png',
        'img/categories/categories7.png'
    ];

  return (
    <>
        {
            categoryImages.map((url,key) => (
                <li key={key} className="category-item">
                <a href="#">
                    <img src={url} alt="" className="category-image"/>
                    <span className="category-title">Smartphone</span>
                </a>
            </li>
            ))
        }
       
    </>
  )
}

export default CategoryItem