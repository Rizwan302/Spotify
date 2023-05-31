import React from "react";
import Loginbar from "../Loginbar";
import "./Home.scss";
import HomeCard from "../Cards/HomeCard";
import Footer from "./Footer";
import HrSpotify from "./HrSpotify";

export default function Home() {
  return (
    <div className="secend">
      {/* -------loginbar----------- */}
      <Loginbar className="login" />
      <div className="main">
        <div className="title">
          <h2>Foces</h2>
          <HomeCard title="Hello World"/>
          <HomeCard title="Hello World"/>
          <HomeCard title="Hello World"/>
          <HomeCard title="Hello World"/>
          <HomeCard title="Hello World"/>
          <HomeCard title="Hello World"/>
        </div>
      </div>

      <Footer/>
      <HrSpotify/>
    </div>
  );
}
