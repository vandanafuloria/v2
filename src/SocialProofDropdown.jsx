import React, { useState, useEffect } from 'react';

const SocialProofDropdown = ({ messages, autoRotateInterval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showWidget, setShowWidget] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Auto-rotate messages when widget is visible
  useEffect(() => {
    if (!showWidget || messages.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [showWidget, messages.length, autoRotateInterval]);

  if (messages.length === 0) return null;

  const currentMessage = messages[currentIndex];

  const handleSelectMessage = (index) => {
    setCurrentIndex(index);
    setShowWidget(true);
    setIsDropdownOpen(false);
  };

  // Auto-rotate messages even when just showing icon
  useEffect(() => {
    if (messages.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [messages.length, autoRotateInterval]);

  return (
    <div className="fixed bottom-5 left-5 z-[999]">
      {/* Icon Only - Rotating */}
      {currentMessage.image ? (
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-[#f8f6f3] to-[#f5f0f3] border-2 border-[rgba(165,130,150,0.3)] shadow-lg transition-transform duration-300 hover:scale-110">
          <img src={currentMessage.image} alt="Product" className="w-full h-full object-cover" />
        </div>
      ) : currentMessage.icon ? (
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#a58296] to-[#8e6d82] flex items-center justify-center text-white text-lg shadow-lg transition-transform duration-300 hover:scale-110">
          {currentMessage.icon}
        </div>
      ) : null}
    </div>
  );
};

export default SocialProofDropdown;
