import React, { useContext } from 'react'
import CartItem from './CartItem'
import { CartContext } from '../../context/CartContext'

const CartTable = () => {
  const {cardItem} = useContext(CartContext)

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
         {
          cardItem.map(cart => (
            <CartItem key={cart.id} cart={cart}/>
          ))
         }
         
    </tbody>
</table>
  )
}

export default CartTable