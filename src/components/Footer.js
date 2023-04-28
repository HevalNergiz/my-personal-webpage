import React from "react";
import { IconHeart } from "@tabler/icons-react";
const Footer = () => {
  return (
    <>
      <footer className="pt-5 pb-10 px-3 d-flex justify-content-center">
        <p className="text-muted d-flex align-items-center gap-2 fw-light">
          Have a nice Frontend
          <IconHeart color="red" size={16}></IconHeart>
        </p>
      </footer>
    </>
  );
};

export default Footer;
