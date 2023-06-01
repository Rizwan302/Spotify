import React from "react";
import Loginbar from "../Loginbar";
import HomeCard from "../Cards/HomeCard";
import Footer from "./Footer";
import HrSpotify from "./HrSpotify";
import "./Home.scss";

export default function Home() {
  return (
    <div className="secend">
      {/* -------loginbar----------- */}
      <Loginbar className="login" />
      <div className="main">
        <div className="title">
          <div className="show">
            <h2>Foces</h2>
            <a href="">Show all</a>
          </div>
          <HomeCard title="Hello World" />
          <HomeCard title="Hello World" />
          <HomeCard title="Hello World" />
          <HomeCard title="Hello World" />
          <HomeCard title="Hello World" />
        </div>

        <div className="title">
          <div className="show">
            <h2>Foces</h2>
            <a href="">Show all</a>
          </div>
          <HomeCard title="Hello World" />
          <HomeCard title="Hello World" />
          <HomeCard title="Hello World" />
          <HomeCard title="Hello World" />
          <HomeCard title="Hello World" />
        </div>

        <div className="title">
          <div className="show">
            <h2>Foces</h2>
            <a href="">Show all</a>
          </div>
          <HomeCard title="Hello World" />
          <HomeCard title="Hello World" />
          <HomeCard title="Hello World" />
          <HomeCard title="Hello World" />
        </div>

        
      </div>

      <Footer />
      <HrSpotify />
    </div>
  );
}
