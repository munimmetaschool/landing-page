import React from 'react';
import './style/Home.css'

const Home = () => {
  return (
    <section id="Home" className="home-section">
      <div className="home-content">
        <div className="home-text">
          <h1>The one where we welcome you to <span className='font-style'>F.R.I.E.N.D.S</span> token</h1>
          <p>Your go-to source for all information about our token.</p>
        </div>
        <div className="home-image">
          <img src="/img/Friends-token-2.png" alt="Token Image" />
        </div>
      </div>
    </section>
  );
};

export default Home;
