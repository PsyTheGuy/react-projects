import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const showSubmenu = (e) => {
    const text = e.target.textContent;
    const { width, bottom, left } = e.target.getBoundingClientRect();
    const center = left + width / 2;
    const top = bottom - 3;
    openSubmenu(text, { center, top });
  };

  const hideSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  return (
    <nav className="nav" onMouseOver={hideSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img className="nav-logo" src={logo} alt="logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={(e) => showSubmenu(e)}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={(e) => showSubmenu(e)}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={(e) => showSubmenu(e)}>
              company
            </button>
          </li>
        </ul>
      </div>
      <button className="btn signin-btn">Sign in</button>
    </nav>
  );
};

export default Navbar;
