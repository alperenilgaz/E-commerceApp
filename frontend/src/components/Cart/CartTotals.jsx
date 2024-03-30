import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import {message} from 'antd'
import {loadStripe} from '@stripe/stripe-js'
const CartTotals = () => {
    const {cardItem} = useContext(CartContext)
    const [isCheked, setIsCheked] = useState(false)
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")):null
    const CardItemsTotal = cardItem.map((item) => {
        const itemTotal = item.price * item.quantity
        return itemTotal
    
      })
      const subTotal = CardItemsTotal.reduce((prevValue,currentValue) => {
        return prevValue+currentValue
      },0)
      
      const cargoPrice = 15

      const cartTotals = isCheked ? subTotal+cargoPrice : subTotal

      const stripePublicKey = VITE_API_STRIPE_PUBLIC_KEY
      const apiUrl = import.meta.env.VITE_API_BASE_URL
      const handlePayment = async() => {
        if(!user){
            return message.info("Ödeme yapmak için giriş yapmalısınız")
        }
        const body = {
            products:cardItem,
            user: user,
            cargoPrice: isCheked ? cargoPrice :0
        }
        try {
            const stripe = await loadStripe(stripePublicKey)
            const res = await fetch(`${apiUrl}/api/payment`,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(body)
            })
            if(!res.ok){
                return message.error("Ödeme işlemi başarısız oldu!")
            }
            const session = await res.json()
            const result = await stripe.redirectToCheckout({
                sessionId:session.id
            })
            if(result.error){
            throw new Error(result.error.message)
            }
        } catch (error) {

            
        }
      }
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
                        <button onClick={handlePayment} className="btn btn-lg">Proceed to checkout</button>
                    </div>
                </div>
  )
}

export default CartTotals