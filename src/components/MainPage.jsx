import React, { useState, useEffect } from "react";
import Header from "./header";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import HowToBuy from "./HowToBuy";
import Footer from "./Footer";
import './style/MainPage.css'

const MainPage = () => {
  return (
    <div className="main-page">
        <Header/>         
        <main>
            <Home />
            <NavBar />
            <About/>
            <HowToBuy />
        </main>
        <Footer></Footer>
    </div>
  );
};

export default MainPage;
