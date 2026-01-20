import React from 'react';
import './BaboskiLogo.css';

const BaboskiLogo = ({ size = 'medium', color = 'dark' }) => {
  return (
    <div className={`baboski-logo ${size} ${color}`}>
      <span className="baboski-text officialroop-logo-wrapper">
        <span className="officialroop-logo">officialroop</span>
      </span>
    </div>
  );
};

export default BaboskiLogo;