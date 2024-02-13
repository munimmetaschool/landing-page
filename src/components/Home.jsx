import React from 'react';
import './style/Home.css'
import Spline from '@splinetool/react-spline';

function Coin() {
  return (
    <Spline scene="https://prod.spline.design/Ji5dSg0tvc89MvfF/scene.splinecode" />
  );
}


const Home = () => {

  return (
    <section id="Home" className="home-section">
      <div className='home-page'>
      <div className="home-content">
        <div className="home-text">
          <h1>Unveiling <span className='font-style'>F<span className='home-dot dot-1'>.</span>R<span className='home-dot dot-2'>.</span>I<span className='home-dot dot-3'>.</span>E<span className='home-dot dot-1'>.</span>N<span className='home-dot dot-2'>.</span>D<span className='home-dot dot-3'>.</span>S</span></h1>
          <p className='home-description'>Where Web3 meets the world of sitcoms, and token launches become a community affair.</p>
        </div>
        <div className="home-image">
          <Coin></Coin>
        </div>
      </div>
      <div className="home-stickers">
        <img src="/img/P•I•V•o•t P•I•V•o•t P•I•V•A•H•t.png" className='pivot-sticker'></img>
          <img src="/img/Central-Perk-logo.png" className='central-perk-sticker'></img>
          <img src="/img/Turkey-Head.png" className='turkey-head-sticker'></img>
        <img src="/img/frame.png" className='frame-sticker'></img>
        <img src="/img/I'll-there-for-you.png" className='ill-there-for-you-sticker'></img>
        <img src="/img/Couch.png" className='couch-sticker'></img> 
      </div>
      </div>
    </section>
  );
};

export default Home;
