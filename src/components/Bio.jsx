import React from "react";
import BioPhoto from "../assets/RandCbowness.jpg";
export default function Bio() {
  return (
    <div className="bio-container">
      <p className="bio-word-container">
        <h2 className="bio">
          Growing up in a family of photographers, I developed a deep
          fascination with shooting images that tell stories.
        </h2>
        <h2 className="bio">
          As a result, I began documenting my progress by combining my interest
          in coding and creating a photography website to show my portfolio.
        </h2>
        <h2 className="bio">
          This website is built with React, HTML, and CSS. It is my first
          project that got me hooked on web dev and software engineering. Since
          this website I have built nunmerous applications and devoted myself to
          be a life-long learner in the software field.
        </h2>
      </p>
      <span>
        <img src={BioPhoto} alt="" className="bio-img" />
      </span>
    </div>
  );
}
