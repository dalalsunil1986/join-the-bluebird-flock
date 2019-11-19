import React from 'react';
import LazyHero from 'react-lazy-hero';
import './Fourth.css'

function Fourth(props) {
  return (
    <div className="Fourth">
      <LazyHero  opacity="0" minHeight="600px"  parallaxOffset="0" imageSrc={ require('../images/google-fourth.jpg') } className="hero-fourth" isCentered="true" >
      <div className="flex-container-fourth">
          <div className="mobile-image-fourth">
            <img src={ require('../images/third-banner-mobile-grf.jpg')}/>
          </div>
          <div className="copy-fourth">
          <h1>Shop <span className="white">now.</span></h1> 
          <button type="button" onClick={props.redirect} >Begin self care</button>
        </div>
      </div>  
      </LazyHero>
    </div>
  );
}

export default Fourth;
