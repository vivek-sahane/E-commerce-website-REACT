import React from "react";
import "./Hero.css"
import hand_icon from "../../assets/hand_icon.png"
import arrow_icon from "../../assets/arrow_icon.png"
import men from "../../assets/men.webp"


const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>Best Deals ! Best Prices!</h2>
            
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} height="60px" alt="" />
                </div>
                <p>collections </p>
                <p>for everyone</p>

                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img  src={arrow_icon} height="30px" alt="" />
                </div>

            </div>

            

            <div className="hero-right">
                <img  src={men} alt="" height="400px" />
            </div>
        </div>
    )
}


export default Hero