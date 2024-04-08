import React, { useContext } from 'react'
import './cart.css'
import CartTable from './CartTable'
import CartCoupon from './CartCoupon'
import CartTotals from './CartTotals'
import { CartContext } from '../../context/CartContext'
const Cart = () => {
    const {cardItem} = useContext(CartContext)

  return (
    <section className="cart-page">
    <div className="container">
        {
            cardItem.length > 0 ?  <div className="cart-page-wrapper">
            <form className="cart-form">

                <div className="shop-table-wrapper">
                    <CartTable/>
                    <CartCoupon/>
                </div>
            </form>
            <div className="cart-collaterals">
                <CartTotals/>
            </div>
        </div>
        : <h2 style={{textAlign:"center"}}>Sepetiniz boş <b onClick={() => window.location.href="/"}  style={{color:"blue",cursor:"pointer"}}>Alışveriş Yap!</b></h2>}
       
    </div>
</section>
  )
}

export default Cart