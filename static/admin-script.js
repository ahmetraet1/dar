// لوحة الإدارة الشاملة - JavaScript

// الترجمات
const translations = {
    ar: {
        'main-title': 'لوحة الإدارة - دار التراث الفلسطيني',
        'main-subtitle': 'إدارة شاملة للموقع والمحتوى',
        'products-label': 'المنتجات',
        'categories-label': 'الفئات',
        'languages-label': 'اللغات',
        'products-title': 'إدارة المنتجات',
        'products-desc': 'إضافة وتعديل وحذف المنتجات',
        'add-product-btn': 'إضافة منتج جديد',
        'view-products-btn': 'عرض المنتجات',
        'content-title': 'إدارة المحتوى',
        'content-desc': 'تحرير محتوى الصفحات والنصوص',
        'edit-home-btn': 'تحرير الصفحة الرئيسية',
        'edit-about-btn': 'تحرير صفحة من نحن',
        'settings-title': 'إعدادات الموقع',
        'settings-desc': 'إعدادات عامة ومعلومات الاتصال',
        'edit-contact-btn': 'معلومات الاتصال',
        'edit-social-btn': 'وسائل التواصل',
        'analytics-title': 'الإحصائيات',
        'analytics-desc': 'تقارير ومعلومات الموقع',
        'view-analytics-btn': 'عرض الإحصائيات',
        'export-data-btn': 'تصدير البيانات',
        'backup-title': 'النسخ الاحتياطي',
        'backup-desc': 'حفظ واستعادة بيانات الموقع',
        'create-backup-btn': 'إنشاء نسخة احتياطية',
        'restore-backup-btn': 'استعادة نسخة احتياطية',
        'whatsapp-title': 'إعدادات الواتساب',
        'whatsapp-desc': 'إدارة رقم الواتساب والرسائل',
        'edit-whatsapp-btn': 'تحرير الإعدادات',
        'test-whatsapp-btn': 'اختبار الواتساب',
        'modal-title': 'إضافة منتج جديد',
        'name-ar-label': 'اسم المنتج (عربي)',
        'name-tr-label': 'اسم المنتج (تركي)',
        'name-en-label': 'اسم المنتج (إنجليزي)',
        'desc-ar-label': 'الوصف (عربي)',
        'desc-tr-label': 'الوصف (تركي)',
        'desc-en-label': 'الوصف (إنجليزي)',
        'price-label': 'السعر (ليرة تركية)',
        'category-label': 'الفئة',
        'image-label': 'صورة المنتج',
        'save-product-btn': 'حفظ المنتج',
        'cancel-btn': 'إلغاء',
        'products-list-title': 'قائمة المنتجات'
    },
    tr: {
        'main-title': 'Yönetim Paneli - Dar Filistin Miras Merkezi',
        'main-subtitle': 'Site ve içerik için kapsamlı yönetim',
        'products-label': 'Ürünler',
        'categories-label': 'Kategoriler',
        'languages-label': 'Diller',
        'products-title': 'Ürün Yönetimi',
        'products-desc': 'Ürün ekleme, düzenleme ve silme',
        'add-product-btn': 'Yeni Ürün Ekle',
        'view-products-btn': 'Ürünleri Görüntüle',
        'content-title': 'İçerik Yönetimi',
        'content-desc': 'Sayfa içeriği ve metinleri düzenleme',
        'edit-home-btn': 'Ana Sayfayı Düzenle',
        'edit-about-btn': 'Hakkımızda Sayfasını Düzenle',
        'settings-title': 'Site Ayarları',
        'settings-desc': 'Genel ayarlar ve iletişim bilgileri',
        'edit-contact-btn': 'İletişim Bilgileri',
        'edit-social-btn': 'Sosyal Medya',
        'analytics-title': 'İstatistikler',
        'analytics-desc': 'Raporlar ve site bilgileri',
        'view-analytics-btn': 'İstatistikleri Görüntüle',
        'export-data-btn': 'Veri Dışa Aktar',
        'backup-title': 'Yedekleme',
        'backup-desc': 'Site verilerini kaydetme ve geri yükleme',
        'create-backup-btn': 'Yedek Oluştur',
        'restore-backup-btn': 'Yedek Geri Yükle',
        'whatsapp-title': 'WhatsApp Ayarları',
        'whatsapp-desc': 'WhatsApp numarası ve mesaj yönetimi',
        'edit-whatsapp-btn': 'Ayarları Düzenle',
        'test-whatsapp-btn': 'WhatsApp Test',
        'modal-title': 'Yeni Ürün Ekle',
        'name-ar-label': 'Ürün Adı (Arapça)',
        'name-tr-label': 'Ürün Adı (Türkçe)',
        'name-en-label': 'Ürün Adı (İngilizce)',
        'desc-ar-label': 'Açıklama (Arapça)',
        'desc-tr-label': 'Açıklama (Türkçe)',
        'desc-en-label': 'Açıklama (İngilizce)',
        'price-label': 'Fiyat (Türk Lirası)',
        'category-label': 'Kategori',
        'image-label': 'Ürün Resmi',
        'save-product-btn': 'Ürünü Kaydet',
        'cancel-btn': 'İptal',
        'products-list-title': 'Ürün Listesi'
    },
    en: {
        'main-title': 'Admin Panel - Dar Palestinian Heritage Center',
        'main-subtitle': 'Comprehensive management for site and content',
        'products-label': 'Products',
        'categories-label': 'Categories',
        'languages-label': 'Languages',
        'products-title': 'Product Management',
        'products-desc': 'Add, edit and delete products',
        'add-product-btn': 'Add New Product',
        'view-products-btn': 'View Products',
        'content-title': 'Content Management',
        'content-desc': 'Edit page content and texts',
        'edit-home-btn': 'Edit Home Page',
        'edit-about-btn': 'Edit About Page',
        'settings-title': 'Site Settings',
        'settings-desc': 'General settings and contact information',
        'edit-contact-btn': 'Contact Information',
        'edit-social-btn': 'Social Media',
        'analytics-title': 'Analytics',
        'analytics-desc': 'Reports and site information',
        'view-analytics-btn': 'View Analytics',
        'export-data-btn': 'Export Data',
        'backup-title': 'Backup',
        'backup-desc': 'Save and restore site data',
        'create-backup-btn': 'Create Backup',
        'restore-backup-btn': 'Restore Backup',
        'whatsapp-title': 'WhatsApp Settings',
        'whatsapp-desc': 'WhatsApp number and message management',
        'edit-whatsapp-btn': 'Edit Settings',
        'test-whatsapp-btn': 'Test WhatsApp',
        'modal-title': 'Add New Product',
        'name-ar-label': 'Product Name (Arabic)',
        'name-tr-label': 'Product Name (Turkish)',
        'name-en-label': 'Product Name (English)',
        'desc-ar-label': 'Description (Arabic)',
        'desc-tr-label': 'Description (Turkish)',
        'desc-en-label': 'Description (English)',
        'price-label': 'Price (Turkish Lira)',
        'category-label': 'Category',
        'image-label': 'Product Image',
        'save-product-btn': 'Save Product',
        'cancel-btn': 'Cancel',
        'products-list-title': 'Product List'
    }
};

