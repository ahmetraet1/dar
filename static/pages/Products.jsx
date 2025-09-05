import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, Filter, Search, Star, Heart } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'

const Products = ({ currentLanguage, onAddToCart }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  // تحميل المنتجات من API
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch('/api/products')
        if (response.ok) {
          const data = await response.json()
          setProducts(data.products || [])
        } else {
          console.error('فشل في تحميل المنتجات')
        }
      } catch (error) {
        console.error('خطأ في تحميل المنتجات:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  const content = {
    ar: {
      title: 'المنتجات',
      subtitle: 'اكتشف مجموعتنا المتنوعة من المنتجات التراثية الفلسطينية الأصيلة',
      search: 'البحث في المنتجات...',
      categories: {
        all: 'جميع المنتجات',
        clothing: 'الأزياء التقليدية',
        crafts: 'الحرف اليدوية',
        food: 'المأكولات الفلسطينية',
        accessories: 'الإكسسوارات',
        books: 'الكتب والمراجع'
      },
      addToCart: 'أضف للسلة',
      price: 'السعر',
      currency: 'ليرة تركية'
    },
    tr: {
      title: 'Ürünler',
      subtitle: 'Özgün Filistin miras ürünlerinden oluşan çeşitli koleksiyonumuzu keşfedin',
      search: 'Ürünlerde ara...',
      categories: {
        all: 'Tüm Ürünler',
        clothing: 'Geleneksel Giysiler',
        crafts: 'El Sanatları',
        food: 'Filistin Yemekleri',
        accessories: 'Aksesuarlar',
        books: 'Kitaplar ve Kaynaklar'
      },
      addToCart: 'Sepete Ekle',
      price: 'Fiyat',
      currency: 'Türk Lirası'
    },
    en: {
      title: 'Products',
      subtitle: 'Discover our diverse collection of authentic Palestinian heritage products',
      search: 'Search products...',
      categories: {
        all: 'All Products',
        clothing: 'Traditional Clothing',
        crafts: 'Handicrafts',
        food: 'Palestinian Food',
        accessories: 'Accessories',
        books: 'Books & References'
      },
      addToCart: 'Add to Cart',
      price: 'Price',
      currency: 'Turkish Lira'
    }
  }

  // فلترة المنتجات حسب البحث والفئة
  const lang = content[currentLanguage] || content.ar
  const isRTL = currentLanguage === 'ar'

  // تصفية المنتجات
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name[currentLanguage]?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description[currentLanguage]?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleAddToCart = (product) => {
    onAddToCart({
      id: product.id,
      name: product.name[currentLanguage],
      price: product.price,
      image: product.image
    })
  }

  return (
    <div className={`min-h-screen ${isRTL ? 'arabic-text' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="py-20 px-4 dar-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: 'var(--dar-primary)' }}
          >
            {lang.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg leading-relaxed"
            style={{ color: 'var(--dar-text-light)' }}
          >
            {lang.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder={lang.search}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {Object.entries(lang.categories).map(([key, label]) => (
                <Button
                  key={key}
                  variant={selectedCategory === key ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(key)}
                  className={selectedCategory === key ? 
                    "bg-[var(--dar-primary)] hover:bg-[var(--dar-secondary)]" : 
                    "border-[var(--dar-primary)] text-[var(--dar-primary)] hover:bg-[var(--dar-primary)] hover:text-white"
                  }
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="product-card h-full">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name[currentLanguage]}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-2 right-2">
                      <Button variant="ghost" size="sm" className="bg-white/80 hover:bg-white">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg" style={{ color: 'var(--dar-primary)' }}>
                        {product.name[currentLanguage]}
                      </CardTitle>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                      </div>
                    </div>
                    <CardDescription className="text-sm" style={{ color: 'var(--dar-text-light)' }}>
                      {product.description[currentLanguage]}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold" style={{ color: 'var(--dar-primary)' }}>
                          {product.price}
                        </span>
                        <span className="text-sm text-gray-600 ml-1">
                          {lang.currency}
                        </span>
                      </div>
                      <Button
                        onClick={() => handleAddToCart(product)}
                        className="bg-[var(--dar-primary)] hover:bg-[var(--dar-secondary)] text-white"
                        disabled={!product.inStock}
                      >
                        <ShoppingCart className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                        {lang.addToCart}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">
                {currentLanguage === 'ar' ? 'لا توجد منتجات تطابق البحث' :
                 currentLanguage === 'tr' ? 'Arama ile eşleşen ürün bulunamadı' :
                 'No products match your search'}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Products

