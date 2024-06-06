import React from 'react'
import './lefthero.css'
import certificate from "../../../assets/300×250.png";
import hero from "../../../assets/female-thinking.png";

const LeftHero = () => {
  return (
    <div>
        <div className="left-hero">
            <div className="photo-left">
                <img src={hero} className="photo-1" />
                <img src={certificate} className="photo-2" />
            </div>
        </div>
      
    </div>
  )
}

export default LeftHero
