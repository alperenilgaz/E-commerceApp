import React from 'react'
import './sectiontitle.css'
const SectionTitle = ({title,desc}) => {
  return (
    <div className="section-title">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
  )
}

export default SectionTitle