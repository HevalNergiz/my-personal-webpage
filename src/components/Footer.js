import React from "react";
const Footer = () => {
  return (
    <footer className="pt-5 pb-10 px-3 d-flex justify-content-center">
      <p className="text-muted d-flex align-items-center gap-2 fw-light">
        Have a nice Frontend
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icon-tabler-heart text-danger"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
        </svg>
      </p>
    </footer>
  );
};

export default Footer;
