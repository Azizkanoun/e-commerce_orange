import React from 'react'
import './Hero.css'
import arrow from '../Assets/right-arrow.png'
import model from '../Assets/model.jpeg'
export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New Aarrivals</h2>
            <p>Luxury Items</p>
        </div>
        <div className="hero-latest-btn">
            <div>New Colections</div>
            <img src={arrow} alt="" width="25" height="25" />
        </div>
        <div className="hero-right">
            <img src={model} alt="" width="400" height="600" />
        </div>
    </div>
  )
}
