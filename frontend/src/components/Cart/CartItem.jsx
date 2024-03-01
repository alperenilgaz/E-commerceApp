import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartItem = ({cart}) => {
  const {removeBasket} = useContext(CartContext)
  return (
    <tr className="cart-item">
    <td></td>    
    <td className="cart-image">
        <img src={cart.img.singleImage} alt="" />
        <i onClick={() => removeBasket(cart.id)} className="bi bi-x delete-cart" data-id="1"></i>
    </td>
    <td>{cart.name}</td>
    <td>${cart.price.newPrice.toFixed(2)}</td>
    <td className="product-quantity">{cart.quantity}</td>
    <td className="product-subtotal">${cart.quantity * cart.price.newPrice.toFixed(2)}</td>
</tr>
  )
}

export default CartItem