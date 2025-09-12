import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Container from '../ui/Container';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const currentLang = location.pathname.split('/')[1] || 'mk';

  const handleServiceClick = (serviceTab: string) => {
    // Navigate to services page with the specific tab
    window.location.href = `/${currentLang}/services?tab=${serviceTab}`;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-siena-900">
        <div className="absolute inset-0 bg-gradient-to-r from-siena-900/20 via-transparent to-accent-900/20"></div>
        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-siena-500/10 to-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-accent-500/10 to-siena-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Decorative Top Wave */}
      <div className="relative">
        <svg
          className="w-full h-16 text-white fill-current transform rotate-180"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            className="opacity-30"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            className="opacity-60"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          />
        </svg>
      </div>

      <div className="relative z-10 text-white pt-8 md:pt-12 pb-6 md:pb-8">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1 group">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-4 font-serif">
                  Siena<span className="text-siena-400">Home</span>
                </h3>
              </div>
              <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed">
                {t('footer.description')}
              </p>
              
              {/* Enhanced Social Links */}
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61556889234586" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-gradient-to-br from-siena-600 to-siena-700 rounded-full transition-all duration-300 hover:from-siena-500 hover:to-siena-600 hover:scale-110 hover:shadow-lg hover:shadow-siena-500/25"
                >
                  <Facebook size={18} className="transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a 
                  href="https://www.instagram.com/sienahome2024/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-gradient-to-br from-accent-600 to-accent-700 rounded-full transition-all duration-300 hover:from-accent-500 hover:to-accent-600 hover:scale-110 hover:shadow-lg hover:shadow-accent-500/25"
                >
                  <Instagram size={18} className="transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a 
                  href="#" 
                  className="group relative p-3 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full transition-all duration-300 hover:from-gray-500 hover:to-gray-600 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25"
                >
                  <Twitter size={18} className="transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
            
            {/* Quick Links with Hover Effects */}
            <div className="group">
              <h4 className="text-lg font-semibold mb-6 text-white relative">
                {t('footer.quickLinks')}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-siena-400 to-accent-400 transition-all duration-300 group-hover:w-full"></div>
              </h4>
              <ul className="space-y-3">
                {[
                  { key: 'home', path: `/${currentLang}` },
                  { key: 'products', path: `/${currentLang}/products` },
                  { key: 'services', path: `/${currentLang}/services` },
                  { key: 'about', path: `/${currentLang}/about` },
                  { key: 'gallery', path: `/${currentLang}/gallery` },
                  { key: 'contact', path: `/${currentLang}/contact` }
                ].map((item) => (
                  <li key={item.key}>
                    <Link 
                      to={item.path} 
                      className="group relative text-gray-300 hover:text-white transition-all duration-300 text-sm md:text-base inline-block"
                    >
                      <span className="relative z-10">{t(`nav.${item.key}`)}</span>
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-siena-400 to-accent-400 transition-all duration-300 group-hover:w-full"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-siena-500/10 to-accent-500/10 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-1 p-1"></div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services with Enhanced Styling */}
            <div className="group">
              <h4 className="text-lg font-semibold mb-6 text-white relative">
                {t('footer.services')}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-siena-400 to-accent-400 transition-all duration-300 group-hover:w-full"></div>
              </h4>
              <ul className="space-y-3">
                {['bulk', 'consultation', 'delivery'].map((service) => (
                  <li key={service}>
                    <button 
                      onClick={() => handleServiceClick(service)}
                      className="group relative text-gray-300 hover:text-white transition-all duration-300 text-left text-sm md:text-base"
                    >
                      <span className="relative z-10">{t(`services.tabs.${service}`)}</span>
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-siena-400 to-accent-400 transition-all duration-300 group-hover:w-full"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-siena-500/10 to-accent-500/10 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-1 p-1"></div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info with Modern Cards */}
            <div className="group">
              <h4 className="text-lg font-semibold mb-6 text-white relative">
                {t('contact.info.title')}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-siena-400 to-accent-400 transition-all duration-300 group-hover:w-full"></div>
              </h4>
              <ul className="space-y-4">
                <li className="group/item">
                  <div className="flex items-start p-3 rounded-lg bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:from-siena-500/20 hover:to-accent-500/20 hover:border-siena-400/30">
                    <MapPin className="mr-3 h-5 w-5 text-siena-400 flex-shrink-0 mt-0.5 transition-colors duration-300 group-hover/item:text-siena-300" />
                    <span className="text-gray-300 text-sm md:text-base group-hover/item:text-white transition-colors duration-300">
                      {t('footer.factoryAddress')}
                    </span>
                  </div>
                </li>
                <li className="group/item">
                  <div className="flex items-center p-3 rounded-lg bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:from-siena-500/20 hover:to-accent-500/20 hover:border-siena-400/30">
                    <Phone className="mr-3 h-5 w-5 text-siena-400 flex-shrink-0 transition-colors duration-300 group-hover/item:text-siena-300" />
                    <span className="text-gray-300 text-sm md:text-base group-hover/item:text-white transition-colors duration-300">
                      076 669 454
                    </span>
                  </div>
                </li>
                <li className="group/item">
                  <div className="flex items-center p-3 rounded-lg bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:from-siena-500/20 hover:to-accent-500/20 hover:border-siena-400/30">
                    <Mail className="mr-3 h-5 w-5 text-siena-400 flex-shrink-0 transition-colors duration-300 group-hover/item:text-siena-300" />
                    <span className="text-gray-300 text-sm md:text-base group-hover/item:text-white transition-colors duration-300">
                      siena.home@yahoo.com
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Enhanced Bottom Section */}
          <div className="relative mt-12 pt-8">
            {/* Gradient Divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-siena-400/50 to-transparent"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
                &copy; {new Date().getFullYear()} Siena Home. {t('footer.allRightsReserved')}
              </p>
              
              {/* Legal Links */}
              <div className="flex flex-wrap justify-center md:justify-end items-center space-x-6">
                {[
                  { key: 'privacyPolicy', path: `/${currentLang}/privacy-policy` },
                  { key: 'termsOfService', path: `/${currentLang}/terms-of-service` },
                  { key: 'warranty', path: `/${currentLang}/warranty` }
                ].map((item) => (
                  <Link 
                    key={item.key}
                    to={item.path} 
                    className="group relative text-gray-400 hover:text-white text-xs md:text-sm transition-all duration-300"
                  >
                    <span className="relative z-10">{t(`footer.${item.key}`)}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-siena-400 to-accent-400 transition-all duration-300 group-hover:w-full"></div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-br from-siena-500 to-siena-600 text-white rounded-full shadow-lg hover:from-siena-400 hover:to-siena-500 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-siena-500/25 z-50 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
    </footer>
  );
};

export default Footer;