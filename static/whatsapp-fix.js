// حل الواتساب البسيط والفعال
(function() {
    'use strict';
    
    // الرقم الثابت
    const PHONE_NUMBER = '905538286235';
    
    // دالة بسيطة لفتح الواتساب
    function openWhatsApp(message = '') {
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
        
        // فتح في نافذة جديدة
        window.open(url, '_blank');
    }
    
    // ربط جميع أزرار الواتساب عند تحميل الصفحة
    document.addEventListener('DOMContentLoaded', function() {
        // البحث عن جميع الأزرار والروابط التي تحتوي على واتساب
        const selectors = [
            'a[href*="whatsapp"]',
            'a[href*="wa.me"]', 
            'button[onclick*="whatsapp"]',
            '.whatsapp-btn',
            '[data-whatsapp]'
        ];
        
        selectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                element.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // تحديد الرسالة حسب السياق
                    let message = '';
                    const text = this.textContent.toLowerCase();
                    
                    if (text.includes('تبرع') || text.includes('donate')) {
                        message = 'أود التبرع لدعم مركز دار للتراث الفلسطيني';
                    } else if (text.includes('طلب') || text.includes('سلة') || text.includes('cart')) {
                        message = 'أود إرسال طلب من موقع دار التراث الفلسطيني';
                    } else {
                        message = 'مرحباً، أود التواصل معكم';
                    }
                    
                    openWhatsApp(message);
                });
            });
        });
    });
    
    // إتاحة الدالة عالمياً
    window.openWhatsApp = openWhatsApp;
    
    console.log('تم تحميل مساعد الواتساب البسيط');
})();

