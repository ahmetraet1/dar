import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Heart, ShoppingBag, Calendar, BookOpen, Users, Star } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import darLogo from '../assets/darlogo.png'

const Home = ({ currentLanguage, onDonateClick, onAddToCart }) => {
  const content = {
    ar: {
      hero: {
        subtitle: 'Filistin Miras Merkezi - DÂR',
        description: 'دار – مركز التراث الفلسطيني هو وجهة تجمع بين الثقافة والمذاق والفن، حيث نعيد تقديم الموروث الفلسطيني بأسلوب عصري يحافظ على أصالته، حيث نحتفي بالمأكولات التقليدية، والحرف اليدوية، والأزياء التراثية، ونفتح المجال للجميع للتعرف على فلسطين من خلال تجربة حية ومتنوعة.',
        watchVideo: 'شاهد الفيديو التعريفي',
        exploreCollection: 'من نحن'
      },
      sections: {
        heritage: {
          title: 'مكتبة التراث',
          description: 'اكتشف مجموعتنا التراثية من القطع التراثية الفلسطينية الأصيلة'
        },
        products: {
          title: 'المتجر',
          description: 'اقتن معنا أصيلة من التراث الفلسطيني، مصنوعة بعناية فائقة وحب للتفاصيل'
        },
        support: {
          title: 'ادعم مركز التراث الفلسطيني',
          description: 'مساهمتك تحدث فرقاً حقيقياً في الحفاظ على التراث الفلسطيني ونشره للأجيال القادمة'
        }
      },
      activities: {
        title: 'أنشطتنا وخدماتنا',
        items: [
          {
            title: 'الأزياء التقليدية',
            description: 'فساتين مطرزة وأوشحة وإكسسوارات تقليدية',
            icon: 'clothing'
          },
          {
            title: 'الحرف اليدوية',
            description: 'تطريز وفخار وأعمال خشبية بزخارف تقليدية',
            icon: 'crafts'
          },
          {
            title: 'المخبوزات والأطعمة الفلسطينية',
            description: 'كعك العيد والمعمول والزعتر والسماق والأطباق التقليدية بنكهات أصيلة',
            icon: 'food'
          },
          {
            title: 'ركن المرأة',
            description: 'مكتبة وتجربة وثائقية عن فلسطين وتراثها',
            icon: 'women'
          },
          {
            title: 'الفعاليات الثقافية والفنية',
            description: 'معارض وعروض موسيقية وورش عمل',
            icon: 'events'
          },
          {
            title: 'ركن المعرفة',
            description: 'مكتبة ومحتوى وثائقي عن فلسطين وتراثها',
            icon: 'knowledge'
          }
        ]
      },
      cta: {
        title: 'في دار، نقدم منتجات وفعاليات تحمل قيمة ثقافية وتاريخية',
        description: 'من المخبوزات والأطعمة الفلسطينية إلى الحرف والفنون والمعارض. ندعوكم لزيارة المركز والمشاركة في أنشطتنا، والتعرف على جماليات التراث الفلسطيني عبر تجربة ألوان وقصص تروي حكاية شعب وحضارة.',
        donate: 'تبرع الآن',
        visit: 'زر المركز'
      }
    },
    tr: {
      hero: {
        subtitle: 'Palestinian Heritage Center - DÂR',
        description: 'Dar - Filistin Miras Merkezi, kültür, lezzet ve sanatı bir araya getiren bir destinasyondur. Filistin mirasını özgünlüğünü koruyarak çağdaş bir tarzda yeniden sunuyoruz.',
        watchVideo: 'Tanıtım Videosunu İzle',
        exploreCollection: 'Hakkımızda'
      },
      sections: {
        heritage: {
          title: 'Miras Kütüphanesi',
          description: 'Özgün Filistin miras parçalarından oluşan koleksiyonumuzu keşfedin'
        },
        products: {
          title: 'Mağaza',
          description: 'Özenle ve detaylara olan sevgiyle yapılmış özgün Filistin mirası ürünleri'
        },
        support: {
          title: 'Filistin Miras Merkezini Destekle',
          description: 'Katkınız Filistin mirasının korunması ve gelecek nesillere aktarılmasında gerçek bir fark yaratır'
        }
      },
      activities: {
        title: 'Faaliyetlerimiz ve Hizmetlerimiz',
        items: [
          {
            title: 'Geleneksel Giysiler',
            description: 'İşlemeli elbiseler, şallar ve geleneksel aksesuarlar',
            icon: 'clothing'
          },
          {
            title: 'El Sanatları',
            description: 'Geleneksel motiflerle nakış, çömlek ve ahşap işleri',
            icon: 'crafts'
          },
          {
            title: 'Filistin Unlu Mamulleri ve Yemekleri',
            description: 'Bayram kekleri, mamul, za\'atar, sumak ve özgün lezzetlerle geleneksel yemekler',
            icon: 'food'
          },
          {
            title: 'Kadın Köşesi',
            description: 'Filistin ve mirası hakkında kütüphane ve belgesel deneyimi',
            icon: 'women'
          },
          {
            title: 'Kültürel ve Sanatsal Etkinlikler',
            description: 'Sergiler, müzik performansları ve atölyeler',
            icon: 'events'
          },
          {
            title: 'Bilgi Köşesi',
            description: 'Filistin ve mirası hakkında kütüphane ve belgesel içerik',
            icon: 'knowledge'
          }
        ]
      },
      cta: {
        title: 'Dar\'da kültürel ve tarihi değer taşıyan ürünler ve etkinlikler sunuyoruz',
        description: 'Filistin unlu mamulleri ve yemeklerinden el sanatları, sanat ve sergilere kadar. Merkezimizi ziyaret etmenizi ve faaliyetlerimize katılmanızı, bir halkın ve medeniyetin hikayesini anlatan renkler ve hikayeler aracılığıyla Filistin mirasının güzelliklerini keşfetmenizi davet ediyoruz.',
        donate: 'Bağış Yap',
        visit: 'Merkezi Ziyaret Et'
      }
    },
    en: {
      hero: {
        subtitle: 'Palestinian Heritage Center - DÂR',
        description: 'Dar - Palestinian Heritage Center is a destination that brings together culture, taste and art, where we re-present Palestinian heritage in a contemporary style that preserves its authenticity.',
        watchVideo: 'Watch Introduction Video',
        exploreCollection: 'About Us'
      },
      sections: {
        heritage: {
          title: 'Heritage Library',
          description: 'Discover our heritage collection of authentic Palestinian heritage pieces'
        },
        products: {
          title: 'Store',
          description: 'Acquire authentic Palestinian heritage products, made with great care and love for details'
        },
        support: {
          title: 'Support Palestinian Heritage Center',
          description: 'Your contribution makes a real difference in preserving Palestinian heritage and spreading it to future generations'
        }
      },
      activities: {
        title: 'Our Activities and Services',
        items: [
          {
            title: 'Traditional Clothing',
            description: 'Embroidered dresses, scarves and traditional accessories',
            icon: 'clothing'
          },
          {
            title: 'Handicrafts',
            description: 'Embroidery, pottery and woodwork with traditional motifs',
            icon: 'crafts'
          },
          {
            title: 'Palestinian Baked Goods and Foods',
            description: 'Holiday cakes, ma\'amoul, za\'atar, sumac and traditional dishes with authentic flavors',
            icon: 'food'
          },
          {
            title: 'Women\'s Corner',
            description: 'Library and documentary experience about Palestine and its heritage',
            icon: 'women'
          },
          {
            title: 'Cultural and Artistic Events',
            description: 'Exhibitions, musical performances and workshops',
            icon: 'events'
          },
          {
            title: 'Knowledge Corner',
            description: 'Library and documentary content about Palestine and its heritage',
            icon: 'knowledge'
          }
        ]
      },
      cta: {
        title: 'At Dar, we offer products and events that carry cultural and historical value',
        description: 'From Palestinian baked goods and foods to crafts, arts and exhibitions. We invite you to visit the center and participate in our activities, and discover the beauty of Palestinian heritage through colors and stories that tell the story of a people and civilization.',
        donate: 'Donate Now',
        visit: 'Visit Center'
      }
    }
  }

  const lang = content[currentLanguage] || content.ar
  const isRTL = currentLanguage === 'ar'

  const iconComponents = {
    clothing: Users,
    crafts: Star,
    food: ShoppingBag,
    women: BookOpen,
    events: Calendar,
    knowledge: BookOpen
  }

  return (
    <div className={`min-h-screen ${isRTL ? 'arabic-text' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 dar-gradient">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo في الوسط بدلاً من الدائرة البيضاء */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 md:mb-8"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 logo-container">
              <img 
                src={darLogo} 
                alt="دار" 
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-gray-600 px-2"
          >
            {lang.hero.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm md:text-lg leading-relaxed max-w-4xl mx-auto mb-6 md:mb-8 px-4"
            style={{ color: 'var(--dar-text)' }}
          >
            {lang.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4"
          >
            <Button 
              size="lg" 
              className="bg-[var(--dar-primary)] hover:bg-[var(--dar-secondary)] text-white text-sm md:text-base"
            >
              {lang.hero.watchVideo}
              <ArrowRight className={`w-4 h-4 md:w-5 md:h-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
            </Button>
            <Link to="/about">
              <Button 
                variant="outline" 
                size="lg"
                className="border-[var(--dar-primary)] text-[var(--dar-primary)] hover:bg-[var(--dar-primary)] hover:text-white text-sm md:text-base w-full sm:w-auto"
              >
                {lang.hero.exploreCollection}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Heritage Library */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
            <Link to="/library">
              <Card className="dar-card-hover h-full cursor-pointer group">
                <CardHeader className="text-center p-4 md:p-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-[var(--dar-accent)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-6 h-6 md:w-8 md:h-8" style={{ color: 'var(--dar-primary)' }} />
                  </div>
                  <CardTitle className="text-lg md:text-xl" style={{ color: 'var(--dar-primary)' }}>
                    {lang.sections.heritage.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center p-4 md:p-6 pt-0">
                  <CardDescription className="text-sm md:text-lg" style={{ color: 'var(--dar-text-light)' }}>
                    {lang.sections.heritage.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
            </motion.div>

            {/* Products */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
            <Link to="/products">
              <Card className="dar-card-hover h-full cursor-pointer group">
                <CardHeader className="text-center p-4 md:p-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-[var(--dar-secondary)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <ShoppingBag className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg md:text-xl" style={{ color: 'var(--dar-primary)' }}>
                    {lang.sections.products.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center p-4 md:p-6 pt-0">
                  <CardDescription className="text-sm md:text-lg" style={{ color: 'var(--dar-text-light)' }}>
                    {lang.sections.products.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="dar-card-hover h-full cursor-pointer group" onClick={onDonateClick}>
                <CardHeader className="text-center p-4 md:p-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-[var(--dar-primary)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg md:text-xl" style={{ color: 'var(--dar-primary)' }}>
                    {lang.sections.support.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-lg" style={{ color: 'var(--dar-text-light)' }}>
                    {lang.sections.support.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--dar-light)' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: 'var(--dar-primary)' }}>
              {lang.activities.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lang.activities.items.map((activity, index) => {
              const IconComponent = iconComponents[activity.icon]
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="dar-card-hover h-full">
                    <CardHeader className="text-center">
                      <div 
                        className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: index % 2 === 0 ? 'var(--dar-secondary)' : 'var(--dar-primary)' }}
                      >
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <CardTitle className="text-xl" style={{ color: 'var(--dar-primary)' }}>
                        {activity.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-lg leading-relaxed" style={{ color: 'var(--dar-text-light)' }}>
                        {activity.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: 'var(--dar-primary)' }}>
              {lang.cta.title}
            </h2>
            <p className="text-xl mb-8 leading-relaxed" style={{ color: 'var(--dar-text)' }}>
              {lang.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={onDonateClick}
                className="bg-[var(--dar-primary)] hover:bg-[var(--dar-secondary)] text-white"
              >
                <Heart className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {lang.cta.donate}
              </Button>
              <a 
                href="https://maps.app.goo.gl/HzU88W4HG3drXFoF6?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-[var(--dar-primary)] text-[var(--dar-primary)] hover:bg-[var(--dar-primary)] hover:text-white"
                >
                  {lang.cta.visit}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

