import React from "react";
import "./Footer.scss";
import twitter from '../Img/twitter.png'
import facebook from '../Img/facebook.png'
import instagram from '../Img/instagram.png'

export default function Footer() {
  return (
    <div className="footer">
      <div className="text-warper">

        {/* --------------Company---------------  */}
        <div className="company">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Jobs</a>
            </li>
            <li>
              <a href="">For the Record</a>
            </li>
          </ul>
        </div>

        {/* ---------------Communities---------------- */}
        <div className="communities">
          <h4>Communities</h4>
          <ul>
            <li>
              <a href="">For Artists</a>
            </li>
            <li>
              <a href="">Developers</a>
            </li>
            <li>
              <a href="">Advertising</a>
            </li>
            <li>
              <a href="">Investors</a>
            </li>
            <li>
              <a href="">Vendors</a>
            </li>
            <li>
              <a href="">Spotify for Work</a>
            </li>
          </ul>
        </div>


        {/* --------------Useful links------------------- */}
        <div className="useful">
          <h4>Useful links</h4>
          <ul>
            <li>
              <a href="">Support</a>
            </li>
            <li>
              <a href="">Free Mobile App</a>
            </li>
          </ul>
        </div>

      </div>
      <div className="icon-warper">
            <img src={instagram} alt="Instagram" className="item" />
            <img src={twitter} alt="Twitter" className="item" />
            <img src={facebook} alt="Facebook" className="item" />
      </div>
    </div>
  );
}
