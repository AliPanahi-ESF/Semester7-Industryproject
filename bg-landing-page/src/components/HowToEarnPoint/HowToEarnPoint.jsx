import React from 'react'
import './HowToEarnPoint.css'

const HowToEarnPoint = () => {
  return (
    <div>
          <div className='how-to-earn-point'>
      <h2 className='how-it-works-title'>HOW TO EARN POINT</h2>
      <p className='p-center'>The more loyalty you show, the more rewards points you'll earn. Use your points to unlock through tiers to access loyalty-exclusive rewards.</p>
      <p>Earn 25 points for opening a new case and 100 points for referring a client. Points are based on the case value, making the system fair and rewarding larger contributions.</p>
      <div className='boxes'> 
        <div className='red-box'>
            <h3>+25</h3>
        </div>
        <div className='red-box'>
            <h3>+100</h3>
        </div>
      </div>
      <div className='tiers-system'>
      <h2 className='how-it-works-title'>Tier System</h2>
      <div className='tiers-boxes'>
        <div className='bronz-box'>
          <h3> BRONZ</h3>
        </div>
        <div className='silver-box'>
          <h3> SILVER</h3>
        </div>
        <div className='gold-box'>
          <h3> GOLD</h3>
        </div>
        <div className='platinum-box'>
          <h3> PLATINIUM</h3>
        </div>
      </div>
      </div>
      {/* <div className='heroes-gallery'>
        <img src="src/assets/heroes-gallery.svg" alt="" />
      </div> */}
    </div>
    </div>
  )
}

export default HowToEarnPoint
