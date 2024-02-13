import React, { useState, useEffect } from 'react';
import './style/NavBar.css'
import NavItem from './NavItem';


const SECTIONS = ['Home', 'About', 'How To Buy'];

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('Home');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <nav className="navbar">
      <div className='navbar-page'>
        <a href="/" className="logo">F<span className='dot dot-1'>.</span>R<span className='dot dot-2'>.</span>I<span className='dot dot-3'>.</span>E<span className='dot dot-1'>.</span>N<span className='dot dot-2'>.</span>D<span className='dot dot-3'>.</span>S</a>
        <ul className="nav-links">
          {SECTIONS.map((section) => (
            <NavItem
              key={section}
              section={section}
              isActive={section === activeSection}
              onClick={() => handleNavClick(section)}
            />
          ))}
          <li className="nav-item">
            <button className='btn'>Bridge</button>
          </li>
          <li className="nav-item">
            <button className='btn'>Buy Now</button>
          </li>
          <li className="nav-item">
            <ConnectMetaMask></ConnectMetaMask>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

function ConnectMetaMask() {

  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  // state for keeping track of current connected account.
  const [account, setAccount] = useState(null);

  useEffect(() => {
      if (window.ethereum) {
          setIsWalletInstalled(true);
      }
    }, []);

  async function connectWallet() {
      window.ethereum
      .request({
          method: "eth_requestAccounts",
      })
      .then((accounts) => {
          setAccount(accounts[0]);
      })
      .catch((error) => {
          alert("Something went wrong");
      });
  }

  if (account === null) {
    return (
      <div>
        {
          isWalletInstalled ? (
            <button onClick={connectWallet} className='btn'>Connect Wallet</button>
          ) : (
            <p>Install Metamask wallet</p>
          )
        }

      </div>
    );
  }
  return (
      <div>
        <p>Connected at: {account}</p>
      </div>
  );
}

