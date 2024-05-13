import './App.css'
import ProductDetailsPage from './Pages/ProductDetailsPage'
import HomePage from './Pages/HomePage'
import ContactPage from './Pages/ContactPage'
import ShopPage from './Pages/ShopPage'
import CartPage from './Pages/CartPage'
import BlogPage from './Pages/BlogPage'
import AuthPage from './Pages/AuthPage'
import BlogDetailsPage from './Pages/BlogDetailsPage'
import { Navigate, Route, Routes } from 'react-router-dom'

import UserPage from './Pages/Admin/UserPage'
import CategoryPage from './Pages/Admin/Categories/CategoryPage'
import CategoryUpdatePage from './Pages/Admin/Categories/CategoryUpdatePage'
import CreateCategoryPage from './Pages/Admin/Categories/CreateCategoryPage'
import CreateProduct from './Pages/Admin/Products/CreateProductPage'
import CreateProductPage from './Pages/Admin/Products/CreateProductPage'
import ProductPage from './Pages/Admin/Products/ProductPage'
import UpdateProductPage from './Pages/Admin/Products/UpdateProductPage'
import CouponPage from './Pages/Admin/Coupons/CouponPage'
import CouponUpdatePage from './Pages/Admin/Coupons/CouponUpdatePage'
import CreateCouponsPage from './Pages/Admin/Coupons/CreateCouponsPage'
import DashboardPage from './Pages/Admin/DashboardPage'
import UserDetailPage from './Pages/UserDetailPage'
import BrandPage from './Pages/Admin/Brands/BrandPage'
import CreateBrandsPage from './Pages/Admin/Brands/CreateBrandsPage'
import UpdateBrandPage from './Pages/Admin/Brands/UpdateBrandPage'
import AboutPage from './Pages/Admin/About/AboutPage'
import CreateAboutPage from './Pages/Admin/About/CreateAboutPage'
import UpdateAboutPage from './Pages/Admin/About/UpdateAboutPage'
import SliderPage from './Pages/Admin/Slider/SliderPage'
import UpdateSliderPage from './Pages/Admin/Slider/UpdateSliderPage'
import LogoPage from './Pages/Admin/Logo/LogoPage'
import UpdateLogo from './Pages/Admin/Logo/UpdateLogo'
import CampaignPage from './Pages/Admin/Campaign/CampaignPage'
import { useContext } from 'react'
import { CartContext } from './context/CartContext'
import UpdateCampaignPage from './Pages/Admin/Campaign/UpdateCampaignPage'






function App() {
  
  const user = localStorage.getItem("user")
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/shop' element={<ShopPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/blog' element={<BlogPage/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/user' element={<UserDetailPage/>} />
        {user && <Route path="/auth" element={<Navigate to="/" replace />} />}
        {!user && <Route path="/auth" element={<AuthPage />} />}
        <Route path='/product/:id' element={<ProductDetailsPage/>} />
        <Route path='/blog/:id' element={<BlogDetailsPage/>} />
        {/* Admin page router */}
          <Route path='/admin/*'>
            <Route path='users' element={<UserPage/>}/>
            <Route index element={<DashboardPage/>}/>
            <Route path='categories' element={<CategoryPage/>}/>
            <Route path='categories/update/:id' element={<CategoryUpdatePage/>}/>
            <Route path='categories/create' element={<CreateCategoryPage/>}/>
            <Route path='products/create' element={<CreateProductPage/>}/>
            <Route path='products/update/:id' element={<UpdateProductPage/>}/>
            <Route path='products' element={<ProductPage/>}/>
            <Route path='coupons' element={<CouponPage/>}/>
            <Route path='coupons/create' element={<CreateCouponsPage/>}/>
            <Route path='coupons/update/:id' element={<CouponUpdatePage/>}/>
            <Route path='brands' element={<BrandPage/>}/>
            <Route path='brands/create' element={<CreateBrandsPage/>}/>
            <Route path='brands/update/:id' element={<UpdateBrandPage/>}/>
            <Route path='about' element={<AboutPage/>}/>
            <Route path='about/create' element={<CreateAboutPage/>}/>
            <Route path='about/update/:id' element={<UpdateAboutPage/>}/>
            <Route path='slider' element={<SliderPage/>}/>
            <Route path='slider/update/:id' element={<UpdateSliderPage/>}/>
            <Route path='logo' element={<LogoPage/>}/>
            <Route path='logo/update/:id' element={<UpdateLogo/>}/>
            <Route path='campaign' element={<CampaignPage/>}/>
            <Route path='campaign/update/:id' element={<UpdateCampaignPage/>}/>
            
          </Route>
    </Routes>
    </>
  )
}

export default App
