import React from 'react';
import { slide as Menu } from 'react-burger-menu';

import { Link } from 'react-router-dom';
import ImageButton from "./Buttons";
import '../styles/sidebar.css';

import humburger from "../images/humburger.svg";
import exit from "../images/exit.svg";
import settings from "../images/settings.svg";
import profile from "../images/profile.svg"
import home from "../images/home.svg";

export default Sidebar => {   // TODO: Change URIs, Prevent overlay scrolling behind sidebar
  return (
    <Menu width={'275px'} customBurgerIcon={<img src={humburger}/>} customCrossIcon={<img src={exit}/>} disableAutoFocus >
      <Link to="/">
        <ImageButton image={home} cls={"hamburger-item"} alt={"Home"}>
          Home
        </ImageButton>
      </Link>

      <Link to="/profile">
        <ImageButton image={profile} cls={"hamburger-item"} alt={"Profile"}>
          Profile
        </ImageButton>
      </Link>

      <Link to="/Settings">
        <ImageButton image={settings} cls={"hamburger-item"} alt={"Settings"}>
          Settings
        </ImageButton>
      </Link>
    </Menu>
  )
}