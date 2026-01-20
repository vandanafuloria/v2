import React, { useMemo, useState, useEffect } from 'react';
import { products } from './productsData.js';
import Footer from './Footer.jsx';
import LiveUserCounter from './LiveUserCounter.jsx';
import TestimonialSection from './TestimonialSection.jsx';
import './HomePage.css';

// Import PixVerse videos
import pixVerseVideo1 from './PixVerse_V5.5_Image_Text_360P_make_a_vido_for_.mp4';
import pixVerseVideo2 from './PixVerse_V5.5_Image_Text_360P_make_a_vido_for_ (1).mp4';
import pixVerseVideo3 from './PixVerse_V5.5_Image_Text_360P_make_a_vido_for_ (2).mp4';
import pixVerseVideo4 from './PixVerse_V5.5_Image_Text_360P_A_young_female_f.mp4';
import pixVerseVideo5 from './PixVerse_V5.5_Image_Text_360P_A_cinematic_Inst.mp4';
import pixVerseVideo6 from './PixVerse_V5.5_Image_Text_360P_A_young_female_f (1).mp4';

// Import trust images
import trust1 from './assets/trust_1.png';
import trust2 from './assets/trust_2.png';
import trust3 from './assets/trust_3.png';
import trust4 from './assets/trust_4.png';
import trust5 from './assets/trust_5.png';

