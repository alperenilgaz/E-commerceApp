import React, { useContext, useEffect, useState } from 'react'
import './Header.css'
import { CartContext } from '../../../context/CartContext'
import { Link, useLocation } from 'react-router-dom'
import { message } from 'antd'
import Modal from 'react-modal';

const Header = ({setisSearchShow}) => {

  const {pathname} = useLocation()
  const user = localStorage.getItem("user")
  const [categories, setcategories] = useState([])
  const [logo, setLogo] = useState([])
  const {cardItem} = useContext(CartContext)
  const apiUrl = import.meta.env.VITE_API_BASE_URL
  const [modalIsOpen, setmodalIsOpen] = useState(false)
  
  const toogleClick = () => {
    setmodalIsOpen(!modalIsOpen)  
  }
  

  useEffect(() => {
    const fetchCategories =  async() => {
      try {
        const res = await fetch(`${apiUrl}/api/categories`)
        if(res.ok){
          const data = await res.json()
          setcategories(data)
        }else{
          message.error("Kategoriler getirilemedi")
        }
      } catch (error) {
        console.log({error:"Server Error"});
      }
    }
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
    fetchCategories()
  },[apiUrl])





  return (
    <header>
        <header>
  
    <div className="header-row">
      <div className="container">
        <div className="header-wrapper">
          <div className="header-mobile">
            <i onClick={toogleClick} className="bi bi-list" id="btn-menu"></i>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={toogleClick}
              className={`Modal ${modalIsOpen ? 'open' :''} `}
              overlayClassName={`overlay ${modalIsOpen ? 'open' :''} `}
              shouldCloseOnOverlayClick={true}
              shouldCloseOnEsc={true}
              
           
            >
              <ul className='header-mobile-menu'>
                <li onClick={toogleClick} className='cls-icn'><i className="bi bi-x-lg"></i></li>
                <Link onClick={toogleClick} to="/"><li>Anasayfa</li></Link>
                <Link onClick={toogleClick}  to='shop'><li>Ürünler</li></Link>
                <Link onClick={toogleClick}  to='blog'><li>Hakkımızda</li></Link>
                <Link onClick={toogleClick}  to='contact'><li>İletişim</li></Link>
                
              </ul>
        </Modal>
          </div>
          <div className="header-left">
            <Link to='/' href="index.html" className="logo">
                {
                  logo.map(src => (
                    <img style={{width:"35%"}} src={src.img} alt="" />
                  ))
                }
            
              
            </Link>
          </div>
          <div className="header-center" id="sidebar">
            <nav className="navigation">
              <ul className="menu-list">
                <li className="menu-list-item">
                  <Link to='/' href="index.html" className={`menu-link ${pathname === '/' ? 'active' :''}`}>
                    Anasayfa
                  </Link>
                </li>
                <li className="menu-list-item megamenu-wrapper">
                  <Link to="/shop" className={`menu-link ${pathname === '/shop' ? 'active' :''}`}>
                    Shop
                    <i className="bi bi-chevron-down"></i>
                  </Link>
                  <div className="menu-dropdown-wrapper">
                    <div className="menu-dropdown-megamenu">
                      <div className="megamenu-links">
                        <div className="megamenu-products">
                          <h3 className="megamenu-products-title">
                            Kategoriler
                          </h3>
                          <ul className="megamenu-menu-list">
                             {
                              categories.map(category => (
                                <li style={{marginTop:"15px"}} key={category._id}>
                                <a href="#">{category.name}</a>
                              </li>
                            
                              ))
                             }
                          </ul>
                        </div>
                        
                        
                      </div>
                      <div className="megamenu-single">
                        <a href="#">
                          <img style={{width:"70%"}} src="/img/campaigns/banner2.png" alt="" />
                        </a>
                        <h3 className="megamenu-single-title">DMGHOME AİLESİNE HEMEN KATILIN</h3>
                        <h4 className="megamenu-single-subtitle">Bütünüyle el yapımı ürünler için şimdi</h4>
                        <Link to='/shop' href="#" className="megamenu-single-button btn btn-sm">Keşfet</Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="menu-list-item">
                  <Link to="/blog" className={`menu-link ${pathname === '/blog' ? 'active' :''}`}>
                    Hakkımızda
                  </Link>
                </li>
                <li className="menu-list-item">
                  <Link to="/contact" className={`menu-link ${pathname === '/contact' ? 'active' :''}`}>
                    İletişim
                  </Link>
                </li>
              </ul>
            </nav>
            <i className="bi-x-circle" id="close-sidebar"></i>
          </div>
          <div className="header-right">
            <div className="header-right-links">
              {
               !user && (
                <Link to="/auth"  className={`menu-link ${pathname === '/auth' ? 'active' :''}`}>
                <i className="bi bi-person"></i>
              </Link>
               ) 
              }
              {
                user && (
                <Link   className={`menu-link ${pathname === '/admin' ? 'active' :''}`}>
                <i onClick={() => window.location.href = "/admin"} className="bi bi-code-slash"></i>
              </Link>
               ) 
              }
              {
                user && (
                <Link   className={`menu-link ${pathname === '/user' ? 'active' :''}`}>
                <i onClick={() => window.location.href = "/user"} className="bi bi-person"></i>
              </Link>
               ) 
              }
              
            
              <button onClick={() => setisSearchShow(true)} className="search-button">
                <i className="bi bi-search"></i>
              </button>
              <div className="header-cart">
                <Link to="/cart" className="header-cart-link">
                  <i className="bi bi-bag"></i>
                  <span className="header-cart-count">{cardItem.length}</span>
                </Link>
              </div>
              {
                user && (
                  <button 
                  className="search-button"
                  onClick={() => {
                    if(window.confirm("Çıkış yapmak istediğinize emin misiniz ?")){
                    {
                      localStorage.removeItem("user")
                      window.location.href = "/"
                    }       
                    }
                  }}
                  >
                    <i className="bi bi-box-arrow-right"></i>
                  </button>
                )
              }
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
    </header>
  )
}

export default Header