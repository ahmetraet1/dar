import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react'
import darLogo from '../assets/darlogo.png'

const Footer = ({ currentLanguage = 'ar' }) => {
  const content = {
    ar: {
      sections: {
        quickLinks: 'روابط سريعة',
        services: 'خدماتنا',
        contact: 'تواصل معنا',
        followUs: 'تابعونا'
      },
      links: {
        home: 'الرئيسية',
        about: 'من نحن',
        products: 'المنتجات',
        activities: 'الفعاليات',
        library: 'مكتبة التراث',
        contact: 'تواصل معنا'
      },
      services: {
        heritage: 'المخبوزات والأطعمة',
        crafts: 'الحرف اليدوية',
        clothing: 'الأزياء التراثية',
        events: 'الفعاليات الثقافية',
        knowledge: 'ركن المعرفة'
      },
      contact: {
        address: 'Hürriyet, Altın Sk. No:11A, 34192 Bahçelievler/İstanbul',
        phone: '+90 553 828 62 35',
        email: 'info@dar.org.tr'
      },
      location: 'الموقع',
        copyright: '© 2025 دار - مركز التراث الفلسطيني. جميع الحقوق محفوظة.',
      description: 'مركز ثقافي ومجتمعي يهدف للحفاظ على التراث الفلسطيني وتعريف الجمهور به بأسلوب مبتكر.'
    },
    tr: {
      sections: {
        quickLinks: 'Hızlı Bağlantılar',
        services: 'Hizmetlerimiz',
        contact: 'İletişim',
        followUs: 'Bizi Takip Edin'
      },
      links: {
        home: 'Ana Sayfa',
        about: 'Hakkımızda',
        products: 'Ürünler',
        activities: 'Etkinlikler',
        library: 'Miras Kütüphanesi',
        contact: 'İletişim'
      },
      services: {
        heritage: 'Unlu Mamulleri ve Yemekler',
        crafts: 'El Sanatları',
        clothing: 'Geleneksel Kıyafetler',
        events: 'Kültürel Etkinlikler',
        knowledge: 'Bilgi Köşesi'
      },
      contact: {
        address: 'Hürriyet, Altın Sk. No:11A, 34192 Bahçelievler/İstanbul',
        phone: '+90 553 828 62 35',
        email: 'info@dar.org.tr'
      },
      location: 'Konum',
        copyright: '© 2025 DAR - Filistin Miras Merkezi. Tüm hakları saklıdır.',
      description: 'Filistin mirasını korumayı ve halka yenilikçi bir şekilde tanıtmayı amaçlayan kültürel ve toplumsal merkez.'
    },
    en: {
      sections: {
        quickLinks: 'Quick Links',
        services: 'Our Services',
        contact: 'Contact Us',
        followUs: 'Follow Us'
      },
      links: {
        home: 'Home',
        about: 'About Us',
        products: 'Products',
        activities: 'Activities',
        library: 'Heritage Library',
        contact: 'Contact'
      },
      services: {
        heritage: 'Baked Goods & Foods',
        crafts: 'Handicrafts',
        clothing: 'Traditional Clothing',
        events: 'Cultural Events',
        knowledge: 'Knowledge Corner'
      },
      contact: {
        address: 'Hürriyet, Altın Sk. No:11A, 34192 Bahçelievler/İstanbul',
        phone: '+90 553 828 62 35',
        email: 'info@dar.org.tr'
      },
      location: 'Location',
        copyright: '© 2025 DAR - Palestinian Heritage Center. All rights reserved.',
      description: 'A cultural and community center that aims to preserve Palestinian heritage and introduce it to the public in an innovative way.'
    }
  };

  const lang = content[currentLanguage] || content.ar;

  return (
    <footer className="bg-[var(--dar-primary)] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src={darLogo} 
                alt="دار التراث الفلسطيني" 
                className="w-12 h-12 mr-3 rtl:ml-3 rtl:mr-0"
              />
              <div>
                <h3 className="text-xl font-bold arabic-text">دار</h3>
                <p className="text-sm opacity-90">مركز التراث الفلسطيني</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed arabic-text mb-6">
              {lang.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 arabic-text">
              {lang.sections.quickLinks}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-sm opacity-90 hover:opacity-100 hover:text-[var(--dar-accent)] transition-colors arabic-text"
                >
                  {lang.links.home}
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-sm opacity-90 hover:opacity-100 hover:text-[var(--dar-accent)] transition-colors arabic-text"
                >
                  {lang.links.about}
                </Link>
              </li>
              <li>
                <Link 
                  to="/products" 
                  className="text-sm opacity-90 hover:opacity-100 hover:text-[var(--dar-accent)] transition-colors arabic-text"
                >
                  {lang.links.products}
                </Link>
              </li>
              <li>
                <Link 
                  to="/activities" 
                  className="text-sm opacity-90 hover:opacity-100 hover:text-[var(--dar-accent)] transition-colors arabic-text"
                >
                  {lang.links.activities}
                </Link>
              </li>
              <li>
                <Link 
                  to="/library" 
                  className="text-sm opacity-90 hover:opacity-100 hover:text-[var(--dar-accent)] transition-colors arabic-text"
                >
                  {lang.links.library}
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-sm opacity-90 hover:opacity-100 hover:text-[var(--dar-accent)] transition-colors arabic-text"
                >
                  {lang.links.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 arabic-text">
              {lang.sections.services}
            </h4>
            <ul className="space-y-3">
              <li className="text-sm opacity-90 arabic-text">{lang.services.heritage}</li>
              <li className="text-sm opacity-90 arabic-text">{lang.services.crafts}</li>
              <li className="text-sm opacity-90 arabic-text">{lang.services.clothing}</li>
              <li className="text-sm opacity-90 arabic-text">{lang.services.events}</li>
              <li className="text-sm opacity-90 arabic-text">{lang.services.knowledge}</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6 arabic-text">
              {lang.sections.contact}
            </h4>
            <div className="space-y-4">
              
              {/* Address */}
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin className="w-5 h-5 mt-1 opacity-90 flex-shrink-0" />
                <div>
                  <p className="text-sm opacity-90 leading-relaxed">
                    {lang.contact.address}
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/HzU88W4HG3drXFoF6?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--dar-accent)] hover:text-white transition-colors arabic-text"
                  >
                    {lang.location}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="w-5 h-5 opacity-90 flex-shrink-0" />
                <a 
                  href={`tel:${lang.contact.phone}`}
                  className="text-sm opacity-90 hover:opacity-100 hover:text-[var(--dar-accent)] transition-colors"
                  dir="ltr"
                >
                  {lang.contact.phone}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="w-5 h-5 opacity-90 flex-shrink-0" />
                <a 
                  href={`mailto:${lang.contact.email}`}
                  className="text-sm opacity-90 hover:opacity-100 hover:text-[var(--dar-accent)] transition-colors"
                >
                  {lang.contact.email}
                </a>
              </div>

              {/* Social Media */}
              <div className="pt-4">
                <h5 className="text-sm font-semibold mb-3 arabic-text">
                  {lang.sections.followUs}
                </h5>
                <div className="flex space-x-3 rtl:space-x-reverse">
                  <a 
                    href="https://www.instagram.com/filistinmirasmerkezi_dar?igsh=MWNxdXVydGJxN3U5ZQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110"
                    title="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                  <a 
                    href="https://www.facebook.com/share/16cFGdWppS/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
                    title="Facebook"
                  >
                    <Facebook className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white border-opacity-20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-90 text-center md:text-left arabic-text">
              {lang.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

