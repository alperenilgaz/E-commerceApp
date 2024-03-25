import React, { useContext, useState } from 'react'
import {message} from 'antd'
import { CartContext } from '../../context/CartContext'
const CartCoupon = () => {
  const [couponCode, setCouponCode] = useState("")
  const {cardItem,setCardItem} = useContext(CartContext)
  const apiUrl = import.meta.env.VITE_API_BASE_URL

  const applyCoupon = async() => {
    try {
      const res = await fetch(`${apiUrl}/api/coupon/code/${couponCode}`)
      if(!res.ok){
        message.warning("Hatalı kupon kodu girişi!")
      }
      const data = await res.json()
      const discountPercent = data.discountPercent
      const updatedCardItems = cardItem.map((item) => {
        const updatedPrice = item.price *(1-discountPercent/100)
        return{
          ...item,
          price:updatedPrice
        }
      })
      setCardItem(updatedCardItems)
      message.success(`${couponCode} adlı kupon kodu başarıyla uygulandı`)
    
     
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="actions-wrapper">
    <div className="coupon">
        <input onChange={(e) => setCouponCode(e.target.value)} type="text" className="input-text" placeholder="Coupon code" />
        <button type='button' onClick={applyCoupon} className="btn">Apply Coupon</button>
    </div>
    <div className="update-cart">
        <button className="btn">Update Cart</button>
    </div>
</div>
  )
}

export default CartCoupon