import React from 'react';
import { Droplets, Shield, Sparkles, LineChart, RefreshCw, Palette } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Container from '../ui/Container';

const Features: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      name: t('features.waterproof.title'),
      description: t('features.waterproof.description'),
      icon: Droplets,
      key: 'waterproof'
    },
    {
      name: t('features.durable.title'),
      description: t('features.durable.description'),
      icon: Shield,
      key: 'durable'
    },
    {
      name: t('features.premium.title'),
      description: t('features.premium.description'),
      icon: Sparkles,
      key: 'premium'
    },
    {
      name: t('features.maintenance.title'),
      description: t('features.maintenance.description'),
      icon: LineChart,
      key: 'maintenance'
    },
    {
      name: t('features.sustainable.title'),
      description: t('features.sustainable.description'),
      icon: RefreshCw,
      key: 'sustainable'
    },
    {
      name: t('features.designer.title'),
      description: t('features.designer.description'),
      icon: Palette,
      key: 'designer'
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="mb-6 md:mb-8 lg:mb-12 px-2 md:px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-2 md:mb-3 lg:mb-4">
            {t('features.title')}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('features.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="bg-gray-50 rounded-lg p-4 md:p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-md bg-siena-100 text-siena-600 flex items-center justify-center mb-4">
                <feature.icon className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                {feature.name}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;