import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart, CreditCard, MessageCircle } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'

const DonationModal = ({ isOpen, onClose, currentLanguage }) => {
  const [selectedAmount, setSelectedAmount] = useState(null)
  const [customAmount, setCustomAmount] = useState('')
  const [donorName, setDonorName] = useState('')
  const [donorEmail, setDonorEmail] = useState('')

  const content = {
    ar: {
      title: 'ادعم مركز التراث الفلسطيني',
      subtitle: 'مساهمتك تحدث فرقاً حقيقياً في الحفاظ على التراث الفلسطيني',
      amounts: {
        title: 'اختر مبلغ التبرع',
        custom: 'مبلغ آخر'
      },
      form: {
        name: 'الاسم (اختياري)',
        email: 'البريد الإلكتروني (اختياري)',
        namePlaceholder: 'أدخل اسمك',
        emailPlaceholder: 'أدخل بريدك الإلكتروني'
      },
      buttons: {
        donate: 'تبرع الآن',
        whatsapp: 'تبرع عبر واتساب',
        cancel: 'إلغاء'
      },
      currency: 'ليرة تركية',
      impact: {
        title: 'تأثير تبرعك',
        items: [
          '50 ليرة: تساعد في شراء مواد للورش التراثية',
          '100 ليرة: تدعم إنتاج منتج تراثي واحد',
          '250 ليرة: تمول ورشة عمل تراثية كاملة',
          '500 ليرة: تساهم في تنظيم معرض تراثي'
        ]
      }
    },
    tr: {
      title: 'Filistin Miras Merkezini Destekle',
      subtitle: 'Katkınız Filistin mirasının korunmasında gerçek bir fark yaratır',
      amounts: {
        title: 'Bağış Miktarını Seçin',
        custom: 'Diğer Miktar'
      },
      form: {
        name: 'İsim (isteğe bağlı)',
        email: 'E-posta (isteğe bağlı)',
        namePlaceholder: 'İsminizi girin',
        emailPlaceholder: 'E-posta adresinizi girin'
      },
      buttons: {
        donate: 'Şimdi Bağış Yap',
        whatsapp: 'WhatsApp ile Bağış Yap',
        cancel: 'İptal'
      },
      currency: 'Türk Lirası',
      impact: {
        title: 'Bağışınızın Etkisi',
        items: [
          '50 TL: Miras atölyelerinde malzeme alımına yardımcı olur',
          '100 TL: Bir miras ürününün üretimini destekler',
          '250 TL: Tam bir miras atölyesini finanse eder',
          '500 TL: Miras sergisi düzenlenmesine katkıda bulunur'
        ]
      }
    },
    en: {
      title: 'Support Palestinian Heritage Center',
      subtitle: 'Your contribution makes a real difference in preserving Palestinian heritage',
      amounts: {
        title: 'Choose Donation Amount',
        custom: 'Other Amount'
      },
      form: {
        name: 'Name (optional)',
        email: 'Email (optional)',
        namePlaceholder: 'Enter your name',
        emailPlaceholder: 'Enter your email'
      },
      buttons: {
        donate: 'Donate Now',
        whatsapp: 'Donate via WhatsApp',
        cancel: 'Cancel'
      },
      currency: 'Turkish Lira',
      impact: {
        title: 'Impact of Your Donation',
        items: [
          '50 TL: Helps purchase materials for heritage workshops',
          '100 TL: Supports production of one heritage product',
          '250 TL: Funds a complete heritage workshop',
          '500 TL: Contributes to organizing a heritage exhibition'
        ]
      }
    }
  }

  const lang = content[currentLanguage] || content.ar
  const isRTL = currentLanguage === 'ar'

  const predefinedAmounts = [50, 100, 250, 500, 1000]

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount)
    setCustomAmount('')
  }

  const handleCustomAmountChange = (value) => {
    setCustomAmount(value)
    setSelectedAmount(null)
  }

  const getFinalAmount = () => {
    return selectedAmount || parseInt(customAmount) || 0
  }

  const handleWhatsAppDonation = () => {
    const amount = getFinalAmount()
    if (amount <= 0) return

    let message = `مرحباً! أريد التبرع لمركز التراث الفلسطيني - دار\n\n`
    message += `مبلغ التبرع: ${amount} ليرة تركية\n`
    if (donorName) message += `الاسم: ${donorName}\n`
    if (donorEmail) message += `البريد الإلكتروني: ${donorEmail}\n`
    message += `\nيرجى إرسال تفاصيل التبرع وطريقة الدفع.`

    const whatsappUrl = `https://wa.me/905XXXXXXXXX?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    onClose()
  }

  const handleDonation = () => {
    const amount = getFinalAmount()
    if (amount <= 0) return

    // هنا يمكن إضافة تكامل مع بوابة دفع مستقبلاً
    alert(`سيتم إضافة بوابة الدفع قريباً. المبلغ: ${amount} ${lang.currency}`)
    onClose()
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/50"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <Card>
            <CardHeader className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="absolute top-2 right-2"
              >
                <X className="h-4 w-4" />
              </Button>
              <div className="text-center">
                <Heart className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--dar-primary)' }} />
                <CardTitle className="text-2xl" style={{ color: 'var(--dar-primary)' }}>
                  {lang.title}
                </CardTitle>
                <CardDescription className="text-lg mt-2">
                  {lang.subtitle}
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Donation Amounts */}
              <div>
                <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--dar-primary)' }}>
                  {lang.amounts.title}
                </h3>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {predefinedAmounts.map((amount) => (
                    <Button
                      key={amount}
                      variant={selectedAmount === amount ? "default" : "outline"}
                      onClick={() => handleAmountSelect(amount)}
                      className={selectedAmount === amount ? 
                        "bg-[var(--dar-primary)] hover:bg-[var(--dar-secondary)]" : 
                        "border-[var(--dar-primary)] text-[var(--dar-primary)] hover:bg-[var(--dar-primary)] hover:text-white"
                      }
                    >
                      {amount} TL
                    </Button>
                  ))}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {lang.amounts.custom}
                  </label>
                  <Input
                    type="number"
                    placeholder="0"
                    value={customAmount}
                    onChange={(e) => handleCustomAmountChange(e.target.value)}
                    className="text-center"
                  />
                </div>
              </div>

              {/* Donor Information */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {lang.form.name}
                  </label>
                  <Input
                    type="text"
                    placeholder={lang.form.namePlaceholder}
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {lang.form.email}
                  </label>
                  <Input
                    type="email"
                    placeholder={lang.form.emailPlaceholder}
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Impact Information */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3" style={{ color: 'var(--dar-primary)' }}>
                  {lang.impact.title}
                </h4>
                <ul className="space-y-2 text-sm">
                  {lang.impact.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Heart className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" style={{ color: 'var(--dar-secondary)' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleDonation}
                  disabled={getFinalAmount() <= 0}
                  className="flex-1 bg-[var(--dar-primary)] hover:bg-[var(--dar-secondary)] text-white"
                >
                  <CreditCard className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {lang.buttons.donate}
                </Button>
                <Button
                  onClick={handleWhatsAppDonation}
                  disabled={getFinalAmount() <= 0}
                  variant="outline"
                  className="flex-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                >
                  <MessageCircle className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {lang.buttons.whatsapp}
                </Button>
              </div>

              <div className="text-center">
                <Button variant="ghost" onClick={onClose}>
                  {lang.buttons.cancel}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default DonationModal

