import React from "react";
import "./HeroContainer.css"; // Import the CSS file for styling

const HeroContainer = ({ title, subtitle, image }) => {
  return (
    <div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <h3 className="hero-subtitle">{subtitle}</h3>
        </div>
        <div className="hero-image">
          <img src={image} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
