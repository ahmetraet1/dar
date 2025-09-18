import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Book, Download, Search, Filter, Eye, Star } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'

const Library = ({ currentLanguage }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const content = {
    ar: {
      title: 'مكتبة التراث',
      subtitle: 'اكتشف مجموعتنا الغنية من الكتب والمراجع والوثائق التراثية',
      search: 'البحث في المكتبة...',
      categories: {
        all: 'جميع الكتب',
        history: 'التاريخ',
        culture: 'الثقافة والتراث',
        arts: 'الفنون والحرف',
        literature: 'الأدب',
        research: 'البحوث والدراسات'
      },
      download: 'تحميل',
      preview: 'معاينة',
      pages: 'صفحة',
      author: 'المؤلف',
      year: 'سنة النشر',
      language: 'اللغة',
      free: 'مجاني',
      rating: 'التقييم'
    },
    tr: {
      title: 'Miras Kütüphanesi',
      subtitle: 'Zengin kitap, kaynak ve miras belgesi koleksiyonumuzu keşfedin',
      search: 'Kütüphanede ara...',
      categories: {
        all: 'Tüm Kitaplar',
        history: 'Tarih',
        culture: 'Kültür ve Miras',
        arts: 'Sanat ve El Sanatları',
        literature: 'Edebiyat',
        research: 'Araştırma ve Çalışmalar'
      },
      download: 'İndir',
      preview: 'Önizleme',
      pages: 'sayfa',
      author: 'Yazar',
      year: 'Yayın Yılı',
      language: 'Dil',
      free: 'Ücretsiz',
      rating: 'Değerlendirme'
    },
    en: {
      title: 'Heritage Library',
      subtitle: 'Discover our rich collection of books, references and heritage documents',
      search: 'Search in library...',
      categories: {
        all: 'All Books',
        history: 'History',
        culture: 'Culture & Heritage',
        arts: 'Arts & Crafts',
        literature: 'Literature',
        research: 'Research & Studies'
      },
      download: 'Download',
      preview: 'Preview',
      pages: 'pages',
      author: 'Author',
      year: 'Publication Year',
      language: 'Language',
      free: 'Free',
      rating: 'Rating'
    }
  }

  const [books, setBooks] = useState([])

  // تحميل الكتب من API
  useEffect(() => {
    const loadBooks = async () => {
      try {
        const res = await fetch('/api/library')
        if (res.ok) {
          const data = await res.json()
          setBooks((data.library || []).map(item => ({
            id: item.id,
            title: item.title,
            author: item.author,
            description: item.description,
            category: item.category || item.type || 'all',
            pages: item.pages,
            year: item.year,
            language: item.language || { ar: 'العربية', tr: 'Arapça', en: 'Arabic' },
            rating: item.rating || 0,
            cover: item.cover || '/api/placeholder/200/280',
            free: item.free !== false
          })))
        }
      } catch (e) {
        // تجاهل للأخطاء الصامتة
      }
    }
    loadBooks()
  }, [])

  const lang = content[currentLanguage] || content.ar
  const isRTL = currentLanguage === 'ar'

  // تصفية الكتب
  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title[currentLanguage]?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author[currentLanguage]?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.description[currentLanguage]?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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

      {/* Books Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBooks.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="book-card h-full">
                  <div className="relative">
                    <img
                      src={book.cover}
                      alt={book.title[currentLanguage]}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-semibold">
                        {lang.free}
                      </span>
                    </div>
                    <div className="absolute top-2 left-2">
                      <div className="flex items-center bg-white/90 rounded px-2 py-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="text-xs font-semibold">{book.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base leading-tight" style={{ color: 'var(--dar-primary)' }}>
                      {book.title[currentLanguage]}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                      {book.author[currentLanguage]}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {book.description[currentLanguage]}
                    </p>
                    
                    <div className="space-y-1 text-xs text-gray-500">
                      <div className="flex justify-between">
                        <span>{lang.pages}:</span>
                        <span>{book.pages} {lang.pages}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{lang.year}:</span>
                        <span>{book.year}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{lang.language}:</span>
                        <span>{book.language[currentLanguage]}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-[var(--dar-primary)] text-[var(--dar-primary)] hover:bg-[var(--dar-primary)] hover:text-white"
                      >
                        <Eye className="h-3 w-3 mr-1" />
                        {lang.preview}
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-[var(--dar-primary)] hover:bg-[var(--dar-secondary)] text-white"
                      >
                        <Download className="h-3 w-3 mr-1" />
                        {lang.download}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredBooks.length === 0 && (
            <div className="text-center py-12">
              <Book className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p className="text-lg text-gray-600">
                {currentLanguage === 'ar' ? 'لا توجد كتب تطابق البحث' :
                 currentLanguage === 'tr' ? 'Arama ile eşleşen kitap bulunamadı' :
                 'No books match your search'}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Library

