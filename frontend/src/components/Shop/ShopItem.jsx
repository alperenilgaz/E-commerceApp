import React, { useContext } from 'react'
import './shopItem.css'
import { Link } from 'react-router-dom'
import {CartContext} from "../../context/CartContext"
const ShopItem = ({product}) => {
  
  const {AddBasket,cardItem} = useContext(CartContext)
  const disableBasket = cardItem.find((cardItems) => cardItems._id === product._id )
  const discountPrice = product.price.current - (product.price.current*product.price.discount)/100
    
  return (
    <div className="shop-item">
      <div className="shop-image">
          <Link to={`/product/${product._id}`}>
          <img  src={product.img[0]} alt="" className="img1" />
          <img  src={product.img[1]} alt="" className="img2" />
          </Link>
      </div>
      <div className="shop-info">
        <Link to={`/product/${product._id}`}>
          <a href='#' className='shop-title'>{product.name}</a>
        </Link>
        <ul className="shop-star">
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
      <div className="shop-prices">
          <strong className="new-price">{discountPrice.toFixed(2)}TL</strong>
          <span className="old-price">{product.price.current.toFixed(2)}TL</span>
      </div>
      <span className="shop-discount">-%{product.price.discount}</span>
      <div className="shop-links">
        
        <button disabled={disableBasket} onClick={() => AddBasket({
          ...product,
          price:discountPrice
        })}>
          <i className="bi bi-basket-fill"></i>
        </button>

        <Link to={`/product/${product._id}`}>
          <i className="bi bi-eye-fill"></i>
        </Link>

        <Link to={`/product/${product._id}`}>
          <i class="bi bi-arrow-right"></i>
        </Link>
      </div>
      </div>
  </div>
  )
}

export default ShopItem