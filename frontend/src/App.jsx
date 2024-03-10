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
    </Routes>
    </>
  )
}

export default App
