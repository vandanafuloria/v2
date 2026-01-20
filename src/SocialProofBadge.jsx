import React, { useState } from 'react';
import { ChartSpline } from 'lucide-react';
import './SocialProofBadge.css';

const SocialProofBadge = ({
  rating = 4.2,
  reviewCount = 235,
  soldThisWeek = 235,
  className = '',
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const decimal = rating - fullStars;
  const hasHalf = decimal >= 0.25 && decimal <= 0.75;
  const emptyStars = totalStars - fullStars - (hasHalf ? 1 : 0);
  const stars = [
    ...Array(fullStars).fill('full'),
    ...(hasHalf ? ['half'] : []),
    ...Array(emptyStars).fill('empty'),
  ];

  // Rating distribution (Amazon-style breakdown)
  const ratingDistribution = [
    { stars: 5, percent: 75, count: Math.round(reviewCount * 0.75) },
    { stars: 4, percent: 17, count: Math.round(reviewCount * 0.17) },
    { stars: 3, percent: 5, count: Math.round(reviewCount * 0.05) },
    { stars: 2, percent: 2, count: Math.round(reviewCount * 0.02) },
    { stars: 1, percent: 1, count: Math.round(reviewCount * 0.01) },
  ];

  const handleClick = () => {
    const reviewSection = document.getElementById('reviews-section');
    if (reviewSection) {
      reviewSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className={`relative flex flex-wrap sm:flex-nowrap w-full sm:w-[70%] items-center justify-center sm:justify-start gap-2 sm:gap-2 rounded-full border border-[#e9dbe2] bg-white/95 px-3 sm:px-3.5 py-2 sm:py-1.5 text-[0.7rem] sm:text-[0.75rem] text-[#6f5360] shadow-[0_8px_16px_rgba(133,105,120,0.14)] backdrop-blur cursor-pointer hover:shadow-[0_12px_20px_rgba(133,105,120,0.18)] transition-shadow ${className}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={handleClick}
    >
      <div className="flex items-center gap-1 rounded-full px-2 sm:px-2.5 py-1 sm:py-1.5">
        <span className="flex items-center text-[0.85rem] sm:text-[0.95rem]">
          {stars.map((type, index) => (
            <span
              key={`${type}-${index}`}
              className={`spb-star spb-star--${type}`}
              aria-hidden="true"
            />
          ))}
        </span>
        <span className="text-[0.7rem] sm:text-[0.75rem] font-semibold text-[#7c5a6b]">{rating.toFixed(1)}</span>
      </div>

      <span className="hidden sm:block h-4 w-px bg-[#ead9e1]" />

      <div className="flex items-center gap-1 px-1 sm:px-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-[#a58296]" />
        <span className="text-[0.7rem] sm:text-[0.75rem] font-medium whitespace-nowrap">{reviewCount} reviews</span>
      </div>

      <span className="hidden sm:block h-4 w-px bg-[#ead9e1]" />

      <div className="flex items-center gap-1 rounded-full bg-[#f7eef2] px-2 sm:px-2.5 py-1 sm:py-1.5 text-[#a58296]">
        <ChartSpline size={14} strokeWidth={1.8} className="sm:w-4 sm:h-4" />
        <span className="text-[0.6rem] sm:text-[0.68rem] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.24em]">
          Sold
        </span>
        <span className="text-[0.7rem] sm:text-[0.75rem] font-medium text-[#7c5a6b]">{soldThisWeek}</span>
      </div>

      {/* Rating Breakdown Tooltip */}
      {showTooltip && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 p-3 sm:p-4 z-50 w-[90vw] max-w-[280px] sm:min-w-[280px]">
          <div className="mb-3 pb-3 border-b border-gray-200">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl font-bold text-[#7c5a6b]">{rating.toFixed(1)}</span>
              <div className="flex items-center gap-0.5">
                {stars.map((type, index) => (
                  <span
                    key={`tooltip-${type}-${index}`}
                    className={`spb-star spb-star--${type}`}
                    style={{ fontSize: '14px' }}
                  />
                ))}
              </div>
            </div>
            <p className="text-xs text-gray-600">Based on {reviewCount} reviews</p>
          </div>
          
          <div className="space-y-1.5">
            {ratingDistribution.map((item) => (
              <div key={item.stars} className="flex items-center gap-2 text-xs">
                <span className="text-gray-600 w-6 text-left font-medium">{item.stars}</span>
                <i className="fas fa-star text-[10px]" style={{ color: '#a58296' }}></i>
                <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${item.percent}%`,
                      backgroundColor: '#a58296'
                    }}
                  />
                </div>
                <span className="text-gray-600 w-8 text-right font-medium">{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialProofBadge;

