import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix Logo"
      />
      <div className="nav--left">
        <ul className="nav__list">
          <li className="nav__item">
            <button className="nav__link nav__link--selected">Home</button>
          </li>
          <li className="nav__item">
            <button className="nav__link">TV Shows </button>
          </li>
          <li className="nav__item">
            <button className="nav__link">Movies </button>
          </li>
          <li className="nav__item">
            <button className="nav__link">New Popular </button>
          </li>
        </ul>

        <img
          className="search"
          src="https://upload.wikimedia.org/wikipedia/commons/1/14/Search-icon.png"
          alt="search"
        />
        <img
          className="gift"
          src="https://upload.wikimedia.org/wikipedia/commons/2/22/Gift-dynamic-gradient.png"
          alt="gift"
        />
        <img
          className="notification"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Echo_bell2.svg"
          alt=" bell"
        />
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Netflix Logo"
        />
      </div>
    </div>
  );
}

export default Nav;
