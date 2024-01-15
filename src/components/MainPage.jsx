import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import HowToBuy from "./HowToBuy";
import './style/MainPage.css'

const MainPage = () => {
  return (
    <div className="main-page">
        <header>
            <NavBar />
        </header>
        <main>
            <Home />
            <About/>
            <HowToBuy />
        </main>
    </div>
  );
};

export default MainPage;
