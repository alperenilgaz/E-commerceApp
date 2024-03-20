import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

const CartTotals = () => {
    const {cardItem} = useContext(CartContext)
    const [isCheked, setIsCheked] = useState(false)
    const CardItemsTotal = cardItem.map((item) => {
        const itemTotal = item.price * item.quantity
        return itemTotal
    
      })
      const subTotal = CardItemsTotal.reduce((prevValue,currentValue) => {
        return prevValue+currentValue
      },0)
      
      const cargoPrice = 15
      const cartTotals = isCheked ? subTotal+cargoPrice : subTotal
  return (
    <div className="cart-totals">
                    <h2>Cart totals
                    </h2>
                    <table>
                        <tbody>
                            <tr className="cart-subtotal">
                                <th>Subtotal</th>
                                <td>
                                    <span id="subtotal">{subTotal.toFixed(2)} TL</span>
                                </td>
                            </tr>
                            <tr>
                                <th>Shipping</th>
                                <td>
                                    <ul>
                                        <li>
                                            <label>
                                                Fast Cargo: 15.00TL
                                                <input type="checkbox" id="fast-cargo" checked={isCheked} onChange={() => setIsCheked(!isCheked)} />
                                            </label>
                                        </li>
                                        <li>
                                            <a href="#">Change Address</a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th>Total</th>
                                <td>
                                    <strong id="cart-total">{cartTotals.toFixed(2)} TL</strong>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="checkout">
                        <button className="btn btn-lg">Proceed to checkout</button>
                    </div>
                </div>
  )
}

export default CartTotals