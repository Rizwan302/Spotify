import React from "react";
import "./Footer.scss";
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { CiFacebook } from 'react-icons/ci';
import { Padding } from "@mui/icons-material";

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
        
            <BsInstagram  className="item"/>
            <BsTwitter className="item"/>
            <CiFacebook className="item"/>
      </div>
    </div>
  );
}
