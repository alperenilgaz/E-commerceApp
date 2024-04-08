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
        <th className="product-name">Ürün</th>
        <th className="product-price">Fiyat</th>
        <th className="product-quantity">Miktar</th>
        <th className="product-subtotal">Toplam</th>
    </thead>
    <tbody className="cart-wrapper">
         {
          cardItem.map(cart => (
            <CartItem key={cart._id} cart={cart}/>
          ))
         }
         
    </tbody>
</table>
  )
}

export default CartTable