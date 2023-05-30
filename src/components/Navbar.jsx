import React, { useState } from "react";
import "./Navbar.scss";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { MdAddBox } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { BiGlobe } from "react-icons/bi";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  // const [theme, setTheme] = useState({
  //   background: "#0F0F0F",
  //   color: "white",
  // });

  // const UpdateMode = () => {
  //   if (theme.color === "white") {
  //     setTheme({
  //       background: "#F5FFFA",
  //       color: "#0F0F0F",
  //     });
  //   } else {
  //     setTheme({
  //       background: "#0F0F0F",
  //       color: "white",
  //     });
  //   }
  // };

  return (
    <div className="navbar">
      <div className="warpar">
        <div className="logobar">
          <NavLink to="/">
            <img src="./public/logo.png" className="logo" alt="Spotify" />
          </NavLink>
          <span className="logotext">Spotify</span>
        </div>

        <div className="icon">
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : "#545e6f",
                  })}
                  className="NavLink"
                >
                  <AiFillHome className="icons" /> Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/search"
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : "#545e6f",
                  })}
                  className="NavLink"
                >
                  <AiOutlineSearch className="icons" /> Search
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/library"
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : "#545e6f",
                  })}
                  className="NavLink"
                >
                  <BiLibrary className="icons" /> Your Library
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="secIcon">
            <li>
              <NavLink
                to="/playlist"
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#545e6f",
                })}
                className="NavLink"
              >
                <MdAddBox className="icons" /> Create Playlist
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/liked"
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#545e6f",
                })}
                className="NavLink"
              >
                <FcLike className="icons" /> Liked Songs
              </NavLink>
            </li>
          </div>
        </div>

        <footer>
          <p>Legal</p>
          <p>Privacy Center</p>
          <p>Privacy Policy</p>
          <p>Cookies</p>
          <p>About Ads</p>
          <p>Accessibility</p>
          <p>Cookies</p>
        </footer>
        <button className="globleButton">
          <BiGlobe className="gloIcon" /> English
        </button>
      </div>
    </div>
  );
}
