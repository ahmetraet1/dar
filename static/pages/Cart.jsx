import React, { useEffect } from 'react'
import { Trash2, Plus, Minus, ShoppingBag, MessageCircle, ArrowLeft } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Link } from 'react-router-dom'

const Cart = ({ currentLanguage, cartItems, onRemoveFromCart, onUpdateQuantity }) => {
  // التمرير إلى أعلى الصفحة عند تحميل المكون
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // دالة للتمرير إلى أعلى الصفحة
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const content = {
    ar: {
      title: 'سلة المشتريات',
      empty: {
        title: 'سلة المشتريات فارغة',
        description: 'لم تقم بإضافة أي منتجات بعد',
        button: 'تصفح المنتجات'
      },
      item: 'منتج',
      items: 'منتجات',
      quantity: 'الكمية',
      price: 'السعر',
      total: 'المجموع',
      subtotal: 'المجموع الفرعي',
      shipping: 'الشحن',
      finalTotal: 'المجموع النهائي',
      currency: 'ليرة تركية',
      checkout: 'إتمام الطلب عبر واتساب',
      remove: 'إزالة',
      continue: 'متابعة التسوق',
      free: 'مجاني'
    },
    tr: {
      title: 'Sepet',
      empty: {
        title: 'Sepetiniz Boş',
        description: 'Henüz hiç ürün eklemediniz',
        button: 'Ürünleri Görüntüle'
      },
      item: 'ürün',
      items: 'ürün',
      quantity: 'Miktar',
      price: 'Fiyat',
      total: 'Toplam',
      subtotal: 'Ara Toplam',
      shipping: 'Kargo',
      finalTotal: 'Genel Toplam',
      currency: 'Türk Lirası',
      checkout: 'WhatsApp ile Sipariş Ver',
      remove: 'Kaldır',
      continue: 'Alışverişe Devam',
      free: 'Ücretsiz'
    },
    en: {
      title: 'Shopping Cart',
      empty: {
        title: 'Your Cart is Empty',
        description: 'You haven\'t added any products yet',
        button: 'Browse Products'
      },
      item: 'item',
      items: 'items',
      quantity: 'Quantity',
      price: 'Price',
      total: 'Total',
      subtotal: 'Subtotal',
      shipping: 'Shipping',
      finalTotal: 'Final Total',
      currency: 'Turkish Lira',
      checkout: 'Checkout via WhatsApp',
      remove: 'Remove',
      continue: 'Continue Shopping',
      free: 'Free'
    }
  }

  const lang = content[currentLanguage] || content.ar
  const isRTL = currentLanguage === 'ar'

  // حساب المجموع
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal > 200 ? 0 : 25 // شحن مجاني للطلبات أكثر من 200 ليرة
  const total = subtotal + shipping

  // إنشاء رسالة واتساب
  const createWhatsAppMessage = () => {
    let message = `مرحباً! أريد طلب المنتجات التالية من دار:\n\n`
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`
      message += `   الكمية: ${item.quantity}\n`
      message += `   السعر: ${item.price} ليرة تركية\n`
      message += `   المجموع: ${item.price * item.quantity} ليرة تركية\n\n`
    })
    
    message += `المجموع الفرعي: ${subtotal} ليرة تركية\n`
    message += `الشحن: ${shipping === 0 ? 'مجاني' : shipping + ' ليرة تركية'}\n`
    message += `المجموع النهائي: ${total} ليرة تركية\n\n`
    message += `يرجى تأكيد الطلب وإرسال تفاصيل التوصيل.`
    
    return encodeURIComponent(message)
  }

  const handleWhatsAppCheckout = () => {
    const message = createWhatsAppMessage()
    const whatsappUrl = `https://wa.me/905XXXXXXXXX?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  if (cartItems.length === 0) {
    return (
      <div className={`min-h-screen ${isRTL ? 'arabic-text' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div
            >
              <ShoppingBag className="w-24 h-24 mx-auto mb-8 text-gray-300" />
              <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--dar-primary)' }}>
                {lang.empty.title}
              </h1>
              <p className="text-lg mb-8 text-gray-600">
                {lang.empty.description}
              </p>
              <Link to="/products">
                <Button 
                  size="lg"
                  className="bg-[var(--dar-primary)] hover:bg-[var(--dar-secondary)] text-white"
                >
                  {lang.empty.button}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${isRTL ? 'arabic-text' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <section className="py-12 px-4 dar-gradient">
        <div className="max-w-4xl mx-auto">
            <div
              className="grid gap-6"
            >
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--dar-primary)' }}>
                {lang.title}
              </h1>
              <p className="text-lg" style={{ color: 'var(--dar-text-light)' }}>
                {cartItems.length} {cartItems.length === 1 ? lang.item : lang.items}
              </p>
            </div>
            <Link to="/products">
              <Button variant="outline" className="border-[var(--dar-primary)] text-[var(--dar-primary)]">
                <ArrowLeft className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {lang.continue}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cartItems.map((item, index) => (
                  <div
                    key={item.id}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold" style={{ color: 'var(--dar-primary)' }}>
                              {item.name}
                            </h3>
                            <p className="text-gray-600">
                              {lang.price}: {item.price} {lang.currency}
                            </p>
                          </div>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-12 text-center font-semibold">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>

                          {/* Item Total */}
                          <div className="text-right">
                            <p className="text-lg font-bold" style={{ color: 'var(--dar-primary)' }}>
                              {item.price * item.quantity} {lang.currency}
                            </p>
                          </div>

                          {/* Remove Button */}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onRemoveFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div
              >
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle style={{ color: 'var(--dar-primary)' }}>
                      ملخص الطلب
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>{lang.subtotal}</span>
                      <span className="font-semibold">{subtotal} {lang.currency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{lang.shipping}</span>
                      <span className="font-semibold">
                        {shipping === 0 ? lang.free : `${shipping} ${lang.currency}`}
                      </span>
                    </div>
                    {shipping === 0 && subtotal > 200 && (
                      <p className="text-sm text-green-600">
                        {currentLanguage === 'ar' ? 'شحن مجاني للطلبات أكثر من 200 ليرة!' :
                         currentLanguage === 'tr' ? '200 TL üzeri siparişlerde ücretsiz kargo!' :
                         'Free shipping on orders over 200 TL!'}
                      </p>
                    )}
                    <hr />
                    <div className="flex justify-between text-lg font-bold">
                      <span>{lang.finalTotal}</span>
                      <span style={{ color: 'var(--dar-primary)' }}>
                        {total} {lang.currency}
                      </span>
                    </div>
                    
                    <Button
                      onClick={handleWhatsAppCheckout}
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      size="lg"
                    >
                      <MessageCircle className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      {lang.checkout}
                    </Button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      {currentLanguage === 'ar' ? 'سيتم توجيهك إلى واتساب لإتمام الطلب' :
                       currentLanguage === 'tr' ? 'Siparişi tamamlamak için WhatsApp\'a yönlendirileceksiniz' :
                       'You will be redirected to WhatsApp to complete the order'}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cart

