import React, { useContext } from 'react'
import './shopItem.css'
import { Link } from 'react-router-dom'
import {CartContext} from "../../context/CartContext"
const ShopItem = ({products}) => {
  
  const {AddBasket,cardItem} = useContext(CartContext)
  const disableBasket = cardItem.find((cardItems) => cardItems._id === products._id )
  const discountPrice = products.price.current - (products.price.current*products.price.discount)/100
  return (
    <div className="shop-item">
      <div className="shop-image">
          <Link to={`/product/${products._id}`}>
          <img  src={products.img[0]} alt="" className="img1" />
          <img  src={products.img[1]} alt="" className="img2" />
          </Link>
      </div>
      <div className="shop-info">
        <Link to={`/product/${products._id}`}>
          <a className='shop-title'>{products.name}</a>
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
          <span className="old-price">{products.price.current.toFixed(2)}TL</span>
      </div>
      <span className="shop-discount">-%{products.price.discount}</span>
      <div className="shop-links">
        
        <button><i className="bi bi-basket-fill"></i></button>

        <Link to={`/product/${products._id}`}>
          <i className="bi bi-eye-fill"></i>
        </Link>

      </div>
      </div>
  </div>
  )
}

export default ShopItem