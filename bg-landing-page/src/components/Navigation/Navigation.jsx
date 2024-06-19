import React from 'react';
import './Navigation.css';

const Navigation = () => {
  const scrollToHeroSection = () => {
    const heroSection = document.getElementById('become-hero-section');
    heroSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="navigation">
      <div className="navigation-link" onClick={scrollToHeroSection}>
        Become a Hero
      </div>
    </div>
  );
};

export default Navigation;