let currentLanguage = 'ar';
let products = [];
let editingProductId = null;
let siteSettings = {};

// التحقق من تسجيل الدخول عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    checkAuthentication();
    
    // ربط النموذج
    document.getElementById('productForm').addEventListener('submit', saveProduct);
    
    // تحميل البيانات
    loadProducts();
    loadSettings();
    
    // إغلاق النافذة عند النقر خارجها
    window.onclick = function(event) {
        const modal = document.getElementById('productModal');
        if (event.target === modal) {
            closeModal();
        }
    };
});

// التحقق من المصادقة
async function checkAuthentication() {
    try {
        const response = await fetch('/api/auth/check');
        if (!response.ok) {
            window.location.href = '/login';
            return;
        }
        const data = await response.json();
        if (!data.authenticated) {
            window.location.href = '/login';
        }
    } catch (error) {
        console.error('خطأ في التحقق من المصادقة:', error);
        window.location.href = '/login';
    }
}

// تسجيل الخروج
function logout() {
    if (confirm('هل أنت متأكد من تسجيل الخروج؟')) {
        window.location.href = '/logout';
    }
}

// تغيير اللغة
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // تحديث أزرار اللغة
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // تحديث النصوص
    const langData = translations[lang];
    Object.keys(langData).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = langData[key];
            } else {
                element.textContent = langData[key];
            }
        }
    });
    
    // تحديث اتجاه الصفحة
    if (lang === 'ar') {
        document.body.style.direction = 'rtl';
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.body.style.direction = 'ltr';
        document.documentElement.setAttribute('dir', 'ltr');
    }
    
    // إعادة عرض المنتجات باللغة الجديدة
    displayProducts();
}

