import React from "react";
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icon-tabler-smart-home"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105" />
          <path d="M16 15c-2.21 1.333-5.792 1.333-8 0" />
        </svg>
      </NavLink>
      <NavLink
        className="nav-link my-popover portfolio-link"
        to="/portfolio"
        data-content="Portfolio"
        aria-label="Portfolio"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icon-tabler-diamond"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 5h12l3 5l-8.5 9.5a.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5" />
          <path d="M10 12l-2 -2.2l.6 -1" />
        </svg>
      </NavLink>
      <span className="vr-hr" />
      <button
        id="menutoggle"
        className="menu-toggle d-sm-none"
        type="button"
        onClick={toggleMobileMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icon-tabler-menu"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1={4} y1={8} x2={20} y2={8} />
          <line x1={4} y1={16} x2={20} y2={16} />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icon-tabler-x"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1={18} y1={6} x2={6} y2={18} />
          <line x1={6} y1={6} x2={18} y2={18} />
        </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icon-tabler-brand-twitter"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
          </svg>
        </a>
        <a
          className="nav-link my-popover"
          href="https://github.com/HevalNergiz"
          data-content="GitHub"
          target="_blank"
          aria-label="GitHub"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icon-tabler-brand-github"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
        </a>
        <a
          className="nav-link my-popover"
          href="https://www.linkedin.com/in/hevalnergiz/"
          data-content="LinkedIn"
          target="_blank"
          aria-label="LinkedIn"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icon-tabler-brand-linkedin"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x={4} y={4} width={16} height={16} rx={2} />
            <line x1={8} y1={11} x2={8} y2={16} />
            <line x1={8} y1={8} x2={8} y2="8.01" />
            <line x1={12} y1={16} x2={12} y2={11} />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
          </svg>
        </a>
        <a
          className="nav-link my-popover"
          href="https://www.instagram.com/hevalnergiz.css/"
          data-content="Instagram"
          target="_blank"
          aria-label="Instagram"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icon-tabler-brand-instagram"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x={4} y={4} width={16} height={16} rx={4} />
            <circle cx={12} cy={12} r={3} />
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
          </svg>
        </a>
        <a
          className="nav-link my-popover"
          href="https://codepen.io/hevalnergiz/"
          data-content="CodePen"
          target="_blank"
          aria-label="CodePen"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icon-tabler-brand-codepen"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 15l9 6l9 -6l-9 -6l-9 6" />
            <path d="M3 9l9 6l9 -6l-9 -6l-9 6" />
            <line x1={3} y1={9} x2={3} y2={15} />
            <line x1={21} y1={9} x2={21} y2={15} />
            <line x1={12} y1={3} x2={12} y2={9} />
            <line x1={12} y1={15} x2={12} y2={21} />
          </svg>
        </a>
      </div>
    </div>
  );
};
export default Menu;
