import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Newsletter: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 md:py-16 bg-siena-800 text-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            {t('newsletter.title')}
          </h2>
          <p className="text-siena-100 mb-6 md:mb-8 text-sm md:text-base">
            {t('newsletter.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder={t('newsletter.placeholder')}
              className="flex-1 px-3 py-2 md:px-4 md:py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-siena-400 text-sm md:text-base"
            />
            <Button variant="primary" className="bg-siena-500 hover:bg-siena-600 py-2 px-4 md:py-3 md:px-6 text-sm md:text-base">
              {t('newsletter.button')}
            </Button>
          </div>
          
          <p className="text-xs md:text-sm text-siena-200 mt-4">
            {t('newsletter.disclaimer')}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;