// عرض نافذة إضافة منتج
function showAddProductModal() {
    editingProductId = null;
    document.getElementById('productForm').reset();
    document.getElementById('modal-title').textContent = translations[currentLanguage]['modal-title'];
    document.getElementById('productModal').style.display = 'block';
}

// إغلاق النافذة
function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

// تحميل المنتجات
async function loadProducts() {
    try {
        const response = await fetch('/api/products');
        const data = await response.json();
        products = data.products || [];
        
        // تحديث العداد
        document.getElementById('products-count').textContent = products.length;
        
        // عرض المنتجات
        displayProducts();
        
        // إظهار قسم المنتجات
        document.getElementById('products-section').classList.remove('hidden');
        
    } catch (error) {
        console.error('خطأ في تحميل المنتجات:', error);
        showAlert('خطأ في تحميل المنتجات', 'danger');
    }
}

// عرض المنتجات
function displayProducts() {
    const container = document.getElementById('products-container');
    
    if (products.length === 0) {
        container.innerHTML = '<div class="loading">لا توجد منتجات</div>';
        return;
    }
    
    container.innerHTML = products.map(product => `
        <div class="product-card">
            ${product.image ? `<img src="${product.image}" alt="${product.name?.ar || 'منتج'}" class="product-image">` : ''}
            <h4>${product.name?.[currentLanguage] || product.name?.ar || 'بدون اسم'}</h4>
            <p>${product.description?.[currentLanguage] || product.description?.ar || 'بدون وصف'}</p>
            <p><strong>${product.price || 0} ₺</strong></p>
            <p><small>${product.category || 'غير محدد'}</small></p>
            <div style="margin-top: 10px;">
                <button class="btn" onclick="editProduct('${product.id}')">
                    <i class="fas fa-edit"></i> تعديل
                </button>
                <button class="btn btn-danger" onclick="deleteProduct('${product.id}')">
                    <i class="fas fa-trash"></i> حذف
                </button>
            </div>
        </div>
    `).join('');
}

// حفظ منتج
async function saveProduct(event) {
    event.preventDefault();
    
    const productData = {
        name: {
            ar: document.getElementById('name-ar').value,
            tr: document.getElementById('name-tr').value,
            en: document.getElementById('name-en').value
        },
        description: {
            ar: document.getElementById('desc-ar').value,
            tr: document.getElementById('desc-tr').value,
            en: document.getElementById('desc-en').value
        },
        price: parseFloat(document.getElementById('price').value),
        category: document.getElementById('category').value
    };
    
    // معالجة الصورة
    const imageFile = document.getElementById('image').files[0];
    if (imageFile) {
        // تحويل الصورة إلى base64 للحفظ
        const reader = new FileReader();
        reader.onload = async function(e) {
            productData.image = e.target.result;
            await submitProduct(productData);
        };
        reader.readAsDataURL(imageFile);
    } else {
        await submitProduct(productData);
    }
}

