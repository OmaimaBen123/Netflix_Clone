import React from 'react';
import '../Navbar/Navbar.css';
import Logo from '../../assets/netflix.png';
import search_icon from "../../assets/search.png";
import bell_icon from "../../assets/bell_icon.png";
import profile_img from "../../assets/user.png";
import caret_img from "../../assets/caretIcon.png";

import caret_icon from "../../assets/search.png";
const Navbar = () => {
  return <div className="navbar">
      <div className="nav-left">
        <img src={Logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by languages</li>
        </ul>
      </div>
      <div className="nav-right">
        <img src={search_icon} alt="" className="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="" className="icons" />
        <div className="navbar-profile">
          <img src={profile_img} alt="" className="profile" />
              <img src={caret_img} alt="profile" />
              <div className="dropdown">
                  <p>Sign Out of Netflix</p>
              </div>
        </div>
      </div>
    </div>;
}

export default Navbar
