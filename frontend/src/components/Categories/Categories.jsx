import React from 'react'
import CategoryItem from './CategoryItem'
import './category.css'
import SectionTitle from '../SectionTitle/SectionTitle'
const Categories = () => {
  return (
    <section className="categories">
    <div className="container">
        <SectionTitle title={"All Categories"} desc={"Summer Collection New Morden Design"}/>
      <ul className="category-list">
        <CategoryItem/>
      </ul>
    </div>
  </section>
  )
  }

export default Categories