import React from 'react';
import { products } from './productsData.js';

const TestimonialSection = () => {
  const testimonials = [
    {
      type: 'with-images',
      name: 'Priya Sharma',
      date: 'January 15, 2025',
      verified: true,
      rating: 4,
      headline: 'Perfect value for money',
      text: 'Absolutely love the quality! The fabric is so soft and the fit is perfect. Will definitely order again. The delivery was super fast and packaging was excellent.',
      products: products.slice(0, 3).map(p => p.image)
    },
    {
      type: 'quote-style',
      name: 'Ananya Gupta',
      title: 'Fashion Blogger',
      company: 'STYLEBLOG',
      text: 'These products have transformed my wardrobe. The quality is exceptional and the designs are timeless. Highly recommend to everyone!',
      bgColor: 'bg-gradient-to-br from-purple-400 to-purple-600'
    },
    {
      type: 'with-images',
      name: 'Meera Patel',
      date: 'January 12, 2025',
      verified: true,
      rating: 5,
      headline: 'Exceeded all expectations',
      text: 'Best purchase this year! The design is elegant and the material feels premium. Received so many compliments. Customer service was outstanding too.',
      products: products.slice(1, 4).map(p => p.image)
    },
    {
      type: 'quote-style',
      name: 'Kavya Reddy',
      title: 'Lifestyle Influencer',
      company: 'DAILYLIFE',
      text: 'The perfect combination of style and comfort. These products have become staples in my collection. Quality that truly speaks for itself.',
      bgColor: 'bg-gradient-to-br from-pink-400 to-pink-600'
    }
  ];

  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-6 bg-gradient-to-b from-[#F8F6F3] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-['Space_Grotesk'] mb-3">
            What Our Customers Say
          </h2>
          <p className="text-sm md:text-base text-gray-600 font-['Space_Grotesk']">
            Real reviews from happy customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => {
            if (testimonial.type === 'with-images') {
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  {/* Profile Section */}
                  <div className="flex items-start justify-between mb-4 relative">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-yellow-200 flex items-center justify-center text-gray-900 font-semibold text-lg relative">
                        {testimonial.name.charAt(0)}
                        {testimonial.verified && (
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="text-base font-bold text-gray-900 font-['Space_Grotesk']">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-gray-500 font-['Space_Grotesk']">
                          {testimonial.date}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? '' : 'opacity-30'}`}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0L10.06 5.51L16 6.18L12 10.15L12.94 16L8 13.18L3.06 16L4 10.15L0 6.18L5.94 5.51L8 0Z"
                          fill={i < testimonial.rating ? "#FFD700" : "#E5E5E5"}
                        />
                      </svg>
                    ))}
                  </div>

                  {/* Headline */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 font-['Space_Grotesk']">
                    {testimonial.headline}
                  </h3>

                  {/* Review Text */}
                  <p className="text-sm text-gray-700 mb-6 font-['Space_Grotesk'] leading-relaxed">
                    {testimonial.text}
                  </p>

                  {/* Product Images */}
                  <div className="flex gap-3">
                    {testimonial.products.map((productImg, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="w-20 h-20 rounded-lg bg-purple-100 overflow-hidden flex items-center justify-center flex-shrink-0"
                      >
                        <img
                          src={productImg}
                          alt={`Product ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  key={index}
                  className={`${testimonial.bgColor} rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-white relative overflow-hidden`}
                >
                  {/* Quote Mark */}
                  <div className="absolute top-6 left-6 opacity-20">
                    <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-lg md:text-xl font-medium mb-8 font-['Space_Grotesk'] leading-relaxed relative z-10">
                    "{testimonial.text}"
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-lg font-bold text-white font-['Space_Grotesk']">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-white/90 font-['Space_Grotesk']">
                        {testimonial.title}
                      </p>
                      <p className="text-sm font-semibold text-white mt-0.5 font-['Space_Grotesk']">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
