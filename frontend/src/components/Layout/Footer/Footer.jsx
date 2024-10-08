import React, { useEffect, useState } from 'react'
import './footer.css'
import Logo from '../../../../public/img/logo.png'
import { message } from 'antd'
function Footer() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL
  const [logo, setLogo] = useState([])
  
  useEffect(() => {
    const fetchLogo = async() => {
     try {
       const response = await fetch(`${apiUrl}/api/logo`)
       if(response.ok){
         const data = await response.json()
         setLogo(data)
       }else{
         message.error("veri getirme hatası")
       }
   } catch (error) {
     console.log(error);
   }
    }
    fetchLogo()
   },[apiUrl])
  return (
    <footer className="footer">
    <div className="subscribe-row">
      <div className="container">
        <div className="footer-row-wrapper">
          <div className="footer-subscribe-wrapper">
            <div className="footer-subscribe">
              <div className="footer-subscribe-top">
                <h3 className="subscribe-title">Bir problem  yaşıyorsanız email adresinizi gönderin biz size ulaşalım</h3>
              </div>
              <div className="footer-subscribe-bottom">
                <form>
                  <input type="text" placeholder="Email adresinizi giriniz!" />
                  <button className="btn">Subscribe</button>
                </form>
             
              </div>
            </div>
          </div>
          <div className="footer-contact-wrapper">
            <div className="footer-contact-top">
              <h3 className="contact-title">
                Yardıma mı ihtiyacınız var ? <br />
                 531 687 30 49
              </h3>
              <p className="contact-desc">Saat 8.00 ile 18.00 arası arayabilirsiniz</p>
            </div>
            <div className="footer-contact-bottom">
              <div className="download-app">
                <a href="https://www.instagram.com/dmgwoody/" target='_blank'>
                <i class="bi bi-instagram"></i>
                </a>
                <a href="https://www.dincermermer.com.tr" target='_blank'>
                <i class="bi bi-browser-chrome"></i>
                </a>
              </div>
          
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="widgets-row">
      <div className="container">
        <div className="footer-widgets">
          <div className="brand-info">
            <div className="footer-logo">
               <a href="index.html" className="logo">

              {
                logo.map(src => (
                  <img key={src._id} style={{width:"35%"}} src={src.img} alt="" />
                ))
              }
            
                 
               
               </a>
            </div>
            <div className="footer-desc">
              <p> Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis
                in
                termapol.</p>
            </div>
            <div className="footer-contact">
              <p>
                <a href="tel:555 555 55 55">(+800) 1234 5678 90</a> – <a
                  href="mailto:info@example.com">info@example.com</a>
              </p>
            </div>
          </div>
          <div className="widget-nav-menu">
            <h4>Information</h4>
            <ul className="menu-list">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Returns Policy</a>
              </li>
              <li>
                <a href="#">Shipping Policy</a>
              </li>
              <li>
                <a href="#">Dropshipping</a>
              </li>
            </ul>
          </div>
          <div className="widget-nav-menu">
            <h4>Account</h4>
            <ul className="menu-list">
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li>
                <a href="#">My Orders</a>
              </li>
              <li>
                <a href="#">My Wishlist</a>
              </li>
              <li>
                <a href="#">Account details</a>
              </li>
              <li>
                <a href="#">Track My Orders</a>
              </li>
            </ul>
          </div>
          <div className="widget-nav-menu">
            <h4>Shop</h4>
            <ul className="menu-list">
              <li>
                <a href="#">Affiliate</a>
              </li>
              <li>
                <a href="#">Bestsellers</a>
              </li>
              <li>
                <a href="#">Discount</a>
              </li>
              <li>
                <a href="#">Latest Products</a>
              </li>
              <li>
                <a href="#">Sale Products</a>
              </li>
            </ul>
          </div>
          <div className="widget-nav-menu">
            <h4>Categories</h4>
            <ul className="menu-list">
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Bags</a>
              </li>
              <li>
                <a href="#">Outerwear</a>
              </li>
              <li>
                <a href="#">Shoes</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-row">
      <div className="container">
        <div className="footer-copyright">
          <div className="site-copyright">
            <p>
              Copyright 2022 © E-Commerce Theme. All right reserved. Powered by Emin Basbayan.
            </p>
          </div>
          <a href="#">
            <img src="/img/footer/cards.png" alt="" />
          </a>
          <div className="footer-menu">
            <ul className="footer-menu-list">
              <li className="list-item">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="list-item">
                <a href="#">Terms and Conditions</a>
              </li>
              <li className="list-item">
                <a href="#">Returns Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer