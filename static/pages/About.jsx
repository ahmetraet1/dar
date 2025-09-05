import React from 'react';
import { Heart, Users, Award, Target, Eye, MessageSquare } from 'lucide-react';

const About = ({ currentLanguage = 'ar' }) => {
  const content = {
    ar: {
      title: "من نحن",
      subtitle: "دار – مركز التراث الفلسطيني",
      description: "دار – مركز التراث الفلسطيني هو مركز ثقافي ومجتمعي يهدف للحفاظ على التراث الفلسطيني وتعريف الجمهور به بأسلوب مبتكر.",
      detailedDescription: "نعرض في مساحتنا المأكولات الشعبية، الحرف اليدوية، الأزياء التراثية، والفنون، مع تنظيم ورش عمل ومعارض وفعاليات تتيح للزوار فرصة التفاعل المباشر مع الموروث الفلسطيني.",
      
      services: {
        title: "الأنشطة والخدمات",
        subtitle: "في دار، نقدم:",
        items: [
          {
            icon: "🍪",
            title: "المخبوزات والأطعمة الفلسطينية",
            description: "كعك العيد، المعمول، الزعتر، السماق، وأطباق تراثية بنكهات أصيلة."
          },
          {
            icon: "🪡",
            title: "الحرف اليدوية",
            description: "تطريز، خزف، وأعمال خشبية بزخارف تقليدية."
          },
          {
            icon: "👗",
            title: "الأزياء التراثية",
            description: "أثواب مطرزة، أوشحة، وإكسسوارات تراثية."
          },
          {
            icon: "🎶",
            title: "الفعاليات الثقافية والفنية",
            description: "معارض، عروض موسيقية، وورش عمل."
          },
          {
            icon: "📚",
            title: "ركن المعرفة",
            description: "مكتبة ومحتوى توثيقي عن فلسطين وتراثها."
          }
        ]
      },

      vision: {
        title: "رؤيتنا ورسالتنا",
        visionTitle: "رؤيتنا",
        visionText: "أن نكون مركزًا رائدًا في حفظ وتقديم التراث الفلسطيني محليًا ودوليًا.",
        missionTitle: "رسالتنا",
        missionText: "إحياء الموروث الفلسطيني بأسلوب معاصر، يحافظ على قيم الأصالة ويعزز الفخر بالهوية.",
        valuesTitle: "قيمنا",
        values: ["الأصالة", "الجودة", "الإبداع", "الانتماء"]
      }
    },
    tr: {
      title: "Hakkımızda",
      subtitle: "DAR – Filistin Miras Merkezi",
      description: "DAR – Filistin Miras Merkezi, Filistin mirasını korumayı ve halka yenilikçi bir şekilde tanıtmayı amaçlayan kültürel ve toplumsal bir merkezdir.",
      detailedDescription: "Alanımızda halk yemekleri, el sanatları, geleneksel kıyafetler ve sanatları sergiliyoruz. Ziyaretçilerin Filistin mirası ile doğrudan etkileşim kurmasına olanak tanıyan atölyeler, sergiler ve etkinlikler düzenliyoruz.",
      
      services: {
        title: "Faaliyetler ve Hizmetler",
        subtitle: "DAR'da sunduklarımız:",
        items: [
          {
            icon: "🍪",
            title: "Filistin Unlu Mamulleri ve Yemekleri",
            description: "Bayram kekleri, mamul, za'atar, sumak ve özgün lezzetlerle geleneksel yemekler."
          },
          {
            icon: "🪡",
            title: "El Sanatları",
            description: "Nakış, seramik ve geleneksel motiflerle ahşap işleri."
          },
          {
            icon: "👗",
            title: "Geleneksel Kıyafetler",
            description: "İşlemeli elbiseler, şallar ve geleneksel aksesuarlar."
          },
          {
            icon: "🎶",
            title: "Kültürel ve Sanatsal Etkinlikler",
            description: "Sergiler, müzik gösterileri ve atölyeler."
          },
          {
            icon: "📚",
            title: "Bilgi Köşesi",
            description: "Filistin ve mirası hakkında kütüphane ve belgesel içerik."
          }
        ]
      },

      vision: {
        title: "Vizyonumuz ve Misyonumuz",
        visionTitle: "Vizyonumuz",
        visionText: "Filistin mirasını yerel ve uluslararası düzeyde koruma ve sunmada öncü bir merkez olmak.",
        missionTitle: "Misyonumuz",
        missionText: "Filistin mirasını çağdaş bir yaklaşımla canlandırmak, özgünlük değerlerini korumak ve kimlik gururunu güçlendirmek.",
        valuesTitle: "Değerlerimiz",
        values: ["Özgünlük", "Kalite", "Yaratıcılık", "Aidiyet"]
      }
    },
    en: {
      title: "About Us",
      subtitle: "DAR – Palestinian Heritage Center",
      description: "DAR – Palestinian Heritage Center is a cultural and community center that aims to preserve Palestinian heritage and introduce it to the public in an innovative way.",
      detailedDescription: "In our space, we display folk foods, handicrafts, traditional costumes, and arts, while organizing workshops, exhibitions, and events that allow visitors to directly interact with Palestinian heritage.",
      
      services: {
        title: "Activities and Services",
        subtitle: "At DAR, we offer:",
        items: [
          {
            icon: "🍪",
            title: "Palestinian Baked Goods and Foods",
            description: "Eid cakes, ma'amoul, za'atar, sumac, and traditional dishes with authentic flavors."
          },
          {
            icon: "🪡",
            title: "Handicrafts",
            description: "Embroidery, pottery, and wooden works with traditional motifs."
          },
          {
            icon: "👗",
            title: "Traditional Costumes",
            description: "Embroidered dresses, scarves, and traditional accessories."
          },
          {
            icon: "🎶",
            title: "Cultural and Artistic Events",
            description: "Exhibitions, musical performances, and workshops."
          },
          {
            icon: "📚",
            title: "Knowledge Corner",
            description: "Library and documentary content about Palestine and its heritage."
          }
        ]
      },

      vision: {
        title: "Our Vision and Mission",
        visionTitle: "Our Vision",
        visionText: "To be a leading center in preserving and presenting Palestinian heritage locally and internationally.",
        missionTitle: "Our Mission",
        missionText: "Reviving Palestinian heritage in a contemporary manner that preserves the values of authenticity and enhances pride in identity.",
        valuesTitle: "Our Values",
        values: ["Authenticity", "Quality", "Creativity", "Belonging"]
      }
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
          <h2 className="text-2xl md:text-3xl text-[var(--dar-text)] mb-6 arabic-text">
            {lang.subtitle}
          </h2>
          <p className="text-xl text-[var(--dar-text-light)] max-w-4xl mx-auto arabic-text leading-relaxed">
            {lang.description}
          </p>
        </div>
      </div>

      {/* About Description */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-[var(--dar-text-light)] arabic-text leading-relaxed">
              {lang.detailedDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--dar-text)] mb-4 arabic-text">
              {lang.services.title}
            </h2>
            <p className="text-xl text-[var(--dar-text-light)] arabic-text">
              {lang.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lang.services.items.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-[var(--dar-light)] to-white rounded-lg shadow-lg p-8 dar-card-hover">
                <div className="text-4xl mb-4 text-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[var(--dar-text)] mb-4 arabic-text text-center">
                  {service.title}
                </h3>
                <p className="text-[var(--dar-text-light)] arabic-text text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision and Mission */}
      <div className="py-16 dar-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--dar-text)] mb-8 arabic-text">
              {lang.vision.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Vision */}
            <div className="bg-white rounded-lg shadow-lg p-8 dar-card-hover">
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-[var(--dar-primary)] mr-4 rtl:ml-4 rtl:mr-0" />
                <h3 className="text-2xl font-semibold text-[var(--dar-text)] arabic-text">
                  {lang.vision.visionTitle}
                </h3>
              </div>
              <p className="text-[var(--dar-text-light)] arabic-text leading-relaxed">
                {lang.vision.visionText}
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-lg shadow-lg p-8 dar-card-hover">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-[var(--dar-primary)] mr-4 rtl:ml-4 rtl:mr-0" />
                <h3 className="text-2xl font-semibold text-[var(--dar-text)] arabic-text">
                  {lang.vision.missionTitle}
                </h3>
              </div>
              <p className="text-[var(--dar-text-light)] arabic-text leading-relaxed">
                {lang.vision.missionText}
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="bg-white rounded-lg shadow-lg p-8 dar-card-hover">
            <div className="flex items-center mb-6 justify-center">
              <Heart className="w-8 h-8 text-[var(--dar-primary)] mr-4 rtl:ml-4 rtl:mr-0" />
              <h3 className="text-2xl font-semibold text-[var(--dar-text)] arabic-text">
                {lang.vision.valuesTitle}
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {lang.vision.values.map((value, index) => (
                <span 
                  key={index}
                  className="bg-[var(--dar-primary)] text-white px-6 py-3 rounded-full text-lg arabic-text"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

