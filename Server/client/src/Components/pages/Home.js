import React from "react";
import Hero from "./Hero";
import About from "../assets/About.jpg";
import Features from "../assets/Features.jpg";
import Leader from "../assets/Leaderboard.jpg";


const Home = () => {
  return (
    <>
    <Hero />
    <img src={About}/>
    <img src={Features}/>
    <img src={Leader}/>

    </>
  );
};

export default Home;
