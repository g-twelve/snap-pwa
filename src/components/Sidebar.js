import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../styles/Sidebar.css';
import humburger from "../images/humburger.svg"
import {Link} from 'react-router-dom';
import ImageButton from "./Buttons";
import settings from "../images/settings.svg";
import tag from "../images/tag.svg";
import groups from "../images/groups.svg";

export default props => {   // TODO: Change URIs, Prevent overlay scrolling behind sidebar
  return (
    <Menu width={'275px'} customBurgerIcon={<img src={humburger}/>} disableAutoFocus >
      <Link to="/">
        <ImageButton image={groups} cls={"hamburger-item"} alt={"Groups"}>
          Groups
        </ImageButton>
      </Link>

      <Link to="/">
        <ImageButton image={tag} cls={"hamburger-item"} alt={"Tags"}>
          Tags
        </ImageButton>
      </Link>

      <Link to="/">
        <ImageButton image={settings} cls={"hamburger-item"} alt={"Settings"}>
          Settings
        </ImageButton>
      </Link>
    </Menu>
  )
}