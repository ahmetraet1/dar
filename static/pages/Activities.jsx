import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

const Activities = ({ currentLanguage }) => {
  const content = {
    ar: {
      title: 'الفعاليات والأنشطة',
      subtitle: 'انضم إلينا في رحلة استكشاف التراث الفلسطيني من خلال فعالياتنا المتنوعة',
      upcoming: 'الفعاليات القادمة',
      past: 'الفعاليات السابقة',
      register: 'سجل الآن',
      learnMore: 'اعرف المزيد',
      date: 'التاريخ',
      time: 'الوقت',
      location: 'المكان',
      capacity: 'السعة',
      free: 'مجاني',
      paid: 'مدفوع'
    },
    tr: {
      title: 'Etkinlikler ve Faaliyetler',
      subtitle: 'Çeşitli etkinliklerimizle Filistin mirasını keşfetme yolculuğunda bize katılın',
      upcoming: 'Yaklaşan Etkinlikler',
      past: 'Geçmiş Etkinlikler',
      register: 'Şimdi Kayıt Ol',
      learnMore: 'Daha Fazla Bilgi',
      date: 'Tarih',
      time: 'Saat',
      location: 'Konum',
      capacity: 'Kapasite',
      free: 'Ücretsiz',
      paid: 'Ücretli'
    },
    en: {
      title: 'Events and Activities',
      subtitle: 'Join us on a journey to explore Palestinian heritage through our diverse events',
      upcoming: 'Upcoming Events',
      past: 'Past Events',
      register: 'Register Now',
      learnMore: 'Learn More',
      date: 'Date',
      time: 'Time',
      location: 'Location',
      capacity: 'Capacity',
      free: 'Free',
      paid: 'Paid'
    }
  }

  const upcomingEvents = [
    {
      id: 1,
      title: {
        ar: 'ورشة التطريز الفلسطيني التقليدي',
        tr: 'Geleneksel Filistin Nakış Atölyesi',
        en: 'Traditional Palestinian Embroidery Workshop'
      },
      description: {
        ar: 'تعلم فن التطريز الفلسطيني التقليدي مع خبراء متخصصين',
        tr: 'Uzman eğitmenlerle geleneksel Filistin nakış sanatını öğrenin',
        en: 'Learn traditional Palestinian embroidery art with expert instructors'
      },
      date: '2024-02-15',
      time: '14:00',
      location: {
        ar: 'مركز دار - إسطنبول',
        tr: 'Dar Merkezi - İstanbul',
        en: 'Dar Center - Istanbul'
      },
      capacity: 20,
      price: 0,
      image: '/api/placeholder/400/250',
      category: 'workshop'
    },
    {
      id: 2,
      title: {
        ar: 'معرض الفن التراثي الفلسطيني',
        tr: 'Filistin Miras Sanatı Sergisi',
        en: 'Palestinian Heritage Art Exhibition'
      },
      description: {
        ar: 'معرض شامل للفنون والحرف التراثية الفلسطينية',
        tr: 'Filistin miras sanatları ve el sanatlarının kapsamlı sergisi',
        en: 'Comprehensive exhibition of Palestinian heritage arts and crafts'
      },
      date: '2024-02-20',
      time: '10:00',
      location: {
        ar: 'قاعة المعارض - مركز دار',
        tr: 'Sergi Salonu - Dar Merkezi',
        en: 'Exhibition Hall - Dar Center'
      },
      capacity: 100,
      price: 0,
      image: '/api/placeholder/400/250',
      category: 'exhibition'
    },
    {
      id: 3,
      title: {
        ar: 'أمسية موسيقية تراثية',
        tr: 'Miras Müzik Gecesi',
        en: 'Heritage Music Evening'
      },
      description: {
        ar: 'أمسية موسيقية تراثية مع فرقة موسيقية متخصصة',
        tr: 'Uzman müzik grubu ile miras müzik gecesi',
        en: 'Heritage music evening with specialized music group'
      },
      date: '2024-02-25',
      time: '19:00',
      location: {
        ar: 'المسرح الرئيسي - مركز دار',
        tr: 'Ana Tiyatro - Dar Merkezi',
        en: 'Main Theater - Dar Center'
      },
      capacity: 150,
      price: 50,
      image: '/api/placeholder/400/250',
      category: 'music'
    }
  ]

  const pastEvents = [
    {
      id: 4,
      title: {
        ar: 'ورشة الطبخ الفلسطيني',
        tr: 'Filistin Mutfağı Atölyesi',
        en: 'Palestinian Cooking Workshop'
      },
      description: {
        ar: 'تعلم طبخ الأطباق الفلسطينية التقليدية',
        tr: 'Geleneksel Filistin yemeklerini pişirmeyi öğrenin',
        en: 'Learn to cook traditional Palestinian dishes'
      },
      date: '2024-01-20',
      participants: 25,
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: {
        ar: 'محاضرة تاريخ فلسطين',
        tr: 'Filistin Tarihi Konferansı',
        en: 'Palestine History Lecture'
      },
      description: {
        ar: 'محاضرة شاملة عن تاريخ فلسطين وحضارتها',
        tr: 'Filistin tarihi ve medeniyeti hakkında kapsamlı konferans',
        en: 'Comprehensive lecture on Palestine history and civilization'
      },
      date: '2024-01-15',
      participants: 80,
      image: '/api/placeholder/400/250'
    }
  ]

  const lang = content[currentLanguage] || content.ar
  const isRTL = currentLanguage === 'ar'

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(currentLanguage === 'ar' ? 'ar-SA' : 
                                  currentLanguage === 'tr' ? 'tr-TR' : 'en-US')
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

      {/* Upcoming Events */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--dar-primary)' }}>
              {lang.upcoming}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="dar-card-hover h-full">
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title[currentLanguage]}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-2 right-2">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        event.price === 0 ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {event.price === 0 ? lang.free : lang.paid}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg" style={{ color: 'var(--dar-primary)' }}>
                      {event.title[currentLanguage]}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {event.description[currentLanguage]}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location[currentLanguage]}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      {event.capacity} {currentLanguage === 'ar' ? 'مشارك' : 
                                      currentLanguage === 'tr' ? 'katılımcı' : 'participants'}
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        className="w-full bg-[var(--dar-primary)] hover:bg-[var(--dar-secondary)] text-white"
                      >
                        {lang.register}
                        <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-2' : 'ml-2'}`} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--dar-light)' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--dar-primary)' }}>
              {lang.past}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="dar-card-hover">
                  <div className="flex">
                    <img
                      src={event.image}
                      alt={event.title[currentLanguage]}
                      className="w-32 h-32 object-cover rounded-l-lg"
                    />
                    <div className="flex-1">
                      <CardHeader>
                        <CardTitle className="text-lg" style={{ color: 'var(--dar-primary)' }}>
                          {event.title[currentLanguage]}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {event.description[currentLanguage]}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          {formatDate(event.date)}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="w-4 h-4 mr-2" />
                          {event.participants} {currentLanguage === 'ar' ? 'مشارك' : 
                                                currentLanguage === 'tr' ? 'katılımcı' : 'participants'}
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Activities

