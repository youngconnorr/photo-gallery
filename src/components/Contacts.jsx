import React from "react";

export default function Contacts() {
  return (
    <div className="back-of-panel">
      <div className="panel">
        <p>
          <h2 className="contact-link-name  ">Github</h2>
          <button className="contact-button">
            <a
              href="https://github.com/youngconnorr"
              className="contact-button-a"
              target="_blank"
              rel="noreferrer"
            >
              Projects
            </a>
          </button>
        </p>
        <p>
          <h2 className="contact-link-name ">LinkedIn</h2>
          <button className="contact-button">
            <a
              href="https://www.linkedin.com/in/conryoung"
              className="contact-button-a"
              target="_blank"
              rel="noreferrer"
            >
              Profile
            </a>
          </button>
        </p>
        <p>
          <h2 className="contact-link-name ">Email</h2>
          <button className="contact-button" href="mailto:conryoung4@gmail.com">
            <a
              href="mailto:conryoung4@gmail.com"
              className="contact-button-a"
              target="_blank"
              rel="noreferrer"
            >
              Connect
            </a>
          </button>
        </p>
      </div>
    </div>
  );
}
