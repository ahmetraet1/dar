import React from 'react'
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

  const upcomingEvents = []
  const pastEvents = []

  // تحميل الفعاليات من API
  // سنعرض فقط من /api/events، ويمكن مستقبلاً فصل القادمة/السابقة حسب التاريخ
  // هنا نستخدم useEffect للتحميل عند الدخول
  // ملاحظة: هذه الصفحة للعرض فقط، لا تعديل
  React.useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('/api/events')
        if (res.ok) {
          const data = await res.json()
          // data.events مصفوفة عامة؛ لعدم وجود حقل حالة، سنعرضها كقائمة واحدة في قسم القادمة
          // يمكن لاحقاً التفريق حسب تاريخ اليوم
          setEvents(data.events || [])
        }
      } catch (e) {
        // تجاهل الخطأ للعرض الهادئ
      }
    }
    fetchEvents()
  }, [])

  const [events, setEvents] = React.useState([])

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
            {events.map((event, index) => (
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
                    {event.time && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        {event.time}
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        {typeof event.location === 'object' ? event.location[currentLanguage] : event.location}
                      </div>
                    )}
                    {event.capacity && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        {event.capacity} {currentLanguage === 'ar' ? 'مشارك' : 
                                        currentLanguage === 'tr' ? 'katılımcı' : 'participants'}
                      </div>
                    )}
                    
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

