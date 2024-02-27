import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import './blog.css'
import BlogItem from './BlogItem'
const Blog = () => {
  return (
    <section className="blogs">
    <div className="container">
     <SectionTitle title={"From Our Blog"} desc={"Summer Collection New Morden Design"}/>
     
         <ul className="blog-list">
        <BlogItem/>
        <BlogItem/>
        <BlogItem/>
      </ul>
    </div>
  </section>
  )
}

export default Blog