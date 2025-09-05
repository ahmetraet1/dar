import React from 'react'
import { MessageCircle } from 'lucide-react'

const WhatsAppIntegration = ({ 
  phoneNumber = "+905538286235", 
  message = "", 
  className = "",
  children,
  size = "default"
}) => {
  const formatMessage = (msg) => {
    return encodeURIComponent(msg)
  }

  const openWhatsApp = () => {
    // الرقم مع رمز الدولة
    const phoneNumber = "905538286235"
    
    // كشف نوع الجهاز
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    
    let whatsappUrl
    
    if (isMobile) {
      if (isIOS) {
        // للآيفون والآيباد - استخدام رابط مختلف
        whatsappUrl = message && message.trim() !== '' 
          ? `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
          : `https://api.whatsapp.com/send?phone=${phoneNumber}`
      } else {
        // للأندرويد
        whatsappUrl = message && message.trim() !== '' 
          ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
          : `https://wa.me/${phoneNumber}`
      }
    } else {
      // للكمبيوتر - استخدام واتساب ويب
      whatsappUrl = message && message.trim() !== '' 
        ? `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
        : `https://web.whatsapp.com/send?phone=${phoneNumber}`
    }
    
    // فتح الرابط
    window.open(whatsappUrl, '_blank')
  }

  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    default: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  }

  return (
    <button
      onClick={openWhatsApp}
      className={`
        inline-flex items-center justify-center rounded-lg
        bg-green-500 hover:bg-green-600 text-white
        transition-colors duration-200
        ${sizeClasses[size]}
        ${className}
      `}
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      {children || "تواصل عبر واتساب"}
    </button>
  )
}

// مكون خاص لسلة المشتريات
export const WhatsAppCartOrder = ({ cartItems, totalPrice, currentLanguage }) => {
  const content = {
    ar: {
      greeting: "السلام عليكم، أريد طلب المنتجات التالية:",
      total: "المجموع الكلي:",
      currency: "ليرة تركية",
      quantity: "الكمية:",
      orderButton: "إرسال الطلب عبر واتساب"
    },
    tr: {
      greeting: "Merhaba, aşağıdaki ürünleri sipariş etmek istiyorum:",
      total: "Toplam tutar:",
      currency: "Türk Lirası",
      quantity: "Adet:",
      orderButton: "WhatsApp ile Sipariş Ver"
    },
    en: {
      greeting: "Hello, I would like to order the following products:",
      total: "Total amount:",
      currency: "Turkish Lira",
      quantity: "Quantity:",
      orderButton: "Send Order via WhatsApp"
    }
  }

  const lang = content[currentLanguage] || content.ar

  const generateOrderMessage = () => {
    let message = `${lang.greeting}\n\n`
    
    cartItems.forEach((item, index) => {
      const itemName = item.name[currentLanguage] || item.name.ar
      message += `${index + 1}. ${itemName}\n`
      message += `   ${lang.quantity} ${item.quantity}\n`
      message += `   ${item.price} ${lang.currency}\n\n`
    })
    
    message += `${lang.total} ${totalPrice.toFixed(2)} ${lang.currency}`
    
    return message
  }

  if (cartItems.length === 0) {
    return null
  }

  return (
    <WhatsAppIntegration
      message={generateOrderMessage()}
      className="w-full bg-green-500 hover:bg-green-600"
      size="lg"
    >
      {lang.orderButton}
    </WhatsAppIntegration>
  )
}

// مكون خاص للتبرع
export const WhatsAppDonation = ({ amount, donationType, currentLanguage }) => {
  const content = {
    ar: {
      greeting: "السلام عليكم، أريد التبرع لدار التراث الفلسطيني",
      amount: "المبلغ:",
      type: "نوع التبرع:",
      currency: "ليرة تركية",
      donateButton: "تبرع عبر واتساب"
    },
    tr: {
      greeting: "Merhaba, Filistin Miras Merkezi'ne bağış yapmak istiyorum",
      amount: "Tutar:",
      type: "Bağış türü:",
      currency: "Türk Lirası",
      donateButton: "WhatsApp ile Bağış Yap"
    },
    en: {
      greeting: "Hello, I would like to donate to Palestinian Heritage Center",
      amount: "Amount:",
      type: "Donation type:",
      currency: "Turkish Lira",
      donateButton: "Donate via WhatsApp"
    }
  }

  const lang = content[currentLanguage] || content.ar

  const generateDonationMessage = () => {
    let message = `${lang.greeting}\n\n`
    message += `${lang.amount} ${amount} ${lang.currency}\n`
    if (donationType) {
      message += `${lang.type} ${donationType}\n`
    }
    return message
  }

  return (
    <WhatsAppIntegration
      message={generateDonationMessage()}
      className="w-full bg-green-500 hover:bg-green-600"
      size="lg"
    >
      {lang.donateButton}
    </WhatsAppIntegration>
  )
}

export default WhatsAppIntegration

