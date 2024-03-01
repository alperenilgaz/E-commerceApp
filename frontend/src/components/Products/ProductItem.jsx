import React, { useContext } from 'react'
import './productItem.css'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
const ProductItem = ({item}) => {
  
  const {AddBasket,cardItem} = useContext(CartContext)

    const disableBasket = cardItem.find((cardItems) => cardItems.id === item.id )


  return (
    <div className="product-item glide__slide">
    <div className="product-image">
      <a href="#">
        <img src={item.img.singleImage} alt="" className="img1" />
        
        <img src={item.img.thumbs[1]} alt="" className="img2" />
        
      </a>
    </div>
    <div className="product-info">
      <a href="$" className="product-title">{item.name}</a>
      <ul className="product-star">
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-half"></i>
        </li>
      </ul>
      <div className="product-prices">
        <strong className="new-price">${item.price.newPrice}</strong>
        <span className="old-price">${item.price.oldPrice}</span>
      </div>
      <span className="product-discount">%{item.discount
}</span>
      <div className="product-links">
        <button disabled={disableBasket} onClick={() => AddBasket(item)}>
          <i className="bi bi-basket-fill"></i>
        </button>
        <button>
          <i className="bi bi-heart-fill"></i>
        </button>
        <Link to={`/product/${item.id}`}>
          <i className="bi bi-eye-fill"></i>
        </Link>
        <a href="#">
          <i className="bi bi-share-fill"></i>
        </a>
      </div>
    </div>
  </div>
  )
}

export default ProductItem