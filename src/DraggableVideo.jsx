import React, { useState, useRef, useEffect } from 'react';
import './DraggableVideo.css';

const DraggableVideo = ({ videoSrc, showWOM = false, product = null }) => {
  // Calculate initial position in bottom right
  const getInitialPosition = () => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const isMobile = viewportWidth <= 768;
    const videoWidth = isMobile ? 160 : 180; // Mobile video width
    const videoHeight = isMobile ? 280 : 320; // Mobile video height
    const padding = isMobile ? 0 : 20; // No padding on mobile to position at edge
    
    return {
      x: viewportWidth - videoWidth - padding,
      y: viewportHeight - videoHeight - padding
    };
  };
  
  const [position, setPosition] = useState(getInitialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);
  const videoRef = useRef(null);
  const modalVideoRef = useRef(null);
  const containerRef = useRef(null);

  // Handle video click to open modal (only if not dragging)
  const handleVideoClick = (e) => {
    if (hasMoved || isDragging) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(true);
  };

  // Handle mouse down (desktop)
  const handleMouseDown = (e) => {
    if (e.target.closest('.video-controls')) return;
    e.preventDefault();
    
    setHasMoved(false);
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  // Handle touch start (mobile)
  const handleTouchStart = (e) => {
    if (e.target.closest('.video-controls')) return;
    e.preventDefault();
    
    const touch = e.touches[0];
    setHasMoved(false);
    setIsDragging(true);
    setDragStart({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y
    });
  };

  // Handle mouse move (desktop)
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    
    // Mark as moved if position changes significantly
    if (Math.abs(newX - position.x) > 5 || Math.abs(newY - position.y) > 5) {
      setHasMoved(true);
    }
    
    // Constrain to viewport
    const isMobile = window.innerWidth <= 768;
    const videoWidth = isMinimized ? (isMobile ? 60 : 100) : (isMobile ? 160 : 200);
    const videoHeight = isMinimized ? (isMobile ? 100 : 160) : (isMobile ? 280 : 340);
    const padding = isMobile ? 0 : 0; // Allow edge positioning
    
    const maxX = window.innerWidth - videoWidth - padding;
    const maxY = window.innerHeight - videoHeight - padding;
    
    setPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY))
    });
  };

  // Handle touch move (mobile)
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const touch = e.touches[0];
    const newX = touch.clientX - dragStart.x;
    const newY = touch.clientY - dragStart.y;
    
    // Mark as moved if position changes significantly
    if (Math.abs(newX - position.x) > 5 || Math.abs(newY - position.y) > 5) {
      setHasMoved(true);
    }
    
    // Constrain to viewport
    const isMobile = window.innerWidth <= 768;
    const videoWidth = isMinimized ? (isMobile ? 60 : 100) : (isMobile ? 160 : 200);
    const videoHeight = isMinimized ? (isMobile ? 100 : 160) : (isMobile ? 280 : 340);
    const padding = isMobile ? 0 : 0; // Allow edge positioning
    
    const maxX = window.innerWidth - videoWidth - padding;
    const maxY = window.innerHeight - videoHeight - padding;
    
    setPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY))
    });
  };

  // Handle drag end
  const handleDragEnd = () => {
    setIsDragging(false);
    // Reset moved flag after a short delay to allow for click detection
    setTimeout(() => setHasMoved(false), 100);
  };

  // Handle window resize to keep video in bounds
  React.useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const isMobile = viewportWidth <= 768;
      const videoWidth = isMinimized ? (isMobile ? 60 : 80) : (isMobile ? 160 : 180);
      const videoHeight = isMinimized ? (isMobile ? 100 : 140) : (isMobile ? 280 : 320);
      const padding = isMobile ? 0 : 20; // No padding on mobile to position at edge
      
      setPosition(prev => ({
        x: Math.min(prev.x, viewportWidth - videoWidth - padding),
        y: Math.min(prev.y, viewportHeight - videoHeight - padding)
      }));
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMinimized]);

  // Add global event listeners
  useEffect(() => {
    if (isDragging) {
      // Mouse events
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleDragEnd);
      
      // Touch events
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleDragEnd);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleDragEnd);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleDragEnd);
      };
    }
  }, [isDragging, dragStart]);

  // Autoplay when component mounts or WOM is enabled
  React.useEffect(() => {
    if (showWOM && videoRef.current && !isMinimized) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Autoplay was prevented
        setIsPlaying(false);
      });
    }
  }, [showWOM, isMinimized]);

  // Handle modal video autoplay
  React.useEffect(() => {
    if (isModalOpen && modalVideoRef.current) {
      modalVideoRef.current.play();
    }
  }, [isModalOpen]);

  // Reset visibility when WOM is enabled
  React.useEffect(() => {
    if (showWOM) {
      setIsVisible(true);
    }
  }, [showWOM]);

  // Play/pause video
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Toggle minimize
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
    if (videoRef.current && isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Close modal
  const closeModal = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    console.log('Modal close triggered');
    setIsModalOpen(false);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
  };

  // Close video
  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsPlaying(false);
    setIsVisible(false);
    // Reset position to bottom right when closed and reopened
    setPosition(getInitialPosition());
  };

  // Handle video ended
  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  // Only show if WOM is enabled and component is visible
  if (!showWOM || !isVisible) return null;

  return (
    <>
    <div
      ref={containerRef}
      className={`draggable-video ${isMinimized ? 'minimized' : ''} ${isDragging ? 'dragging' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {/* Video Container */}
      <div className="video-wrapper" onClick={handleVideoClick}>
        <video
          ref={videoRef}
          src={videoSrc}
          className="draggable-video-player"
          muted
          playsInline
          loop
          onEnded={handleVideoEnded}
          poster=""
        />
        
        {/* Video Overlay with Controls */}
        <div className="video-overlay">
          {/* Play/Pause Button */}
          {!isMinimized && (
            <button
              className="video-controls play-button"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="6" y="4" width="4" height="16" fill="white"/>
                  <rect x="14" y="4" width="4" height="16" fill="white"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                </svg>
              )}
            </button>
          )}
          
          {/* Top Controls */}
          <div className="video-controls top-controls">
            <button
              className="control-btn minimize-btn"
              onClick={toggleMinimize}
              aria-label={isMinimized ? 'Maximize' : 'Minimize'}
            >
              {isMinimized ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M7 14H5v5h5v-2H7v-3zM5 10h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" fill="white"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6h12v12H6z" fill="none" stroke="white" strokeWidth="2"/>
                  <path d="M9 9h6v6H9z" fill="white"/>
                </svg>
              )}
            </button>
            
            <button
              className="control-btn close-btn"
              onClick={closeVideo}
              aria-label="Close"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Minimized State Icon */}
        {isMinimized && (
          <div className="minimized-icon" onClick={toggleMinimize}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M8 5V19L19 12L8 5Z" fill="white"/>
            </svg>
          </div>
        )}
        
        {/* Play indicator for autoplay */}
        {!isMinimized && isPlaying && (
          <div className="autoplay-indicator">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M8 5V19L19 12L8 5Z" fill="white" fillOpacity="0.8"/>
            </svg>
          </div>
        )}
      </div>
      
      {/* Drag Handle Visual Indicator */}
      <div className="drag-indicator">
        <div className="drag-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

    </div>
    
    {/* Video Modal - Outside the draggable container */}
    {isModalOpen && (
      <div className="video-modal-overlay" onClick={closeModal}>
        <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
          {/* Close button */}
          <button className="modal-close-btn" onClick={closeModal}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          
          {/* Video container */}
          <div className="modal-video-container">
            <video
              ref={modalVideoRef}
              src={videoSrc}
              className="modal-video-player"
              controls
              autoPlay
              playsInline
              loop
            />
            
            {/* Product info overlay - New horizontal layout */}
            <div className="modal-product-overlay">
              <div className="modal-product-layout">
                {/* Left side - Product Image */}
                <div className="modal-product-image-container">
                  <img 
                    src={product && (product.image || (product.images && product.images[0])) || 'https://baboski.com/cdn/shop/files/2_f7707208-7963-44e1-9377-7dea84bfb781.png?v=1752147555&width=100'} 
                    alt={product && product.name || 'Product'} 
                    className="modal-product-image"
                  />
                </div>
                
                {/* Right side - Product Details */}
                <div className="modal-product-details">
                  <h3 className="modal-product-name">{product && product.name || 'BLUE FREESIA DRESS'}</h3>
                  <p className="modal-product-price">₹{product && product.price && product.price.toLocaleString('en-IN') || '2,999'}</p>
                  <button 
                    className="modal-add-to-cart-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log('Add to cart clicked', product);
                      alert(`${product && product.name || 'Product'} added to cart!`);
                    }}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
  );
};

export default DraggableVideo;