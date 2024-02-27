import React from 'react'

const BrandItem = () => {
    const brandImages = [
        'img/brands/brand1.png',
        'img/brands/brand2.png',
        'img/brands/brand3.png',
        'img/brands/brand4.png',
        'img/brands/brand5.png',
    ];
  return (
    <>
        {
            brandImages.map((url,key) => (
                <li key={key} className="brand-item">
                <a href="#">
                    <img src={url} alt=""/>
                    
                </a>
            </li>
            ))
        }
</>
  )
}

export default BrandItem