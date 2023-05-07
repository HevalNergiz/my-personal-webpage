import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BgWide from "../assets/img/wide-bg-ephesus.webp";
import BgMobile from "../assets/img/phone-bg-ephesus.webp";
const BgImage = (props) => {
  return (
    <div className="my-bg-component">
      <LazyLoadImage
        className="d-none d-md-block"
        src={BgWide}
        alt={props.alt}
        height={props.alt}
        width={props.width}
      />
      <LazyLoadImage
        className="d-block d-md-none"
        src={BgMobile}
        alt={props.alt}
        height={props.alt}
        width={props.width}
      />
    </div>
  );
};

export default BgImage;
