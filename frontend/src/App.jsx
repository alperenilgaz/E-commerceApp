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

          </Route>
    </Routes>
    </>
  )
}

export default App