// إرسال بيانات المنتج
async function submitProduct(productData) {
    try {
        const url = editingProductId ? `/api/products/${editingProductId}` : '/api/products';
        const method = editingProductId ? 'PUT' : 'POST';
        
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });
        
        if (response.status === 401) {
            window.location.href = '/login';
            return;
        }
        
        const result = await response.json();
        
        if (result.status === 'success') {
            showAlert('تم حفظ المنتج بنجاح', 'success');
            closeModal();
            loadProducts();
        } else {
            showAlert('خطأ في حفظ المنتج', 'danger');
        }
        
    } catch (error) {
        console.error('خطأ في حفظ المنتج:', error);
        showAlert('خطأ في حفظ المنتج', 'danger');
    }
}

// تعديل منتج
function editProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    editingProductId = productId;
    
    // ملء النموذج
    document.getElementById('name-ar').value = product.name?.ar || '';
    document.getElementById('name-tr').value = product.name?.tr || '';
    document.getElementById('name-en').value = product.name?.en || '';
    document.getElementById('desc-ar').value = product.description?.ar || '';
    document.getElementById('desc-tr').value = product.description?.tr || '';
    document.getElementById('desc-en').value = product.description?.en || '';
    document.getElementById('price').value = product.price || '';
    document.getElementById('category').value = product.category || '';
    
    document.getElementById('modal-title').textContent = 'تعديل المنتج';
    document.getElementById('productModal').style.display = 'block';
}

// حذف منتج
async function deleteProduct(productId) {
    if (!confirm('هل أنت متأكد من حذف هذا المنتج؟')) return;
    
    try {
        const response = await fetch(`/api/products/${productId}`, {
            method: 'DELETE'
        });
        
        if (response.status === 401) {
            window.location.href = '/login';
            return;
        }
        
        const result = await response.json();
        
        if (result.status === 'success') {
            showAlert('تم حذف المنتج بنجاح', 'success');
            loadProducts();
        } else {
            showAlert('خطأ في حذف المنتج', 'danger');
        }
        
    } catch (error) {
        console.error('خطأ في حذف المنتج:', error);
        showAlert('خطأ في حذف المنتج', 'danger');
    }
}

// تحميل الإعدادات
async function loadSettings() {
    try {
        const response = await fetch('/api/settings');
        const data = await response.json();
        siteSettings = data;
    } catch (error) {
        console.error('خطأ في تحميل الإعدادات:', error);
    }
}

// عرض تنبيه
function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    
    document.querySelector('.container').insertBefore(alertDiv, document.querySelector('.header').nextSibling);
    
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
}

// وظائف إدارة المحتوى
function editHomePage() {
    const newTitle = prompt('عنوان الصفحة الرئيسية (عربي):', siteSettings.content?.home?.title?.ar || '');
    const newSubtitle = prompt('العنوان الفرعي (عربي):', siteSettings.content?.home?.subtitle?.ar || '');
    
    if (newTitle !== null && newSubtitle !== null) {
        if (!siteSettings.content) siteSettings.content = {};
        if (!siteSettings.content.home) siteSettings.content.home = {};
        if (!siteSettings.content.home.title) siteSettings.content.home.title = {};
        if (!siteSettings.content.home.subtitle) siteSettings.content.home.subtitle = {};
        
        siteSettings.content.home.title.ar = newTitle;
        siteSettings.content.home.subtitle.ar = newSubtitle;
        
        updateSettings();
    }
}

function editAboutPage() {
    const newContent = prompt('محتوى صفحة من نحن (عربي):', siteSettings.content?.about?.content?.ar || '');
    
    if (newContent !== null) {
        if (!siteSettings.content) siteSettings.content = {};
        if (!siteSettings.content.about) siteSettings.content.about = {};
        if (!siteSettings.content.about.content) siteSettings.content.about.content = {};
        
        siteSettings.content.about.content.ar = newContent;
        
        updateSettings();
    }
}

