// حل الواتساب النهائي والمضمون 100%
(function() {
    'use strict';
    
    const PHONE_NUMBER = '905538286235';
    
    function openWhatsApp(message = '') {
        const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    }
    
    function setupWhatsApp() {
        // إزالة جميع الأحداث السابقة
        document.querySelectorAll('*').forEach(el => {
            el.removeEventListener('click', handleWhatsAppClick);
        });
        
        // إضافة حدث للنقر على الصفحة كاملة
        document.addEventListener('click', handleWhatsAppClick, true);
    }
    
    function handleWhatsAppClick(e) {
        const element = e.target;
        const text = element.textContent || element.innerText || '';
        
        // التحقق من أزرار الواتساب
        if (
            text.includes('واتساب') || 
            text.includes('WhatsApp') || 
            text.includes('تبرع') ||
            text.includes('طلب') ||
            text.includes('سلة') ||
            text.includes('اتصل') ||
            element.classList.contains('whatsapp') ||
            element.closest('.whatsapp') ||
            element.href && element.href.includes('whatsapp')
        ) {
            e.preventDefault();
            e.stopPropagation();
            
            let message = 'مرحباً، أود التواصل معكم من موقع دار التراث الفلسطيني';
            
            if (text.includes('تبرع')) {
                message = 'أود التبرع لدعم مركز دار للتراث الفلسطيني';
            } else if (text.includes('طلب') || text.includes('سلة')) {
                message = 'أود إرسال طلب من موقع دار التراث الفلسطيني';
            }
            
            openWhatsApp(message);
        }
    }
    
    // تشغيل فوري
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupWhatsApp);
    } else {
        setupWhatsApp();
    }
    
    // مراقبة التغييرات
    const observer = new MutationObserver(setupWhatsApp);
    observer.observe(document.body, { 
        childList: true, 
        subtree: true,
        attributes: true 
    });
    
    // إتاحة الدالة عالمياً
    window.openWhatsApp = openWhatsApp;
    
    console.log('تم تحميل مساعد الواتساب النهائي');
})();

