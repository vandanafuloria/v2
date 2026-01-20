import React, { useState, useMemo, useEffect } from 'react';
import Footer from './Footer.jsx';
import LiveUserCounter from './LiveUserCounter.jsx';
import TestimonialSection from './TestimonialSection.jsx';
import AIBrandEngine from './AIBrandEngine.jsx';
import './Collection.css';
import { products } from './productsData.js';

const Collection = ({ onProductClick, showRatings = false, onWidgetShow, onMessagesReady }) => {
  const [showReviewWidget, setShowReviewWidget] = useState(true); // Show review widget by default

  // Star Rating Component - pill style design (matching homepage)
  const StarRating = ({ rating, reviewCount }) => {
    return (
      <div className="inline-flex items-center gap-1 md:gap-2 bg-[#FAF8F5] px-2 py-0.5 md:px-3.5 md:py-1.5 rounded-full mb-1 md:mb-2 font-['Roboto',sans-serif] w-fit">
        <span className="text-[10px] md:text-sm font-bold text-gray-900">{rating.toFixed(1)}</span>
        <svg className="w-2.5 h-2.5 md:w-3.5 md:h-3.5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 0 1px rgba(255, 184, 77, 0.4))' }}>
          <path d="M8 0L10.06 5.51L16 6.18L12 10.15L12.94 16L8 13.18L3.06 16L4 10.15L0 6.18L5.94 5.51L8 0Z" fill="#FF9500"/>
        </svg>
        <span className="text-[8px] md:text-xs text-[#D4A574] font-medium">|</span>
        <span className="text-[10px] md:text-sm font-medium text-gray-900">{reviewCount} {reviewCount === 1 ? 'Review' : 'Reviews'}</span>
      </div>
    );
  };


  // Create independent copy of products to avoid affecting homepage - limit to 6 products
  const filteredProducts = useMemo(() => {
    return [...products].slice(0, 6);
  }, []);

  // Collection page social proof messages
  const collectionPageMessages = useMemo(() => [
    {
      text: `${Math.floor(Math.random() * 100) + 50} people are browsing this collection`,
      time: 'Just now',
      icon: '👀'
    },
    {
      text: `Someone added ${products[0]?.name || 'a dress'} to their wishlist`,
      time: '3 mins ago',
      icon: '❤️'
    },
    {
      text: `${Math.floor(Math.random() * 40) + 15} items sold from this collection today`,
      time: '10 mins ago',
      icon: '🔥'
    },
    {
      text: `New order from Mumbai - ${products[1]?.name || 'product'} just purchased`,
      time: '5 mins ago',
      icon: '📦'
    },
    {
      text: `${Math.floor(Math.random() * 30) + 10} people viewed similar styles`,
      time: '2 mins ago',
      icon: '🔍'
    }
  ], []);

  // Pass messages to parent when ready
  useEffect(() => {
    if (onMessagesReady && collectionPageMessages.length > 0) {
      onMessagesReady(collectionPageMessages);
    }
  }, [collectionPageMessages, onMessagesReady]);

  // Get first product for navigation (all product clicks navigate to first product)
  const firstProduct = filteredProducts[0] || products[0];

  const formatPrice = (price) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  const calculateDiscount = (price, comparePrice) => {
    return Math.round(((comparePrice - price) / comparePrice) * 100);
  };

  // Product reviews with 10-word descriptions
  const productReviews = useMemo(() => [
    {
      productId: 1,
      productImage: products[0]?.image,
      productName: products[0]?.name,
      review: 'Beautiful elegant dress perfect fit comfortable fabric quality excellent.',
      reviewer: 'Priya S.'
    },
    {
      productId: 2,
      productImage: products[1]?.image,
      productName: products[1]?.name,
      review: 'Stunning design flattering silhouette premium material worth every penny.',
      reviewer: 'Ananya G.'
    },
    {
      productId: 3,
      productImage: products[2]?.image,
      productName: products[2]?.name,
      review: 'Love this dress elegant style perfect for special occasions amazing.',
      reviewer: 'Meera P.'
    },
    {
      productId: 1,
      productImage: products[0]?.image,
      productName: products[0]?.name,
      review: 'Excellent quality fabric soft comfortable fit true to size perfect.',
      reviewer: 'Kavya R.'
    },
    {
      productId: 2,
      productImage: products[1]?.image,
      productName: products[1]?.name,
      review: 'Beautiful color elegant design premium quality highly recommend this dress.',
      reviewer: 'Riya S.'
    },
    {
      productId: 3,
      productImage: products[2]?.image,
      productName: products[2]?.name,
      review: 'Amazing dress perfect fit comfortable fabric elegant design love it.',
      reviewer: 'Aarti J.'
    }
  ], []);

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Auto-rotate reviews every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % productReviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [productReviews.length]);

  const currentReview = productReviews[currentReviewIndex];

  return (
    <div className="collection-page font-['Space_Grotesk'] bg-[#F8F6F3] min-h-screen w-full">
      {/* Live User Counter - Only show with WOM */}
      {showRatings && (
        <LiveUserCounter className="fixed top-0 left-0 z-50 scale-75 sm:scale-100 sm:top-auto sm:bottom-6 sm:left-6" />
      )}
      {showRatings && <AIBrandEngine showExtras={showRatings} />}


      {/* Ratings Toggle Button - Sticky */}
      <div className="bg-white border-b border-gray-200 sticky top-[73px] md:top-[81px] z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
          <div className="flex items-center justify-end gap-4 py-4">
            {/* Ratings Toggle Button */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <span className="text-sm md:text-base text-gray-600 font-medium whitespace-nowrap">
                {showRatings ? 'With WOM' : 'Without WOM'}
              </span>
              <div className={`relative w-16 h-8 rounded-full transition-all duration-300 ${
                showRatings 
                  ? 'bg-gradient-to-r from-[#a58296] to-[#8e6d82]' 
                  : 'bg-gray-300'
              }`}>
                <span
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
                    showRatings ? 'translate-x-8' : 'translate-x-0'
                  }`}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-10 py-4 md:py-12">
        <div className="flex gap-6 lg:gap-8">
          {/* Left Sidebar Filters - Shopify Style (Non-functional) */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 sticky top-32">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 font-['Space_Grotesk']">Filters</h2>
              
              {/* Price Range Section */}
              <div className="mb-8 pb-6 border-b border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-4 font-['Space_Grotesk']">Price</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#a58296] focus:border-transparent"
                      disabled
                      readOnly
                    />
                    <span className="text-gray-500">-</span>
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#a58296] focus:border-transparent"
                      disabled
                      readOnly
                    />
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    defaultValue="5000"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-not-allowed opacity-60"
                    disabled
                  />
                </div>
              </div>

              {/* Size Section */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-4 font-['Space_Grotesk']">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <button
                      key={size}
                      className="px-4 py-2 border-2 border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:border-[#a58296] hover:text-[#a58296] transition-colors cursor-not-allowed opacity-60"
                      disabled
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Container */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-gray-600 font-medium">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg md:rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-2 flex flex-col border border-gray-200"
                onClick={() => onProductClick && onProductClick(firstProduct)}
              >
                <div className="relative w-full bg-gradient-to-br from-[#f8f6f3] to-[#f5f0f3] flex items-center justify-center p-2 md:p-4 min-h-[250px] md:min-h-[350px]">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-auto max-h-[300px] md:max-h-[400px] object-contain"
                    loading="lazy"
                  />
                  {product.comparePrice > product.price && (
                    <span className="absolute top-1.5 left-1.5 md:top-3 md:left-3 bg-[#a58296] text-white px-1.5 py-0.5 md:px-3 md:py-1 rounded-md text-[10px] md:text-xs font-semibold z-10">
                      {calculateDiscount(product.price, product.comparePrice)}% OFF
                    </span>
                  )}
                </div>
                <div className="p-2 md:p-4 flex flex-col flex-grow gap-2 md:gap-3">
                  <h3 className="text-sm md:text-lg font-semibold text-gray-800 line-clamp-2">{product.name}</h3>
                  {showRatings && product.rating && (
                    <StarRating rating={product.rating} reviewCount={product.reviewCount} />
                  )}
                  <div className="flex items-center gap-2 md:gap-3">
                    <span className="text-base md:text-xl font-bold text-gray-900">{formatPrice(product.price)}</span>
                    {product.comparePrice > product.price && (
                      <span className="text-xs md:text-sm text-gray-400 line-through">{formatPrice(product.comparePrice)}</span>
                    )}
                  </div>
                  <button 
                    className="w-full py-1.5 md:py-2.5 px-2 md:px-4 bg-[#a58296] text-white rounded-lg font-semibold text-xs md:text-sm uppercase tracking-wide transition-all duration-300 hover:bg-[#8e6d82] hover:shadow-md mt-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onProductClick) {
                        onProductClick(firstProduct);
                      }
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>

      {/* Review Widget - Bottom Right (Only show with WOM) */}
      {showRatings && showReviewWidget && (
      <div className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-40 max-w-xs w-[calc(100%-2rem)] md:w-80">
        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all duration-300 hover:shadow-3xl">
          {/* Close Button */}
          <button
            onClick={() => setShowReviewWidget(false)}
            className="absolute top-2 right-2 w-6 h-6 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full flex items-center justify-center text-sm font-light z-10 transition-all duration-200 hover:scale-110"
            aria-label="Close review"
          >
            ×
          </button>
          
          <div className="flex gap-2.5 p-3" key={currentReviewIndex} style={{ animation: 'slideInFromRight 0.4s ease-out' }}>
            {/* Left Side - Product Image */}
            <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-gradient-to-br from-[#f8f6f3] to-[#f5f0f3] rounded-lg overflow-hidden shadow-sm">
              <img
                src={currentReview?.productImage}
                alt={currentReview?.productName}
                className="w-full h-full object-contain p-1.5"
              />
            </div>
            
            {/* Right Side - Review Content */}
            <div className="flex-1 min-w-0">
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-3 h-3 md:w-3.5 md:h-3.5"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ filter: 'drop-shadow(0 0 1px rgba(255, 184, 77, 0.4))' }}
                  >
                    <path
                      d="M8 0L10.06 5.51L16 6.18L12 10.15L12.94 16L8 13.18L3.06 16L4 10.15L0 6.18L5.94 5.51L8 0Z"
                      fill="#FF9500"
                    />
                  </svg>
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-xs text-gray-800 mb-1.5 line-clamp-2 font-medium leading-tight">
                {currentReview?.review}
              </p>
              
              {/* Reviewer Name */}
              <p className="text-xs font-semibold text-gray-900">
                {currentReview?.reviewer}
              </p>
            </div>
          </div>
        </div>
      </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Collection;

