import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLocation, Link } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const currentLang = location.pathname.split('/')[1] || 'mk';

  return (
    <div id="home" className="relative bg-gray-100 overflow-hidden min-h-screen">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-siena-800/90 to-siena-900/80" />
        <img
          src="https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg"
          alt="Modern bathroom interior"
          className="h-full w-full object-cover"
        />
      </div>
      
      <Container className="relative">
        <div className="pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28 flex items-center min-h-screen px-4">
          <div className="max-w-2xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 md:mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-siena-100 mb-6 md:mb-8 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link to={`/${currentLang}/products`} className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10 w-full sm:w-auto">
                  <span>{t('hero.buttons.catalog')}</span>
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;