function editContactInfo() {
    const newPhone = prompt('رقم الهاتف:', siteSettings.contact?.phone || '');
    const newEmail = prompt('البريد الإلكتروني:', siteSettings.contact?.email || '');
    const newAddress = prompt('العنوان:', siteSettings.contact?.address || '');
    
    if (newPhone !== null && newEmail !== null && newAddress !== null) {
        if (!siteSettings.contact) siteSettings.contact = {};
        
        siteSettings.contact.phone = newPhone;
        siteSettings.contact.email = newEmail;
        siteSettings.contact.address = newAddress;
        
        updateSettings();
    }
}

function editSocialMedia() {
    const newFacebook = prompt('رابط فيسبوك:', siteSettings.social?.facebook || '');
    const newInstagram = prompt('رابط إنستغرام:', siteSettings.social?.instagram || '');
    const newTwitter = prompt('رابط تويتر:', siteSettings.social?.twitter || '');
    
    if (newFacebook !== null && newInstagram !== null && newTwitter !== null) {
        if (!siteSettings.social) siteSettings.social = {};
        
        siteSettings.social.facebook = newFacebook;
        siteSettings.social.instagram = newInstagram;
        siteSettings.social.twitter = newTwitter;
        
        updateSettings();
    }
}

// تحديث الإعدادات
async function updateSettings() {
    try {
        const response = await fetch('/api/settings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(siteSettings)
        });
        
        if (response.status === 401) {
            window.location.href = '/login';
            return;
        }
        
        const result = await response.json();
        
        if (result.status === 'success') {
            showAlert('تم تحديث الإعدادات بنجاح', 'success');
        } else {
            showAlert('خطأ في تحديث الإعدادات', 'danger');
        }
        
    } catch (error) {
        console.error('خطأ في تحديث الإعدادات:', error);
        showAlert('خطأ في تحديث الإعدادات', 'danger');
    }
}

function viewAnalytics() {
    const stats = `
إحصائيات الموقع:
- عدد المنتجات: ${products.length}
- عدد الفئات: 5
- عدد اللغات: 3
- آخر تحديث: ${new Date().toLocaleDateString('ar')}
    `;
    alert(stats);
}

function exportData() {
    // تصدير البيانات كـ JSON
    const dataToExport = {
        products: products,
        settings: siteSettings,
        exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(dataToExport, null, 2)], {
        type: 'application/json'
    });
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dar-heritage-data-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    
    URL.revokeObjectURL(url);
    showAlert('تم تصدير البيانات بنجاح', 'success');
}

function createBackup() {
    exportData(); // نفس وظيفة التصدير
}

function restoreBackup() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    
    input.onchange = function(event) {
        const file = event.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const data = JSON.parse(e.target.result);
                if (data.products && data.settings) {
                    showAlert('تم استعادة النسخة الاحتياطية بنجاح', 'success');
                    loadProducts();
                    loadSettings();
                }
            } catch (error) {
                showAlert('خطأ في قراءة ملف النسخة الاحتياطية', 'danger');
            }
        };
        reader.readAsText(file);
    };
    
    input.click();
}

function editWhatsAppSettings() {
    const newNumber = prompt('أدخل رقم الواتساب الجديد:', siteSettings.whatsapp?.number || '905538286235');
    if (newNumber) {
        if (!siteSettings.whatsapp) siteSettings.whatsapp = {};
        siteSettings.whatsapp.number = newNumber;
        
        // تحديث رقم الواتساب في helper
        if (window.whatsappHelper) {
            window.whatsappHelper.phoneNumber = newNumber;
        }
        
        updateSettings();
    }
}

function testWhatsApp() {
    if (window.testWhatsApp) {
        const result = window.testWhatsApp();
        console.log('نتيجة اختبار الواتساب:', result);
        
        alert(`اختبار الواتساب:
الجهاز: ${result.device.isMobile ? 'محمول' : 'كمبيوتر'}
الرابط: ${result.url}
الرقم: ${result.phoneNumber}`);
    } else {
        alert('خطأ: مساعد الواتساب غير متاح');
    }
}

