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
                    <h2>Sepet Toplamı
                    </h2>
                    <table>
                        <tbody>
                            <tr className="cart-subtotal">
                                <th>Toplam</th>
                                <td>
                                    <span id="subtotal">{subTotal.toFixed(2)} TL</span>
                                </td>
                            </tr>
                            <tr>
                                <th>Kargo</th>
                                <td>
                                    <ul>
                                        <li>
                                            <label>
                                                Hızlı Kargo: 15.00TL
                                                <input type="checkbox" id="fast-cargo" checked={isCheked} onChange={() => setIsCheked(!isCheked)} />
                                            </label>
                                        </li>
                                        <li>
                                            <a href="#">Adresi Değiştir</a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th>Toplam</th>
                                <td>
                                    <strong id="cart-total">{cartTotals.toFixed(2)} TL</strong>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="checkout">
                        <button className="btn btn-lg">Ödemeye Git</button>
                    </div>
                </div>
  )
}

export default CartTotals