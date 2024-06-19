import React from 'react';
import Landing from './components/Landing/Landing';
import Hero from './components/Hero/Hero';
import Slogan from './components/Slogan/Slogan';
import HowItWorks from './components/HowItWorks/HowItWorks';
import HowToEarnPoint from './components/HowToEarnPoint/HowToEarnPoint';
import BecomeHero from './components/BecomeHero/BecomeHero';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  return (
    <div>
      <Navigation/>
      {/* <Hero /> */}
      <Landing />
      {/* <Slogan /> */}
      <HowItWorks />
      <HowToEarnPoint />
      <div id="become-hero-section">
        <BecomeHero />
      </div>
    </div>
  );
};

export default App;
