import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import ReviewsSection from './ReviewsSection.jsx';
import ReviewCards from './ReviewCards.jsx';
import Footer from './Footer.jsx';
import SocialProofBadge from './SocialProofBadge.jsx';
import LiveUserCounter from './LiveUserCounter.jsx';
import DraggableVideo from './DraggableVideo.jsx';
import AIBrandEngine from './AIBrandEngine.jsx';
import { defaultProduct, products } from './productsData.js';
import dress1 from './assets/dress.png';
import dress2 from './assets/dress_2.png';
import dress3 from './assets/dress_3.png';
import dress4 from './assets/dress_4.png';
import dress5 from './assets/dress_5.png';
import pixVerseVideo from './PixVerse_V5.5_Image_Text_360P_make_a_vido_for_ (2).mp4';
import './Collection.css';

const BlueFreesiaProduct = ({ showExtras = true, product = defaultProduct, onProductClick, onWidgetShow, onMessagesReady }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModalImageIndex, setSelectedModalImageIndex] = useState(0);
  const [isAISummaryExpanded, setIsAISummaryExpanded] = useState(false);
  const loadMoreRef = useRef(null);
  const [hasMoreReviews, setHasMoreReviews] = useState(true);

  // Product page social proof messages
  const productPageMessages = useMemo(() => [
    {
      text: `21 people viewed this product in the last 4 hours`,
      time: 'Just now',
      icon: '👁️'
    },
    {
      text: `1 person bought this product from Jaipur`,
      time: '2 mins ago',
      icon: '📍'
    },
    {
      text: `Someone just purchased ${product.name || 'this product'}`,
      time: '3 mins ago',
      icon: '🛍️'
    },
    {
      text: `${Math.floor(Math.random() * 30) + 10} people have this in their cart`,
      time: '5 mins ago',
      icon: '🛒'
    },
    {
      text: `New order from Delhi - ${product.name || 'product'} just sold`,
      time: '7 mins ago',
      icon: '📦'
    },
    {
      text: `${Math.floor(Math.random() * 15) + 5} people are viewing this right now`,
      time: 'Just now',
      icon: '👥'
    }
  ], [product.name]);

  // Pass messages to parent when ready
  useEffect(() => {
    if (onMessagesReady && productPageMessages.length > 0) {
      onMessagesReady(productPageMessages);
    }
  }, [productPageMessages]);
  
  // Update hasMoreReviews when ref changes
  useEffect(() => {
    const checkHasMore = () => {
      if (loadMoreRef.current) {
        setHasMoreReviews(loadMoreRef.current.hasMoreReviews);
      }
    };
    
    // Check initially and set up interval to check periodically
    checkHasMore();
    const interval = setInterval(checkHasMore, 500);
    
    return () => clearInterval(interval);
  }, []);


  // Use product images or fallback to default
  const productImages = product.images || [
    'https://baboski.com/cdn/shop/files/2_f7707208-7963-44e1-9377-7dea84bfb781.png?v=1752147555&width=2890',
    'https://baboski.com/cdn/shop/files/3_b67926e1-10d8-4590-bf11-57e0c74e5a41.png?v=1752147555&width=2890',
    'https://baboski.com/cdn/shop/files/1_0b5096e5-c03f-4e70-b135-b6f0a3b453ad.png?v=1752147555&width=2890'
  ];

  // Reset selected image when product changes
  useEffect(() => {
    setSelectedImage(0);
    setIsModalOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product.id]);

  // Customer review images - using dress images from assets
  const customerReviewImages = [
    dress1,
    dress2,
    dress3,
    dress4,
    dress5,
    dress1,
    dress2,
    dress3
  ];

  const benefits = [
    { icon: '✓', text: 'Perfect Fit' },
    { icon: '✓', text: 'Premium Quality Fabric' },
    { icon: '✓', text: 'Elegant Design' },
    { icon: '✓', text: 'Comfortable Wear' }
  ];

  // Handle image click to open modal
  const handleImageClick = (index) => {
    setSelectedModalImageIndex(index);
    setIsModalOpen(true);
  };

  // Handle modal navigation
  const handlePrevious = useCallback(() => {
    setSelectedModalImageIndex((prev) => 
      prev === 0 ? customerReviewImages.length - 1 : prev - 1
    );
  }, [customerReviewImages.length]);

  const handleNext = useCallback(() => {
    setSelectedModalImageIndex((prev) => 
      prev === customerReviewImages.length - 1 ? 0 : prev + 1
    );
  }, [customerReviewImages.length]);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      
      if (e.key === 'Escape') {
        handleCloseModal();
      } else if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, handleCloseModal, handlePrevious, handleNext]);

  return (
    <div className="font-['Space_Grotesk'] bg-[#f7f5f3] min-h-screen w-full">
      {showExtras && <LiveUserCounter className="fixed bottom-4 left-4 z-50 bg-white text-black sm:bottom-6 sm:left-6" />}
      {showExtras && <AIBrandEngine showExtras={showExtras} />}
      
      {/* Navigation Breadcrumb */}
      <nav className="text-xs md:text-sm text-[#8b7355] mb-4 md:mb-5 px-4 md:px-5 pt-4 md:pt-5">
        <span>Home</span> / <span className="text-[#a58296]">{product.name}</span>
      </nav>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Product Images */}
          <div className="flex flex-col gap-4 md:gap-6 w-full">
            <div className="w-full h-[400px] md:h-[500px] lg:h-[650px] xl:h-[700px] bg-gradient-to-br from-[#e8e2f0] via-[#f0ebe8] to-[#f5f0f3] rounded-2xl md:rounded-3xl flex items-center justify-center overflow-hidden shadow-lg relative group">
              <img 
                src={productImages[selectedImage] || product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Zoom indicator on hover */}
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
                Click to zoom
              </div>
            </div>

            {/* Product Description - appears below image in tablet view */}
            <div className="mb-6 md:mb-8 block lg:hidden mt-2">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">About the Product</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {product.description}
              </p>
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-5 md:gap-6 w-full">
            <div className="text-[#a58296] text-xs md:text-sm font-semibold uppercase tracking-wider mb-2">{product.category || 'Product'}</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#957C70] leading-tight">{product.name}</h1>
          
          {/* Social Proof */}
          {showExtras && <SocialProofBadge rating={product.rating || 4.2} reviewCount={product.reviewCount || 235} soldThisWeek={235} />}

          {/* Benefits */}
          {showExtras && (
            <div className="flex flex-wrap gap-2 md:gap-2.5 mb-4 md:mb-5">
            {benefits.map((benefit, index) => (
                <span key={index} className="bg-[#a58296] text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-normal flex items-center gap-1 md:gap-1.5">
                <span className="text-xs">{benefit.icon}</span>
                {benefit.text}
              </span>
            ))}
          </div>
          )}

            {/* Pricing */}
            <div className="bg-gradient-to-r from-[#f8f6f3] to-[#f5f0f3] rounded-xl p-4 md:p-6 border border-[#a58296]/10">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">₹{product.price?.toLocaleString('en-IN')}</span>
                {product.comparePrice > product.price && (
                  <span className="text-lg md:text-xl text-gray-400 line-through">₹{product.comparePrice?.toLocaleString('en-IN')}</span>
                )}
              </div>
              <div className="text-sm md:text-base text-gray-600 mb-2">(Incl. of all taxes)</div>
              <div className="text-sm md:text-base text-gray-600">
                <a href="#" className="text-[#a58296] underline hover:text-[#8e6d82] font-medium">Shipping</a> calculated at checkout.
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mb-6 md:mb-8">
              <button className="flex-1 py-4 md:py-5 px-6 bg-transparent border-2 border-[#a58296] text-[#a58296] rounded-xl font-bold text-base md:text-lg cursor-pointer transition-all hover:bg-[#a58296] hover:text-white hover:shadow-lg transform hover:-translate-y-0.5">
                ADD TO CART
              </button>
              <button className="flex-1 py-4 md:py-5 px-6 bg-gradient-to-r from-[#a58296] to-[#8e6d82] text-white rounded-xl font-bold text-base md:text-lg cursor-pointer transition-all hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                BUY NOW 
                <span className="flex gap-1">
                  <span className="w-5 h-5 md:w-6 md:h-6 bg-white text-[#a58296] rounded-sm flex items-center justify-center text-xs font-bold">G</span>
                  <span className="w-5 h-5 md:w-6 md:h-6 bg-white text-[#a58296] rounded-sm flex items-center justify-center text-xs font-bold">₹</span>
                </span>
              </button>
            </div>

            {/* Trust Widgets - Payment Secure, Data Protection, Fast Shipping */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
              {/* Payment Secure */}
              <div className="flex items-center gap-2 md:gap-3 p-2.5 md:p-3 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#a58296] to-[#8e6d82] rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs md:text-sm font-semibold text-gray-900 mb-0.5">Payment Secure</h4>
                  <p className="text-[10px] md:text-xs text-gray-600">SSL encrypted</p>
                </div>
              </div>

              {/* Data Protection */}
              <div className="flex items-center gap-2 md:gap-3 p-2.5 md:p-3 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#a58296] to-[#8e6d82] rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs md:text-sm font-semibold text-gray-900 mb-0.5">Data Protection</h4>
                  <p className="text-[10px] md:text-xs text-gray-600">Privacy guaranteed</p>
                </div>
              </div>

              {/* Fast Shipping */}
              <div className="flex items-center gap-2 md:gap-3 p-2.5 md:p-3 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#a58296] to-[#8e6d82] rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs md:text-sm font-semibold text-gray-900 mb-0.5">Fast Shipping</h4>
                  <p className="text-[10px] md:text-xs text-gray-600">Quick delivery</p>
                </div>
              </div>
            </div>

            {/* Product Description - appears in details column on desktop */}
            <div className="mb-6 md:mb-8 hidden lg:block">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">About the Product</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      {showExtras ? (
        <div id="reviews-section" className="reviews-section bg-white w-full">
          <div className="reviews-container w-full py-12 md:py-16">
            <div className="reviews-header text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-normal text-gray-800 font-['Space_Grotesk']">Customer Reviews</h2>
            </div>

            {/* AI Insight & Customer Photos Section - To be inserted after tabs */}
            {showExtras && (
              <ReviewCards 
                onLoadMoreRef={loadMoreRef}
                showExtras={showExtras}
                contentAfterTabs={
                  <div>
                    {/* AI Insight Section */}
                    <div className="mb-12 bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-100">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-md flex items-center justify-center shadow-sm overflow-hidden">
                            <img 
                              src="https://img.freepik.com/premium-vector/generate-ai-abstract-vector-symbol-artificial-intelligence-colorful-stars-icon_34480-1539.jpg" 
                              alt="AI Icon" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wider font-['Space_Grotesk']">AI INSIGHT</h3>
                        </div>
                        <button className="px-3 py-1.5 text-xs font-medium rounded-full" style={{ backgroundColor: '#F3E8F0', color: '#8E6E82' }}>Verified reviews</button>
                      </div>
                      
                      <h4 className="text-xl font-bold text-gray-900 mb-2 font-['Inter']">Customers say</h4>
                      
                      <p className="text-gray-700 leading-relaxed mb-2 text-base font-['Inter']">
                        {isAISummaryExpanded ? (
                          <>
                            Customers love how this dress fits perfectly and flatters all body types. The premium fabric quality and elegant design make it ideal for various occasions. The dress drapes beautifully and maintains its shape throughout the day, making it perfect for both casual and formal events. Many customers appreciate the attention to detail in the stitching and the way the fabric feels against the skin.
                            <button onClick={() => setIsAISummaryExpanded(false)} className="text-[#8E6E82] underline ml-1 cursor-pointer">Read less</button>
                          </>
                        ) : (
                          <>
                            Customers love how this dress fits perfectly and flatters all body types. The premium fabric quality and elegant design make it ideal for various occasions.
                            <button onClick={() => setIsAISummaryExpanded(true)} className="text-[#8E6E82] underline ml-1 cursor-pointer">Read more</button>
                          </>
                        )}
                      </p>
                      
                      <p className="text-xs text-gray-500 mb-4 font-['Space_Grotesk']">Updated in near real-time as new feedback arrives.</p>
                      
                      {/* Divider */}
                      <div className="border-t border-gray-200 mb-4"></div>
                      
                      {/* Frequently Mentioned */}
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2 font-['Inter'] uppercase tracking-wide">CUSTOMERS FREQUENTLY MENTION</p>
                        <div className="flex flex-wrap gap-2">
                          {['Perfect Fit', 'Premium Quality Fabric', 'Elegant Design', 'Comfortable Wear', 'Flattering Silhouette'].map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#a58296]"></span>
                              <span className="text-sm font-semibold text-[#a58296] font-['Inter']">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Customer Photos Section */}
                    <div className="mb-12">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1 font-['Space_Grotesk']">CUSTOMER PHOTOS</h3>
                          <p className="text-sm text-gray-600 font-['Space_Grotesk']">Real results from the community</p>
                        </div>
                        <span className="text-sm text-gray-500 font-['Space_Grotesk']">15 uploads</span>
                      </div>
                      
                      {/* Photo Gallery */}
                      <div className="flex gap-3 overflow-x-auto pb-4 mb-6">
                        {customerReviewImages.map((image, i) => (
                          <div 
                            key={i} 
                            className="shrink-0 w-32 h-32 bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={() => handleImageClick(i)}
                          >
                            <img 
                              src={image} 
                              alt={`Customer review ${i + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                }
              />
            )}
            
            {!showExtras && <ReviewCards onLoadMoreRef={loadMoreRef} />}
            
            <div className="reviews-footer mt-8 text-center">
              <button 
                className="write-review-btn bg-black text-white px-6 py-3 rounded-lg font-medium text-sm md:text-base hover:bg-gray-800 transition-colors font-['Space_Grotesk'] mr-4"
                onClick={() => {
                  if (loadMoreRef.current && loadMoreRef.current.openReviewForm) {
                    loadMoreRef.current.openReviewForm();
                  }
                }}
              >
                Write a Review
              </button>
              {hasMoreReviews && (
                <button 
                  className="load-more-btn bg-transparent border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium text-sm md:text-base hover:border-gray-400 transition-colors font-['Space_Grotesk']"
                  onClick={() => {
                    if (loadMoreRef.current && loadMoreRef.current.handleLoadMore) {
                      loadMoreRef.current.handleLoadMore();
                      // Update hasMoreReviews after loading
                      setTimeout(() => {
                        if (loadMoreRef.current) {
                          setHasMoreReviews(loadMoreRef.current.hasMoreReviews);
                        }
                      }, 100);
                    }
                  }}
                >
                  Load More Reviews
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div id="reviews-section" className="bg-white py-12 md:py-16 px-4 md:px-6 lg:px-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-normal text-gray-800 text-center mb-8 md:mb-12 font-['Space_Grotesk']">Customer Reviews</h2>
            
            {/* Rating Breakdown Section */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-8 lg:gap-12 mb-8">
              {/* Left Side - Overall Rating */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(4)].map((_, i) => (
                    <i key={i} className="fas fa-star text-xl" style={{ color: '#8E6E82' }}></i>
                  ))}
                  <i className="fas fa-star-half-alt text-xl" style={{ color: '#8E6E82' }}></i>
                </div>
                <p className="text-lg font-medium text-gray-800 mb-1 font-['Space_Grotesk']">4.54 out of 5</p>
                <p className="text-sm text-gray-600 font-['Space_Grotesk']">Based on 12 reviews</p>
              </div>

              {/* Center - Star Rating Breakdown */}
              <div className="flex-1 max-w-md w-full">
                <div className="space-y-2">
                  {/* 5 Stars */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star text-sm" style={{ color: '#8E6E82' }}></i>
                      ))}
                    </div>
                    <div className="flex-none md:flex-1 w-[200px] md:w-auto h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: '58.3%', backgroundColor: '#8E6E82' }}></div>
                    </div>
                    <span className="text-sm text-gray-700 font-medium w-12 text-right font-['Space_Grotesk']">7</span>
                  </div>

                  {/* 4 Stars */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-0.5">
                      {[...Array(4)].map((_, i) => (
                        <i key={i} className="fas fa-star text-sm" style={{ color: '#8E6E82' }}></i>
                      ))}
                      <i className="far fa-star text-sm text-gray-300"></i>
                    </div>
                    <div className="flex-none md:flex-1 w-[200px] md:w-auto h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: '33.3%', backgroundColor: '#8E6E82' }}></div>
                    </div>
                    <span className="text-sm text-gray-700 font-medium w-12 text-right font-['Space_Grotesk']">4</span>
                  </div>

                  {/* 3 Stars */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-0.5">
                      {[...Array(3)].map((_, i) => (
                        <i key={i} className="fas fa-star text-sm" style={{ color: '#8E6E82' }}></i>
                      ))}
                      {[...Array(2)].map((_, i) => (
                        <i key={i} className="far fa-star text-sm text-gray-300"></i>
                      ))}
                    </div>
                    <div className="flex-none md:flex-1 w-[200px] md:w-auto h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-300 rounded-full" style={{ width: '8.3%' }}></div>
                    </div>
                    <span className="text-sm text-gray-700 font-medium w-12 text-right font-['Space_Grotesk']">1</span>
                  </div>

                  {/* 2 Stars */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-0.5">
                      {[...Array(2)].map((_, i) => (
                        <i key={i} className="fas fa-star text-sm" style={{ color: '#8E6E82' }}></i>
                      ))}
                      {[...Array(3)].map((_, i) => (
                        <i key={i} className="far fa-star text-sm text-gray-300"></i>
                      ))}
                    </div>
                    <div className="flex-none md:flex-1 w-[200px] md:w-auto h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-300 rounded-full" style={{ width: '0%' }}></div>
                    </div>
                    <span className="text-sm text-gray-700 font-medium w-12 text-right font-['Space_Grotesk']">0</span>
                  </div>

                  {/* 1 Star */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-0.5">
                      <i className="fas fa-star text-sm" style={{ color: '#8E6E82' }}></i>
                      {[...Array(4)].map((_, i) => (
                        <i key={i} className="far fa-star text-sm text-gray-300"></i>
                      ))}
                    </div>
                    <div className="flex-none md:flex-1 w-[200px] md:w-auto h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-300 rounded-full" style={{ width: '0%' }}></div>
                    </div>
                    <span className="text-sm text-gray-700 font-medium w-12 text-right font-['Space_Grotesk']">0</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Write Review Button */}
              <div className="w-full lg:w-auto flex justify-center lg:justify-start">
                <button className="text-white px-6 py-3 rounded-lg font-medium text-sm md:text-base transition-colors font-['Space_Grotesk'] whitespace-nowrap" style={{ backgroundColor: '#8E6E82' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#7a5d6f'} onMouseLeave={(e) => e.target.style.backgroundColor = '#8E6E82'}>
                  Write a review
                </button>
              </div>
            </div>

            {/* Results Bar */}
          

            {/* Dummy Reviews - Full Width */}
            <div className="space-y-0">
              {/* Dummy Review 1 */}
              <div className="bg-white py-6 w-full">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(4)].map((_, i) => (
                        <i key={i} className="fas fa-star text-sm" style={{ color: '#8E6E82' }}></i>
                      ))}
                      <i className="far fa-star text-sm text-gray-300"></i>
                    </div>
                    <p className="text-sm text-gray-500 font-['Space_Grotesk']">Anonymous</p>
                  </div>
                  <span className="text-xs text-gray-400">12/27/2025</span>
                </div>
                <h3 className="font-medium text-gray-700 mb-2 font-['Space_Grotesk']">Beautiful dress with perfect fit</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-['Space_Grotesk']">The dress fits perfectly and looks elegant. The fabric quality is excellent and it's very comfortable to wear all day.</p>
              </div>

              {/* Horizontal Line */}
              <div className="border-t border-gray-400"></div>

              {/* Dummy Review 2 */}
              <div className="bg-white py-6 w-full">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(2)].map((_, i) => (
                        <i key={i} className="fas fa-star text-sm" style={{ color: '#8E6E82' }}></i>
                      ))}
                      {[...Array(3)].map((_, i) => (
                        <i key={i} className="far fa-star text-sm text-gray-300"></i>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 font-['Space_Grotesk']">Gurpreet Kaur</p>
                  </div>
                  <span className="text-xs text-gray-400">12/10/2025</span>
                </div>
                <h3 className="font-medium text-gray-700 mb-2 font-['Space_Grotesk']">Great quality and design</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-['Space_Grotesk']">The dress has a beautiful design and the fabric feels premium. However, the sizing runs a bit small, so consider ordering one size up.</p>
              </div>

              {/* Horizontal Line */}
              <div className="border-t border-gray-400"></div>

              {/* Dummy Review 3 */}
              <div className="bg-white py-6 w-full">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="far fa-star text-sm text-gray-300"></i>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 font-['Space_Grotesk']">Shailanauman</p>
                  </div>
                  <span className="text-xs text-gray-400">12/09/2025</span>
                </div>
                <h3 className="font-medium text-gray-700 mb-2 font-['Space_Grotesk']">Not satisfied with the fit</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-['Space_Grotesk']">The dress didn't fit as expected. The fabric quality is good but the sizing chart needs to be more accurate.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-[9999] flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          {/* Close Button */}
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close modal"
          >
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2 md:p-3"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2 md:p-3"
            aria-label="Next image"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-7xl w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={customerReviewImages[selectedModalImageIndex]}
              alt={`Customer review ${selectedModalImageIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white px-4 py-2 rounded-full text-sm md:text-base font-['Space_Grotesk']">
              {selectedModalImageIndex + 1} / {customerReviewImages.length}
            </div>
          </div>
        </div>
      )}

      {/* You May Also Like Section */}
      <div className="bg-white py-12 md:py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 md:mb-12 text-center font-['Space_Grotesk']">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products
              .filter(p => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => {
                // Star Rating Component - pill style design (matching homepage and collection)
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

                return (
                  <div
                    key={relatedProduct.id}
                    className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                    onClick={() => {
                      if (onProductClick) {
                        onProductClick(relatedProduct);
                      }
                    }}
                  >
                    <div className="relative w-full pt-[125%] bg-gradient-to-br from-[#e8e2f0] to-[#f0ebe8] overflow-hidden">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {relatedProduct.comparePrice > relatedProduct.price && (
                        <span className="absolute top-2 left-2 bg-[#a58296] text-white px-2 py-1 rounded-md text-xs font-bold">
                          {Math.round(((relatedProduct.comparePrice - relatedProduct.price) / relatedProduct.comparePrice) * 100)}% OFF
                        </span>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 mb-1 md:mb-2 text-sm md:text-base line-clamp-2 group-hover:text-[#a58296] transition-colors">
                        {relatedProduct.name}
                      </h3>
                      {showExtras && relatedProduct.rating && (
                        <StarRating rating={relatedProduct.rating} reviewCount={relatedProduct.reviewCount} />
                      )}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-lg md:text-xl font-bold text-gray-900">
                          ₹{relatedProduct.price.toLocaleString('en-IN')}
                        </span>
                        {relatedProduct.comparePrice > relatedProduct.price && (
                          <span className="text-sm text-gray-400 line-through">
                            ₹{relatedProduct.comparePrice.toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>
                      <button
                        className="w-full py-2 px-4 bg-[#a58296] text-white rounded-lg font-semibold text-sm hover:bg-[#8e6d82] transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onProductClick) {
                            onProductClick(relatedProduct);
                          }
                        }}
                      >
                        View Product
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* Draggable Video */}
      <DraggableVideo 
        videoSrc={pixVerseVideo} 
        showWOM={showExtras}
        product={product}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BlueFreesiaProduct;