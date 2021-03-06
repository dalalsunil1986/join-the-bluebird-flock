import React from 'react';
import LazyHero from 'react-lazy-hero';
import './Second.css'

function Second(props) {
  return (
    <div className="Second">
      <LazyHero  opacity="0" minHeight="600px"  parallaxOffset="0" imageSrc={ require('../images/hemp-sport-banner.jpg') } className="hero-second" isCentered="true" >
        <div className="flex-container-second">
          <div className="mobile-image-second">
            <img src={ require('../images/hemp-sport-mobile.jpg') }/>
          </div>
          <div className="copy-second">
              <h1>Lotions,</h1>
              <h1>extracts,</h1>
              <h1>soft gels</h1>
              <h1>and more.</h1> 
            <button type="button" onClick={props.redirect} >Shop Now</button>
          </div>
        </div>  
      </LazyHero>
    </div>
  );
}

export default Second;