const HomePage = ({ onProductClick, onShopClick, showRatings = false, onMessagesReady }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showInstagramModal, setShowInstagramModal] = useState(false);

  // Home page social proof messages
  const homePageMessages = useMemo(() => {
    // Get random products for images
    const randomProducts = [...products].sort(() => Math.random() - 0.5).slice(0, 5);
    
    return [
      {
        text: `Someone just purchased ${randomProducts[0]?.name || 'a product'}`,
        time: '2 mins ago',
        icon: '🛍️',
        image: randomProducts[0]?.image
      },
      {
        text: `${Math.floor(Math.random() * 50) + 15} people viewed ${randomProducts[1]?.name || 'this product'} in the last 4 hours`,
        time: 'Just now',
        icon: '👁️',
        image: randomProducts[1]?.image
      },
      {
        text: `1 person bought ${randomProducts[2]?.name || 'this product'} from Jaipur`,
        time: '2 mins ago',
        icon: '📍',
        image: randomProducts[2]?.image
      },
      {
        text: `${Math.floor(Math.random() * 30) + 10} people added ${randomProducts[3]?.name || 'items'} to cart today`,
        time: '5 mins ago',
        icon: '🛒',
        image: randomProducts[3]?.image
      },
      {
        text: `${Math.floor(Math.random() * 20) + 5} people are viewing this right now`,
        time: 'Just now',
        icon: '👥',
        image: randomProducts[4]?.image || randomProducts[0]?.image
      }
    ];
  }, []);

  // Pass messages to parent when ready
  useEffect(() => {
    if (onMessagesReady && homePageMessages.length > 0) {
      onMessagesReady(homePageMessages);
    }
  }, [homePageMessages]);

  // Instagram reels URLs (same as product page)
  const instagramReels = [
    'https://www.instagram.com/p/DQeXn-nDyYk/',
    'https://www.instagram.com/reel/DQiqQifD5wH/',
    'https://www.instagram.com/reel/DQOv1hKD8e8/',
    'https://www.instagram.com/reel/DPtcILFj_tc/?igsh=MWs2eXBqYTNiamlvOQ%3D%3D'
  ];

  // Create Instagram embed HTML using blockquote format (standard Instagram embed)
  const createInstagramEmbed = (url) => {
    // Clean URL to remove query parameters for embed
    const cleanUrl = url.split('?')[0];
    return `<blockquote class="instagram-media" data-instgrm-permalink="${cleanUrl}" data-instgrm-version="14" style="max-width: 100%; width: 100%;"></blockquote>`;
  };

  // Reinitialize Instagram embeds when modal opens
  useEffect(() => {
    if (showInstagramModal) {
      const processEmbeds = () => {
        if (window.instgrm && window.instgrm.Embeds) {
          window.instgrm.Embeds.process();
        } else {
          // Retry if script hasn't loaded yet (max 10 retries)
          let retries = 0;
          const retryInterval = setInterval(() => {
            retries++;
            if (window.instgrm && window.instgrm.Embeds) {
              window.instgrm.Embeds.process();
              clearInterval(retryInterval);
            } else if (retries >= 10) {
              clearInterval(retryInterval);
            }
          }, 200);
        }
      };
      
      // Process embeds after a short delay to ensure DOM is ready
      const timer = setTimeout(processEmbeds, 500);
      return () => clearTimeout(timer);
    }
  }, [showInstagramModal]);

  // Star Rating Component - pill style design
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

  // Get featured products (first 4 products) - create independent copy
  const featuredProducts = useMemo(() => {
    return [...products].slice(0, 4);
  }, []);

  // Get first product for navigation (all product clicks navigate to first product)
  const firstProduct = featuredProducts[0] || products[0];

  // PixVerse videos array
  const pixVerseVideos = [
    pixVerseVideo1,
    pixVerseVideo2,
    pixVerseVideo3,
    pixVerseVideo4,
    pixVerseVideo5,
    pixVerseVideo6
  ];

  // Trust images array
  const trustImages = [
    trust1,
    trust2,
    trust3,
    trust4,
    trust5
  ];

  // Handle video hover - play muted
  const handleVideoHover = (e) => {
    const video = e.currentTarget.querySelector('video');
    if (video) {
      video.muted = true;
      video.play().catch(() => {
        // Auto-play was prevented, ignore
      });
    }
  };

  // Handle video leave - pause
  const handleVideoLeave = (e) => {
    const video = e.currentTarget.querySelector('video');
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  // Handle video click - open modal with video
  const handleVideoClick = (e) => {
    const video = e.currentTarget.querySelector('video');
    if (video) {
      setSelectedVideo(video.src);
    }
  };

  // Close video modal
  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="homepage font-['Space_Grotesk']">
      {/* Floating Instagram Button - Only show with WOM */}
      {showRatings && (
        <button 
          className="instagram-floating-btn"
          onClick={() => setShowInstagramModal(true)}
          aria-label="See Our Instagram"
        >
          <svg className="instagram-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
          </svg>
          <span className="instagram-btn-text">See Our Instagram</span>
        </button>
      )}

      {/* Live User Counter - Only show with WOM */}
      {showRatings && (
        <LiveUserCounter className="fixed top-0 left-0 z-50 scale-75 sm:scale-100 sm:top-auto sm:bottom-6 sm:left-6" />
      )}


      {/* Trusted Learners Widget - Sticky on right side, only show with WOM */}
      {showRatings && (
         <div 
           className="fixed right-4 rounded-lg px-3 md:px-6 py-2 md:py-3 shadow-lg z-[99999] bg-white" 
           style={{
             visibility: 'visible',
             display: 'block',
             zIndex: 99999,
             top: '226px',
             transform: 'rotate(270deg)',
             transformOrigin: 'right',
             minWidth: '200px'
           }}
         >
           <div className="flex items-center gap-2 md:gap-3 whitespace-nowrap">
             <div className="flex items-center gap-0.5 md:gap-1">
               {[1, 2, 3, 4, 5].map((star) => (
                 <svg
                   key={star}
                   className="w-3 h-3 md:w-5 md:h-5"
                   viewBox="0 0 16 16"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                 >
                   <path
                     d="M8 0L10.06 5.51L16 6.18L12 10.15L12.94 16L8 13.18L3.06 16L4 10.15L0 6.18L5.94 5.51L8 0Z"
                     fill="#FF9500"
                   />
                 </svg>
               ))}
             </div>
             <span className="text-xs md:text-sm font-bold text-gray-900 font-['Space_Grotesk']">Trusted by 10,000+ customers</span>
           </div>
         </div>
       )}
      
      {/* Hero Banner Section - Full Width Image */}
      <section className="hero-banner-fullwidth">
        <img 
          src="https://marketplace.canva.com/EAFHG6sbLsQ/1/0/1600w/canva-brown-beige-simple-special-sale-banner-lQfPvhnznqs.jpg" 
          alt="Homepage Banner"
          className="hero-banner-image"
        />
      </section>

      {/* Featured Products Section */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Products</h2>
            <p className="section-subtitle">Handpicked favorites from our collection</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 mb-8 md:mb-12 w-full">
            {featuredProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg md:rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-2 flex flex-col border border-gray-200"
                onClick={() => onProductClick && onProductClick(firstProduct)}
              >
                <div className="relative w-full pt-[100%] overflow-hidden bg-gradient-to-br from-[#f8f6f3] to-[#f5f0f3]">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="absolute top-0 left-0 w-full h-full object-contain p-2 md:p-4 transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                  {product.comparePrice > product.price && (
                    <span className="absolute top-1.5 left-1.5 md:top-3 md:left-3 bg-[#a58296] text-white px-1.5 py-0.5 md:px-3 md:py-1 rounded-md text-[10px] md:text-xs font-semibold z-10">
                      {Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100)}% OFF
                    </span>
                  )}
                </div>
                <div className="p-2 md:p-4 flex flex-col flex-grow">
                  <h3 className="text-sm md:text-lg font-semibold text-gray-800 mb-1 md:mb-2 line-clamp-2">{product.name}</h3>
                  {showRatings && product.rating && (
                    <StarRating rating={product.rating} reviewCount={product.reviewCount} />
                  )}
                  <div className="flex items-center gap-2 md:gap-3 mt-1 md:mt-2 mb-2 md:mb-3">
                    <span className="text-base md:text-xl font-bold text-gray-900">₹{product.price.toLocaleString('en-IN')}</span>
                    {product.comparePrice > product.price && (
                      <span className="text-xs md:text-sm text-gray-400 line-through">₹{product.comparePrice.toLocaleString('en-IN')}</span>
                    )}
                  </div>
                  <button 
                    className="w-full py-1.5 md:py-2.5 px-2 md:px-4 bg-[#a58296] text-white rounded-lg font-semibold text-xs md:text-sm uppercase tracking-wide transition-all duration-300 hover:bg-[#8e6d82] hover:shadow-md mt-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle add to cart functionality
                      console.log('Add to cart:', product);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="section-footer">
            <button 
              onClick={onShopClick}
              className="view-all-btn"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* PixVerse Videos Section - Auto-scrolling Carousel (Only show with WOM) */}
      {showRatings && (
        <section className="videos-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Product Reviews Loved by Customers</h2>
            <p className="section-subtitle">Watch our latest collection</p>
          </div>
          <div 
            className="videos-carousel-wrapper"
            onMouseEnter={(e) => {
              e.currentTarget.classList.add('scrolling');
            }}
            onMouseLeave={(e) => {
              e.currentTarget.classList.remove('scrolling');
            }}
            onTouchStart={(e) => {
              e.currentTarget.classList.add('scrolling');
            }}
            onTouchEnd={(e) => {
              const target = e.currentTarget;
              setTimeout(() => {
                if (target) {
                  target.classList.remove('scrolling');
                }
              }, 2000);
            }}
            onWheel={(e) => {
              const target = e.currentTarget;
              if (target) {
                target.classList.add('scrolling');
                setTimeout(() => {
                  if (target) {
                    target.classList.remove('scrolling');
                  }
                }, 2000);
              }
            }}
          >
            <div className="videos-carousel">
              {pixVerseVideos.map((video, index) => (
                <div 
                  key={index} 
                  className="video-panel"
                  onMouseEnter={handleVideoHover}
                  onMouseLeave={handleVideoLeave}
                  onClick={handleVideoClick}
                >
                  <video
                    src={video}
                    className="video-player"
                    preload="metadata"
                    loop
                    muted
                    playsInline
                  >
                    Your browser does not support the video tag.
                  </video>
                  {/* Play Button Overlay */}
                  <div className="play-button-overlay">
                    <div className="play-button-circle">
                      <svg className="play-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5V19L19 12L8 5Z" fill="#8B4513"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate videos for seamless loop */}
              {pixVerseVideos.map((video, index) => (
                <div 
                  key={`duplicate-${index}`} 
                  className="video-panel"
                  onMouseEnter={handleVideoHover}
                  onMouseLeave={handleVideoLeave}
                  onClick={handleVideoClick}
                >
                  <video
                    src={video}
                    className="video-player"
                    preload="metadata"
                    loop
                    muted
                    playsInline
                  >
                    Your browser does not support the video tag.
                  </video>
                  {/* Play Button Overlay */}
                  <div className="play-button-overlay">
                    <div className="play-button-circle">
                      <svg className="play-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5V19L19 12L8 5Z" fill="#8B4513"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
            </div>
          </section>
          )}

      {/* Trust Badges Section (Only show with WOM) */}
      {showRatings && (
        <section className="trust-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Customers Trust Us</h2>
            <p className="section-subtitle">Our commitment to quality and sustainability</p>
          </div>
          <div className="trust-badges-container">
            {trustImages.map((trustImage, index) => (
              <div key={index} className="trust-badge-item">
                <div className="trust-badge-circle">
                  <img 
                    src={trustImage} 
                    alt={`Trust Badge ${index + 1}`}
                    className="trust-badge-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}
      <section className="benefits-section">
        <div className="container">
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 7h-4M4 7h4m0 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-6 0v10m6-10v10m-6 0h6m6 0v-5a2 2 0 0 0-2-2h-4v7m6 0H10"/>
                </svg>
              </div>
              <h3 className="benefit-title">Free Shipping</h3>
              <p className="benefit-description">On orders over ₹999</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="benefit-title">Secure Payment</h3>
              <p className="benefit-description">100% secure transactions</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3 className="benefit-title">Easy Returns</h3>
              <p className="benefit-description">30-day return policy</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3 className="benefit-title">Quality Assured</h3>
              <p className="benefit-description">Premium quality products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="video-modal-overlay"
          onClick={closeVideoModal}
        >
          <div 
            className="video-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="video-modal-close"
              onClick={closeVideoModal}
              aria-label="Close video"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <video
              src={selectedVideo}
              className="video-modal-player"
              controls
              autoPlay
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Instagram Modal - Only show with WOM */}
      {showRatings && showInstagramModal && (
        <div 
          className="instagram-modal-overlay"
          onClick={() => setShowInstagramModal(false)}
        >
          <div 
            className="instagram-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="instagram-modal-close"
              onClick={() => setShowInstagramModal(false)}
              aria-label="Close Instagram"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="instagram-modal-content">
              <div className="instagram-modal-header">
                <h2 className="instagram-modal-title">Our Instagram</h2>
                <p className="instagram-modal-subtitle">Check out our latest posts and reels</p>
              </div>
              <div className="instagram-embeds-container">
                {instagramReels.map((url, index) => (
                  <div
                    key={`insta-reel-${index}`}
                    className="instagram-embed-wrapper"
                  >
                    <div 
                      className="instagram-embed-item"
                      dangerouslySetInnerHTML={{ __html: createInstagramEmbed(url) }}
                    />
                  </div>
                ))}
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

export default HomePage;

