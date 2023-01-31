import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <div
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <aside className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        {sublinks.map((sublink, index) => {
          const { links, page } = sublink;
          return (
            <article key={index}>
              <h4>{page}</h4>
              <div className="sidebar-sublinks">
                {links.map((link, index) => {
                  const { url, icon, label } = link;
                  return (
                    <a key={index} href={url}>
                      {icon}
                      {label}
                    </a>
                  );
                })}
              </div>
            </article>
          );
        })}
      </aside>
    </div>
  );
};

export default Sidebar;
