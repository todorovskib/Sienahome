import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Factory, 
  Users, 
  Truck,
  CheckCircle,
  Clock,
  Award,
  Phone
} from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const currentLang = location.pathname.split('/')[1] || 'mk';
  const [activeTab, setActiveTab] = useState('bulk');

  // Check for tab parameter in URL
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabParam = urlParams.get('tab');
    if (tabParam && ['bulk', 'consultation', 'delivery'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [location.search]);

  const handleContactClick = () => {
    navigate(`/${currentLang}/contact`);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const tabs = [
    { id: 'bulk', label: t('services.tabs.bulk'), icon: Factory },
    { id: 'consultation', label: t('services.tabs.consultation'), icon: Users },
    { id: 'delivery', label: t('services.tabs.delivery'), icon: Truck }
  ];

  const serviceFeatures = [
    {
      icon: CheckCircle,
      title: t('services.features.quality.title'),
      description: t('services.features.quality.description')
    },
    {
      icon: Clock,
      title: t('services.features.time.title'),
      description: t('services.features.time.description')
    },
    {
      icon: Award,
      title: t('services.features.experience.title'),
      description: t('services.features.experience.description')
    },
    {
      icon: Phone,
      title: t('services.features.support.title'),
      description: t('services.features.support.description')
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-16"
    >
      <Container>
        <motion.div {...fadeInUp}>
          <div className="mb-6 md:mb-8 lg:mb-12 px-2 md:px-4 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-2 md:mb-3 lg:mb-4">
              {t('services.title')}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('services.subtitle')}
            </p>
          </div>
        </motion.div>

        {/* Service Features */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {serviceFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              className="text-center p-4 md:p-6 bg-white rounded-lg shadow-sm border border-siena-100 hover:border-siena-200 hover:shadow-md transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <feature.icon className="w-10 h-10 md:w-12 md:h-12 text-siena-600 mx-auto mb-3 md:mb-4" />
              <h3 className="text-base md:text-lg font-semibold mb-2 text-siena-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Tabs */}
        <motion.div 
          className="bg-white rounded-lg shadow-sm overflow-hidden border border-siena-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Tab Navigation */}
          <div className="border-b border-siena-200">
            <nav className="flex overflow-x-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-1 md:space-x-2 px-3 py-3 md:px-6 md:py-4 text-xs md:text-sm font-medium whitespace-nowrap border-b-2 transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'border-siena-500 text-siena-600 bg-siena-50'
                        : 'border-transparent text-gray-500 hover:text-siena-600 hover:border-siena-300 hover:bg-siena-50'
                    }`}
                  >
                    <Icon className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-4 md:p-8">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'bulk' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 text-siena-800">
                      {t('services.bulk.title')}
                    </h3>
                    <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                      {t('services.bulk.description')}
                    </p>
                    <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-siena-600 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm md:text-base">
                          {t('services.bulk.features.volume')}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-siena-600 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm md:text-base">
                          {t('services.bulk.features.pricing')}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-siena-600 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm md:text-base">
                          {t('services.bulk.features.timeline')}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-siena-600 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm md:text-base">
                          {t('services.bulk.features.support')}
                        </span>
                      </li>
                    </ul>
                    <Button variant="primary" className="w-full sm:w-auto" onClick={handleContactClick}>
                      {t('services.bulk.cta')}
                    </Button>
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img
                      src="https://images.pexels.com/photos/6782342/pexels-photo-6782342.jpeg"
                      alt="Bulk manufacturing"
                      className="w-full h-60 md:h-80 object-cover"
                    />
                  </div>
                </div>
              )}

              {activeTab === 'consultation' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 text-siena-800">
                      {t('services.consultation.title')}
                    </h3>
                    <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                      {t('services.consultation.description')}
                    </p>
                    <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-siena-600 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm md:text-base">
                          {t('services.consultation.features.expert')}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-siena-600 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm md:text-base">
                          {t('services.consultation.features.planning')}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-siena-600 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm md:text-base">
                          {t('services.consultation.features.recommendations')}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-siena-600 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm md:text-base">
                          {t('services.consultation.features.budget')}
                        </span>
                      </li>
                    </ul>
                    <Button variant="primary" className="w-full sm:w-auto" onClick={handleContactClick}>
                      {t('services.consultation.cta')}
                    </Button>
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img
                      src="https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg"
                      alt="Design consultation"
                      className="w-full h-60 md:h-80 object-cover"
                    />
                  </div>
                </div>
              )}

              {activeTab === 'delivery' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 text-siena-800">
                      {t('services.delivery.title')}
                    </h3>
                    <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                      {t('services.delivery.description')}
                    </p>
                    <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-siena-600 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm md:text-base">
                          {t('services.delivery.features.nationwide')}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-siena-600 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm md:text-base">
                          {t('services.delivery.features.packaging')}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-siena-600 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm md:text-base">
                          {t('services.delivery.features.tracking')}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-siena-600 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm md:text-base">
                          {t('services.delivery.features.insurance')}
                        </span>
                      </li>
                    </ul>
                    <Button variant="primary" className="w-full sm:w-auto" onClick={handleContactClick}>
                      {t('services.delivery.cta')}
                    </Button>
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img
                      src="https://images.pexels.com/photos/6207815/pexels-photo-6207815.jpeg"
                      alt="Delivery services"
                      className="w-full h-60 md:h-80 object-cover"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-8 md:mt-12 bg-gradient-to-br from-siena-50 to-accent-50 p-6 md:p-8 rounded-lg border border-siena-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl md:text-2xl font-semibold text-siena-800 mb-4">
            {t('services.cta.title')}
          </h3>
          <p className="text-gray-600 mb-4 md:mb-6 max-w-2xl mx-auto text-sm md:text-base">
            {t('services.cta.description')}
          </p>
          <div className="flex justify-center">
            <Button variant="primary" size="lg" className="w-full sm:w-auto" onClick={handleContactClick}>
              {t('services.cta.contact')}
            </Button>
          </div>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default ServicesPage;