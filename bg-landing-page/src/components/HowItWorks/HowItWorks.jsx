import React from 'react'
import './HowItWorks.css'

const HowItWorks = () => {
  return (
    <div className='how-it-works'>
      <h2 className='how-it-works-title'>HOW IT WORKS</h2>
      <div className='boxes'> 
        <div className='box'>
            <h3>Step 1</h3>
            <h4>Join</h4>
            <p>Sign up with your email address to start earning points.</p>
        </div>
        <div className='box'>
            <h3>Step 2</h3>
            <h4>Earn</h4>
            <p>Earn Justice points on every referral, and opening a new case.</p>
        </div>
        <div className='box'>
            <h3>Step 3</h3>
            <h4>Get Rewarded!</h4>
            <p>Unlocking exclusive rewards. Progress through tiers to access unique rewards.</p>
        </div>
      </div>
      <div className='heroes-gallery'>
        <img src="src/assets/heroes-gallery.svg" alt="" />
      </div>
    </div>
  )
}

export default HowItWorks
