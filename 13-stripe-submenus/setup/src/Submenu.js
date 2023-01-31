import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const {
    location,
    page: { page, links },
    isSubmenuOpen,
    closeSubmenu,
  } = useGlobalContext();
  const [columns, setColumns] = useState(links.length);
  const container = useRef(null);

  useEffect(() => {
    const submenu = container.current;
    submenu.style.top = `${location.top}px`;
    submenu.style.left = `${location.center}px`;
  }, [location]);

  useEffect(() => {
    setColumns(links.length);
    console.log(container.current);
  }, [page]);

  return (
    <aside
      className={`submenu ${isSubmenuOpen && "show"}`}
      onMouseLeave={closeSubmenu}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center col-${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
