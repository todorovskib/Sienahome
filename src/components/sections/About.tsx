import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading
              title="Our Family Legacy"
              subtitle="A tradition of excellence in waterproof bathroom furniture since 2005."
              centered={false}
            />
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              As a family-owned business, Siena Home combines traditional craftsmanship with modern 
              innovation. Our factory and showroom are operated by the same family, allowing us to 
              maintain exceptional quality control and offer truly customized solutions.
            </p>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              What sets us apart is our unique position as both manufacturers and retailers. This 
              allows us to offer custom-made solutions and bulk orders directly from our factory, 
              ensuring the highest quality and most competitive prices for our customers.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-3xl font-bold text-teal-600 mb-1">100%</h4>
                <p className="text-gray-700">Waterproof PVC</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-teal-600 mb-1">Custom</h4>
                <p className="text-gray-700">Made to Measure</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-teal-600 mb-1">Bulk</h4>
                <p className="text-gray-700">Orders Welcome</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-teal-600 mb-1">Family</h4>
                <p className="text-gray-700">Owned & Operated</p>
              </div>
            </div>
            
            <Button variant="primary">Visit Our Factory</Button>
          </div>
          
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg h-48 md:h-64">
                <img 
                  src="https://raw.githubusercontent.com/darkotodorovski/Strana/main/Mini/2.png" 
                  alt="Waterproof PVC bathroom furniture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg h-64 md:h-80">
                <img 
                  src="https://raw.githubusercontent.com/darkotodorovski/Strana/main/%D0%A8%D0%BA%D0%B0%D1%84%20%D0%B7%D0%B0%20%D0%B1%D0%B0%D1%9A%D0%B0/16.png" 
                  alt="Custom bathroom furniture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="overflow-hidden rounded-lg h-64 md:h-80">
                <img 
                  src="https://raw.githubusercontent.com/darkotodorovski/Strana/main/%D0%A8%D0%BA%D0%B0%D1%84%20%D0%B7%D0%B0%20%D0%B1%D0%B0%D1%9A%D0%B0%20%D0%B4%D1%83%D0%BF%D0%BB%D0%B8/26.png" 
                  alt="Factory production"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg h-48 md:h-64">
                <img 
                  src="https://raw.githubusercontent.com/darkotodorovski/Strana/main/%D0%A8%D0%BA%D0%B0%D1%84%20%D0%B7%D0%B0%20%D0%B1%D0%B0%D1%9A%D0%B0/16.png" 
                  alt="Quality control"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;