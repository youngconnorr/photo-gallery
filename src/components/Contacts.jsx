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
              href="https://www.linkedin.com/in/connor-young-9692aa270/"
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

          <p className="contact-email">Youngconnor2004@gmail.com</p>
        </p>
      </div>
    </div>
  );
}
