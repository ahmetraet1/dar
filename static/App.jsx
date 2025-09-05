import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Activities from './pages/Activities'
import Library from './pages/Library'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import DonationModal from './components/DonationModal'
import './App.css'

function App() {
  // تحديد اللغة الافتراضية بناءً على لغة المتصفح
  const getInitialLanguage = () => {
    const savedLanguage = localStorage.getItem('dar-language')
    if (savedLanguage) {
      return savedLanguage
    }
    
    const browserLanguage = navigator.language || navigator.userLanguage
    if (browserLanguage.startsWith('ar')) {
      return 'ar'
    } else if (browserLanguage.startsWith('tr')) {
      return 'tr'
    } else {
      return 'en'
    }
  }

  const [currentLanguage, setCurrentLanguage] = useState(getInitialLanguage)
  const [cartItems, setCartItems] = useState([])
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false)

  // حفظ اللغة في localStorage عند تغييرها
  useEffect(() => {
    localStorage.setItem('dar-language', currentLanguage)
    document.documentElement.lang = currentLanguage
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr'
  }, [currentLanguage])

  // إضافة منتج إلى السلة
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id)
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prevItems, { ...product, quantity: 1 }]
      }
    })
  }

  // إزالة منتج من السلة
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId))
  }

  // تحديث كمية المنتج
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId)
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
      )
    }
  }

  // فتح نافذة التبرع
  const handleDonateClick = () => {
    setIsDonationModalOpen(true)
  }

  // إغلاق نافذة التبرع
  const handleCloseDonation = () => {
    setIsDonationModalOpen(false)
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col smooth-scroll">
        <Header 
          currentLanguage={currentLanguage}
          setCurrentLanguage={setCurrentLanguage}
          cartItems={cartItems}
          onDonateClick={handleDonateClick}
        />
        
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={
                <Home 
                  currentLanguage={currentLanguage}
                  onDonateClick={handleDonateClick}
                  onAddToCart={addToCart}
                />
              } 
            />
            <Route 
              path="/about" 
              element={<About currentLanguage={currentLanguage} />} 
            />
            <Route 
              path="/products" 
              element={
                <Products 
                  currentLanguage={currentLanguage}
                  onAddToCart={addToCart}
                />
              } 
            />
            <Route 
              path="/activities" 
              element={<Activities currentLanguage={currentLanguage} />} 
            />
            <Route 
              path="/library" 
              element={<Library currentLanguage={currentLanguage} />} 
            />
            <Route 
              path="/contact" 
              element={<Contact currentLanguage={currentLanguage} />} 
            />
            <Route 
              path="/cart" 
              element={
                <Cart 
                  currentLanguage={currentLanguage}
                  cartItems={cartItems}
                  onRemoveFromCart={removeFromCart}
                  onUpdateQuantity={updateQuantity}
                />
              } 
            />
          </Routes>
        </main>

        <Footer currentLanguage={currentLanguage} />

        {/* نافذة التبرع */}
        <DonationModal 
          isOpen={isDonationModalOpen}
          onClose={handleCloseDonation}
          currentLanguage={currentLanguage}
        />
      </div>
    </Router>
  )
}

export default App

