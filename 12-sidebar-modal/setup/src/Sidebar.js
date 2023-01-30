import React, { useContext } from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { AppContext } from "./context";

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(AppContext);

  return (
    <section className={`sidebar ${isSidebarOpen && "show-sidebar"}`}>
      <header className="sidebar-header">
        <img className="logo" src={logo} alt="logo" />
        <button className="close-btn" onClick={() => setIsSidebarOpen(false)}>
          <FaTimes />
        </button>
      </header>
      <ul className="links">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>
                {link.icon}
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((social) => {
          return (
            <li key={social.id}>
              <a href={social.url}>{social.icon}</a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Sidebar;
