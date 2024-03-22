import React, { useContext, useRef } from 'react'
import './productInfo.css'
import { CartContext } from '../../../context/CartContext';
const ProductInfo = ({singleProduct}) => {
    console.log(singleProduct);
    const quantityRef = useRef()
    const current = singleProduct.price.current
    const discount = singleProduct.price.discount
    const discountPrice = current - (current*discount)/100
    const {AddBasket} = useContext(CartContext)
    return (
        <div className="product-info">
            <h1 className="product-title">
                {singleProduct.name}
            </h1>
            <div className="product-review">
                <ul className="product-star">
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-half"></i></li>
                </ul>
                <span>2 reviews</span>
            </div>
            <div className="product-price">
                <s className="old-price">{current.toFixed(2)}TL</s>
                <strong className="new-price">{discountPrice.toFixed(2)}TL</strong>
            </div>
            <p className="product-description" dangerouslySetInnerHTML={{__html:singleProduct.description}}>
                
            </p>
            <form className="variations-form">
                <div className="variations">
                    <div className="colors">
                        <div className="colors-label">
                            <span>Color</span>
                        </div>
                        <div className="color-wrapper">
                     
                            {
                                singleProduct.colors.map(color => (
                                <label key={color} style={{backgroundColor:`#${color}`}} >
                                    <input type="radio" name="product-color" />
                                </label>
                             
                                ))
                            }
                           
                        </div>
                    </div>
                    <div className="values">
                        <div className="values-label">
                            <span>Size</span>
                        </div>
                        <div className="values-list">
                            {
                                singleProduct.sizes.map((size,index) => (
                                    <span key={index}>{size}</span>
                                ))
                            }
                        </div>
                    </div>
                    <div className="cart-button">
                        <input ref={quantityRef} type="number" defaultValue="1" min="1" id="quantity" />
                        <button className="btn btn-lg btn-primary" id="add-to-cart" onClick={() => AddBasket({...singleProduct,price:discountPrice,quantity:parseInt(quantityRef.current.value)}) } type="button">Sepete Ekle</button>
                    </div>
                    <div className="product-extra-buttons">
                        <a href="#">
                            <i className="bi bi-globe"></i>
                            <span>Size Guide</span>
                        </a>
                        <a href="#">
                            <i className="bi bi-heart"></i>
                            <span>Add to Wislist</span>
                        </a>
                        <a href="#">
                            <i className="bi bi-share"></i>
                            <span>Share this Product</span>
                        </a>
                    </div>
                </div>
            </form>
            <div className="divider"></div>
            <div className="product-meta">
                <div className="product-sku">
                    <span>SKU:</span>
                    <strong>BE45VGRT</strong>
                </div>
                <div className="product-categories">
                    <span>Categories:</span>
                    <strong>Pants , Women</strong>
                </div>
                <div className="product-tags">
                    <span>Tags:</span>
                    <a href="#">black</a>
                    ,
                    <a href="#">white</a>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo