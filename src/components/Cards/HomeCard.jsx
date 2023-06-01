import React from "react";
import "./HomeCard.scss";

import play from "./Img/play.png";
import pause from "./Img/pause.png";

export default function HomeCard({ title }) {
  return (
    <div className="cards">
      <div className="card-body">
        <img
          src="https://www.teachhub.com/wp-content/uploads/2019/10/Our-Top-10-Songs-About-School-768x569.png"
          alt=""
        />
        <div className="botton">
          <img src={play} alt="" />
          {/* <img src={pause} alt="" /> */}
        </div>
        {/* <img type='button' src={play} alt="" classNameName='play'/> */}

        <div className="text">
          <h5>{title}</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
}
