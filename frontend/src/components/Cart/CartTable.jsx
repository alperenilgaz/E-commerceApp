import React from 'react'
import CartItem from './CartItem'

const CartTable = () => {
  return (
    <table className="shop-table">
    <thead>
        <th className="product-thumbnail">&nbsp;</th>
        <th className="product-thumbnail">&nbsp;</th>
        <th className="product-name">Product</th>
        <th className="product-price">Price</th>
        <th className="product-quantity">Quantity</th>
        <th className="product-subtotal">Subtotal</th>
    </thead>
    <tbody className="cart-wrapper">
           <CartItem/>
           <CartItem/>
           <CartItem/>
           <CartItem/>
           <CartItem/>
    </tbody>
</table>
  )
}

export default CartTable