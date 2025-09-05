import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ShoppingCart, Globe, Heart } from 'lucide-react'
import { Button } from './ui/button'
import darLogo from '../assets/darlogo.png'

const Header = ({ currentLanguage, setCurrentLanguage, cartItems = [], onDonateClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const languages = {
    ar: { name: 'العربية', code: 'ar', flag: '🇵🇸' },
    tr: { name: 'Türkçe', code: 'tr', flag: '🇹🇷' },
    en: { name: 'English', code: 'en', flag: '🇺🇸' }
  }

  const content = {
    ar: {
      nav: {
        home: 'الرئيسية',
        about: 'من نحن',
        products: 'المنتجات',
        activities: 'الفعاليات',
        library: 'مكتبة التراث',
        contact: 'تواصل معنا'
      },
      donate: 'تبرع الآن',
      cart: 'سلة المشتريات'
    },
    tr: {
      nav: {
        home: 'Ana Sayfa',
        about: 'Hakkımızda',
        products: 'Ürünler',
        activities: 'Etkinlikler',
        library: 'Miras Kütüphanesi',
        contact: 'İletişim'
      },
      donate: 'Bağış Yap',
      cart: 'Sepet'
    },
    en: {
      nav: {
        home: 'Home',
        about: 'About Us',
        products: 'Products',
        activities: 'Activities',
        library: 'Heritage Library',
        contact: 'Contact Us'
      },
      donate: 'Donate Now',
      cart: 'Shopping Cart'
    }
  }

  const lang = content[currentLanguage] || content.ar
  const isRTL = currentLanguage === 'ar'

  const navItems = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'products', path: '/products' },
    { key: 'activities', path: '/activities' },
    { key: 'library', path: '/library' },
    { key: 'contact', path: '/contact' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo */}
          <Link to="/" onClick={scrollToTop} className="flex items-center space-x-2 logo-container">
            <img 
              src={darLogo} 
              alt="دار" 
              className="h-8 w-8 md:h-10 md:w-10 object-contain"
            />
            <div className={`${isRTL ? 'mr-2' : 'ml-2'} hidden sm:block`}>
              <h1 className="text-lg md:text-xl font-bold" style={{ color: 'var(--dar-primary)' }}>
                دار
              </h1>
              <p className="text-xs text-gray-600">
                {currentLanguage === 'ar' ? 'مركز التراث الفلسطيني' : 
                 currentLanguage === 'tr' ? 'Filistin Miras Merkezi' : 
                 'Palestinian Heritage Center'}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                onClick={scrollToTop}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-gray-700'
                }`}
              >
                {lang.nav[item.key]}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <select
                value={currentLanguage}
                onChange={(e) => setCurrentLanguage(e.target.value)}
                className="appearance-none bg-transparent border border-gray-300 rounded px-1 py-1 text-lg focus:outline-none focus:ring-2 focus:ring-primary w-12 h-8 text-center"
                style={{ fontSize: '16px', color: 'transparent' }}
              >
                {Object.entries(languages).map(([code, lang]) => (
                  <option key={code} value={code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-base">
                {languages[currentLanguage]?.flag}
              </div>
            </div>

            {/* Donate Button */}
            <Button
              onClick={onDonateClick}
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center space-x-1 border-primary text-primary hover:bg-primary hover:text-white"
            >
              <Heart className="h-4 w-4" />
              <span>{lang.donate}</span>
            </Button>

            {/* Shopping Cart */}
            <Link to="/cart" onClick={scrollToTop} className="relative">
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-4 w-4 md:h-5 md:w-5" />
                {cartItemsCount > 0 && (
                  <span className="cart-badge">
                    {cartItemsCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  onClick={() => {
                    scrollToTop()
                    setIsMenuOpen(false)
                  }}
                  className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.path 
                      ? 'text-primary bg-primary/10' 
                      : 'text-gray-700'
                  }`}
                >
                  {lang.nav[item.key]}
                </Link>
              ))}
              <Button
                onClick={() => {
                  onDonateClick()
                  setIsMenuOpen(false)
                }}
                variant="outline"
                size="sm"
                className="mx-3 mt-2 border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Heart className="h-4 w-4 mr-2" />
                {lang.donate}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

