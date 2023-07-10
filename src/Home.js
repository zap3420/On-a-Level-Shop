import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import { ProgressBar } from "scrolling-based-progressbar";

const Home = () => {
  const data = {
    name: "On a level Shop",
  };

  return (
    <>
      <ProgressBar height="0.7rem" color="#4b75bd" bgColor="#ccc" />
      <HeroSection myData={data} />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
