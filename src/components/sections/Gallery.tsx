import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Container from '../ui/Container';

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<any>(null);

  const galleryImages = [
    {
      id: '1',
      title: t('gallery.items.modern_master.title'),
      category: t('gallery.categories.vanities'),
      imageUrl: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg',
    },
    {
      id: '2',
      title: t('gallery.items.minimalist_storage.title'),
      category: t('gallery.categories.storage'),
      imageUrl: 'https://images.pexels.com/photos/6587912/pexels-photo-6587912.jpeg',
    },
    {
      id: '3',
      title: t('gallery.items.luxury_spa.title'),
      category: t('gallery.categories.complete'),
      imageUrl: 'https://images.pexels.com/photos/3952034/pexels-photo-3952034.jpeg',
    },
    {
      id: '4',
      title: t('gallery.items.contemporary_vanity.title'),
      category: t('gallery.categories.vanities'),
      imageUrl: 'https://images.pexels.com/photos/6957670/pexels-photo-6957670.jpeg',
    },
    {
      id: '5',
      title: t('gallery.items.elegant_mirror.title'),
      category: t('gallery.categories.mirrors'),
      imageUrl: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg',
    },
    {
      id: '6',
      title: t('gallery.items.compact_solution.title'),
      category: t('gallery.categories.vanities'),
      imageUrl: 'https://images.pexels.com/photos/7031744/pexels-photo-7031744.jpeg',
    },
  ];

  const openLightbox = (image: any) => {
    setCurrentImage(image);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
    document.body.style.overflow = '';
  };

  return (
    <>
      <section id="gallery" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-siena-50">
        <Container>
          <div className="mb-6 md:mb-8 lg:mb-12 px-2 md:px-4 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-2 md:mb-3 lg:mb-4">
              {t('gallery.title')}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('gallery.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="overflow-hidden rounded-lg group cursor-pointer relative shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                onClick={() => openLightbox(image)}
              >
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  className="w-full h-60 md:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6">
                  <span className="text-white text-xs md:text-sm font-medium bg-siena-500 px-2 py-1 rounded inline-block mb-2 w-fit">
                    {image.category}
                  </span>
                  <h3 className="text-white text-base md:text-lg font-semibold">
                    {image.title}
                  </h3>
                </div>
                
                {/* Hover overlay with gradient border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-siena-400 rounded-lg transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Enhanced Lightbox */}
      {lightboxOpen && currentImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-siena-400 transition-colors duration-300 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70"
          >
            <X className="h-6 w-6 md:h-8 md:w-8" />
          </button>
          
          <div className="max-w-5xl w-full">
            <img
              src={currentImage.imageUrl}
              alt={currentImage.title}
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="text-center mt-4 bg-black/50 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="text-white text-lg md:text-xl font-semibold">
                {currentImage.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                {currentImage.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;