import React from 'react';
import ReviewCards from './ReviewCards.jsx';
import './ReviewsSection.css';

const ReviewsSection = () => {
  return (
    <div className="reviews-section">
      <div className="reviews-container">
        <div className="reviews-header">
          <h2>Customer Reviews</h2>
        </div>

        <ReviewCards />

        <div className="reviews-footer">
          <button className="write-review-btn">Write a Review</button>
          <button className="load-more-btn">Load More Reviews</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;