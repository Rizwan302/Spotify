import React from "react";
import Loginbar from "../Loginbar";
import "./Home.scss";
import HomeCard from "../Cards/HomeCard";

export default function Home() {
  return (
    <div className="secend">
      <Loginbar className="login" />
      <div className="main">
        <div className="title">
          <h2>Foces</h2>
          <HomeCard />
        </div>
      </div>
    </div>
  );
}
