import { message } from 'antd'
import React, { useEffect, useState } from 'react'

const BrandItem = ({brands}) => {
  
  return (
    <>
        {
            brands.map(brand => (
                <li key={brand._id} className="brand-item">
                <a href="#">
                    <img src={brand.img} alt=""/>
                    <p style={{textAlign:"center"}}>{brand.name}</p>
                    
                </a>
            </li>
            ))
        }
</>
  )
}

export default BrandItem