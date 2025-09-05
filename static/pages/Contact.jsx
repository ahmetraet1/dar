import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Contact = ({ currentLanguage = 'ar' }) => {
  const content = {
    ar: {
      title: "تواصل معنا",
      subtitle: "نحن هنا للإجابة على استفساراتكم ومساعدتكم",
      address: "العنوان",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      followUs: "تابعونا على",
      location: "موقعنا على الخريطة",
      visitUs: "زوروا مركزنا"
    },
    tr: {
      title: "İletişim",
      subtitle: "Sorularınızı yanıtlamak ve size yardımcı olmak için buradayız",
      address: "Adres",
      phone: "Telefon",
      email: "E-posta",
      followUs: "Bizi Takip Edin",
      location: "Haritadaki Konumumuz",
      visitUs: "Merkezimizi Ziyaret Edin"
    },
    en: {
      title: "Contact Us",
      subtitle: "We are here to answer your questions and help you",
      address: "Address",
      phone: "Phone",
      email: "Email",
      followUs: "Follow Us",
      location: "Our Location on Map",
      visitUs: "Visit Our Center"
    }
  };

  const lang = content[currentLanguage] || content.ar;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--dar-light)] to-white">
      {/* Hero Section */}
      <div className="dar-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--dar-text)] mb-4 arabic-text">
            {lang.title}
          </h1>
          <p className="text-xl text-[var(--dar-text-light)] max-w-2xl mx-auto arabic-text">
            {lang.subtitle}
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8 dar-card-hover">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-[var(--dar-primary)] p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[var(--dar-text)] mb-2 arabic-text">
                      {lang.address}
                    </h3>
                    <p className="text-[var(--dar-text-light)] arabic-text">
                      Hürriyet, Altın Sk. No:11A, 34192 Bahçelievler/İstanbul
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 dar-card-hover">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-[var(--dar-primary)] p-3 rounded-full">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[var(--dar-text)] mb-2 arabic-text">
                      {lang.phone}
                    </h3>
                    <a 
                      href="tel:+905538286235" 
                      className="text-[var(--dar-primary)] hover:text-[var(--dar-secondary)] transition-colors"
                    >
                      +90 553 828 62 35
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 dar-card-hover">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-[var(--dar-primary)] p-3 rounded-full">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[var(--dar-text)] mb-2 arabic-text">
                      {lang.email}
                    </h3>
                    <a 
                      href="mailto:info@dar.org.tr" 
                      className="text-[var(--dar-primary)] hover:text-[var(--dar-secondary)] transition-colors"
                    >
                      info@dar.org.tr
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-lg shadow-lg p-8 dar-card-hover">
                <h3 className="text-xl font-semibold text-[var(--dar-text)] mb-6 arabic-text">
                  {lang.followUs}
                </h3>
                <div className="flex space-x-4 rtl:space-x-reverse">
                  <a 
                    href="https://www.instagram.com/filistinmirasmerkezi_dar?igsh=MWNxdXVydGJxN3U5ZQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full text-white hover:scale-110 transition-transform"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://www.facebook.com/share/16cFGdWppS/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 p-3 rounded-full text-white hover:scale-110 transition-transform"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8 dar-card-hover">
                <h3 className="text-xl font-semibold text-[var(--dar-text)] mb-6 arabic-text">
                  {lang.location}
                </h3>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.2!2d28.8!3d41.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzAwLjAiTiAyOMKwNDgnMDAuMCJF!5e0!3m2!1sen!2str!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="موقع دار التراث الفلسطيني"
                  ></iframe>
                </div>
                <div className="mt-4">
                  <a 
                    href="https://maps.app.goo.gl/HzU88W4HG3drXFoF6?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-[var(--dar-primary)] text-white rounded-lg hover:bg-[var(--dar-secondary)] transition-colors"
                  >
                    <MapPin className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
                    {lang.visitUs}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

