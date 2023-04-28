import React from "react";
import {
  IconMenu,
  IconX,
  IconSmartHome,
  IconDiamond,
  IconBrandTwitter,
  IconBrandGithub,
  IconBrandCodepen,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  function toggleMobileMenu() {
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuToggle = document.querySelector("#menutoggle");
    mobileMenu.classList.toggle("open");
    menuToggle.classList.toggle("open");
  }
  return (
    <div className="menu">
      <NavLink
        id="index-link"
        className="nav-link my-popover"
        to="/"
        data-content="Home"
        aria-label="Home Page"
      >
        <IconSmartHome></IconSmartHome>
      </NavLink>
      <NavLink
        className="nav-link my-popover portfolio-link"
        to="/portfolio"
        data-content="Portfolio"
        aria-label="Portfolio"
      >
        <IconDiamond></IconDiamond>
      </NavLink>
      <span className="vr-hr" />
      <button
        id="menutoggle"
        className="menu-toggle d-sm-none"
        type="button"
        onClick={toggleMobileMenu}
      >
        <IconMenu size={16} className="icon-tabler-menu"></IconMenu>
        <IconX size={16} className="icon-tabler-x"></IconX>
      </button>
      <div className="mobile-menu">
        <a
          className="nav-link my-popover"
          href="https://twitter.com/hevalnergizz"
          data-content="Twitter"
          target="_blank"
          aria-label="Twitter"
          rel="noreferrer"
        >
          <IconBrandTwitter></IconBrandTwitter>
        </a>
        <a
          className="nav-link my-popover"
          href="https://github.com/HevalNergiz"
          data-content="GitHub"
          target="_blank"
          aria-label="GitHub"
          rel="noreferrer"
        >
          <IconBrandGithub></IconBrandGithub>
        </a>
        <a
          className="nav-link my-popover"
          href="https://www.linkedin.com/in/hevalnergiz/"
          data-content="LinkedIn"
          target="_blank"
          aria-label="LinkedIn"
          rel="noreferrer"
        >
          <IconBrandLinkedin></IconBrandLinkedin>
        </a>
        <a
          className="nav-link my-popover"
          href="https://www.instagram.com/hevalnergiz.css/"
          data-content="Instagram"
          target="_blank"
          aria-label="Instagram"
          rel="noreferrer"
        >
          <IconBrandInstagram></IconBrandInstagram>
        </a>
        <a
          className="nav-link my-popover"
          href="https://codepen.io/hevalnergiz/"
          data-content="CodePen"
          target="_blank"
          aria-label="CodePen"
          rel="noreferrer"
        >
          <IconBrandCodepen></IconBrandCodepen>
        </a>
      </div>
    </div>
  );
};
export default Menu;
