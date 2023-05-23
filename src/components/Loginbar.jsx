import React from "react";
import "./Loginbar.scss";
import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";

export default function Loginbar() {
  return (
    <div className="loginFrom">
      <div className="warpper">
        <div className="icon">
          <li>
            <a href="">
              <AiFillLeftCircle />
            </a>
          </li>
          <li>
            <a href="">
              <AiFillRightCircle />
            </a>
          </li>
        </div>
        <div className="login">
          <li>
            <a href="">Sign Up</a>
          </li>
          <li>
            <a href="" className="loginButton">Log in</a>
          </li>
        </div>
      </div>
    </div>
  );
}
