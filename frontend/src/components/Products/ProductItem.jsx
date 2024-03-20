import React, { useContext } from 'react'
import './productItem.css'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
const ProductItem = ({product}) => {
  
  const {AddBasket,cardItem} = useContext(CartContext)

    const disableBasket = cardItem.find((cardItems) => cardItems._id === product._id )
    //indirimli fiyat hesaplama
    const discountPrice = product.price.current - (product.price.current*product.price.discount)/100

  return (
    <div className="product-item glide__slide">
    <div className="product-image">
      <a href="#">
        <img src={product.img[0]} alt="" className="img1" />
        
        <img src={product.img[1]} alt="" className="img2" />
        
      </a>
    </div>
    <div className="product-info">
      <a href="$" className="product-title">{product.name}</a>
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
        <strong className="new-price">{discountPrice .toFixed(2)}TL</strong>
        <span className="old-price">{product.price.current.toFixed(2)}TL</span>
      </div>
      <span className="product-discount">-%{product.price.discount 
}</span>
      <div className="product-links">
        <button disabled={disableBasket} onClick={() => AddBasket({
          ...product,
          price:discountPrice
        })}>
          <i className="bi bi-basket-fill"></i>
        </button>
       
        <Link to={`/product/${product._id}`}>
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