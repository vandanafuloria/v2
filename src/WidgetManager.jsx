import React, { useState, useEffect, useRef } from 'react';

const WidgetManager = ({ messages = [], onWidgetShow }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeWidgets, setActiveWidgets] = useState([]);
  const [currentWidgetIndex, setCurrentWidgetIndex] = useState(0);
  const intervalRef = useRef(null);

  const dropdownOptions = [
    'Recent Viewed',
    'Most Popular',
    'Recently Purchased',
    'All Notifications'
  ];

  const handleSelectOption = (option) => {
    setIsDropdownOpen(false);
    
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Show widgets one by one
    let selectedMessages = [];
    if (option === 'Recent Viewed') {
      selectedMessages = messages.slice(0, 3);
    } else if (option === 'Most Popular') {
      selectedMessages = messages.slice(1, 4);
    } else if (option === 'Recently Purchased') {
      selectedMessages = messages.slice(2, 5);
    } else if (option === 'All Notifications') {
      selectedMessages = [...messages];
    }
    
    setActiveWidgets(selectedMessages);
    setCurrentWidgetIndex(0);
    
    // Show first widget immediately
    if (selectedMessages.length > 0 && onWidgetShow) {
      onWidgetShow(selectedMessages[0]);
    }
  };

  // Show widgets one by one when activeWidgets change
  useEffect(() => {
    if (activeWidgets.length === 0 || currentWidgetIndex >= activeWidgets.length) return;

    // Clear existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Show next widget every 3 seconds
    intervalRef.current = setInterval(() => {
      setCurrentWidgetIndex(prev => {
        const nextIndex = prev + 1;
        if (nextIndex < activeWidgets.length && onWidgetShow) {
          onWidgetShow(activeWidgets[nextIndex]);
        }
        return nextIndex;
      });
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeWidgets, currentWidgetIndex, onWidgetShow]);

  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-lg px-4 py-2 flex items-center gap-2 cursor-pointer transition-all duration-300 text-sm text-white font-medium font-['Space_Grotesk'] hover:bg-white/30 hover:border-white/50"
      >
        Widgets
        <svg 
          className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
          width="12" 
          height="12" 
          viewBox="0 0 12 12" 
          fill="none"
        >
          <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-[rgba(165,130,150,0.2)] min-w-[180px] overflow-hidden z-[1000] before:content-[''] before:absolute before:bottom-full before:right-5 before:w-0 before:h-0 before:border-l-[8px] before:border-r-[8px] before:border-b-[8px] before:border-l-transparent before:border-r-transparent before:border-b-white" style={{ animation: 'slideDown 0.3s ease-out' }}>
          {dropdownOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelectOption(option)}
              className="block w-full text-left px-4 py-2.5 border-none bg-transparent cursor-pointer transition-colors duration-200 text-[#2d2d2d] text-sm font-medium font-['Space_Grotesk'] border-b border-[#f5f5f5] last:border-b-0 hover:bg-[#f8f6f3] hover:text-[#a58296]"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default WidgetManager;
