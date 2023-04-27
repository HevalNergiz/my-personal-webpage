import React from "react";
import Image from "react-image-webp";
const Profile = () => {
  return (
    <div className="d-flex gap-md-4 gap-3 flex-column flex-sm-row">
      <Image
        className="rounded-circle black-and-white object-fit-cover"
        src={require("../assets/img/IMG_4494.webp")}
        webp={require("../assets/img/IMG_4494.webp")}
        width={120}
        height={120}
      />

      <div className="d-flex gap-1 flex-column justify-content-center">
        <h1 className="mb-0 h2 fw-normal">Heval Nergiz</h1>
        <h2 className="mb-0 h5 fw-light text-muted">
          UI &amp; Frontend Developer in Izmir
        </h2>
        <p className="mb-0 fw-light text-muted">
          <a className="text-decoration-none" href="mailto:ben@hevalnergiz.com">
            <span style={{ color: "rgb(108, 117, 125)" }}>
              ben@hevalnergiz.com
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Profile;
