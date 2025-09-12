import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { testimonials } from '../../data/testimonials';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-siena-50 to-accent-50">
      <Container>
        <SectionHeading
          title="What Our Customers Say"
          subtitle="Discover why homeowners, designers, and contractors choose Siena Home for their bathroom furniture needs."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 p-8 relative group">
              <div className="absolute -top-5 left-8">
                <svg width="45" height="36" className="fill-siena-400 group-hover:fill-siena-500 transition-colors duration-300">
                  <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                </svg>
              </div>
              
              <div className="pt-6 pb-4">
                <p className="text-gray-700 italic mb-4 leading-relaxed">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover mr-4 ring-2 ring-siena-200 group-hover:ring-siena-300 transition-colors duration-300"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-siena-700 transition-colors duration-300">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
              
              {/* Subtle gradient border on hover */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-siena-200 to-accent-200 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;