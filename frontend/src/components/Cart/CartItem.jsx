import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartItem = ({cart}) => {
  const {removeBasket} = useContext(CartContext)
  return (
    <tr className="cart-item">
    <td></td>    
    <td className="cart-image">
        <img src={cart.img[0]} alt="" />
        <i onClick={() => removeBasket(cart._id)} className="bi bi-x delete-cart" data-id="1"></i>
    </td>
    <td>{cart.name}</td>
    <td>{cart.price.toFixed(2)} TL</td>
    <td className="product-quantity">{cart.quantity}</td>
    <td className="product-subtotal">{cart.quantity * cart.price.toFixed(2)} TL</td>
</tr>
  )
}

export default CartItem