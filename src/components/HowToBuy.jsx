import React from 'react';
import './style/HowToBuy.css';

const HowToBuy = () => {
  return (
    <section className="how-to-buy">
      <h2 className="section-heading">How to Buy</h2>

      <div className="section-box">
        <img src="placeholder-image.png" alt="Wallet image" className="box-image" />
        <div className="box-content">
          <h3 className="box-heading">Step 1: Create a Wallet</h3>
          <p className="box-description">
            Download MetaMask or your preferred wallet from the app store or Google Play Store. Desktop users can download the Google Chrome extension from metamask.io.
          </p>
        </div>
      </div>
      <div className="section-box">
        <img src="placeholder-image.png" alt="Wallet image" className="box-image" />
        <div className="box-content">
          <h3 className="box-heading">Step 1: Create a Wallet</h3>
          <p className="box-description">
            Download MetaMask or your preferred wallet from the app store or Google Play Store. Desktop users can download the Google Chrome extension from metamask.io.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
