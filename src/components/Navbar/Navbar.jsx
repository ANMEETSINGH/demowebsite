import React from "react";
import { FiDownload } from "react-icons/fi";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="container">
      <div className="box">
        <a className="item item1" href="">
          Home
        </a>
        <a className="item item2" href="">
          About
        </a>
        <a className="item item3" href="">
          Project
        </a>
        <a className="item item4" href="">
          Skills
        </a>
        <a className="item item5" href="">
          <button>
            <FiDownload />
            <div> Resume</div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
