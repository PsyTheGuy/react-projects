import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext } from "./context";

const Home = () => {
  const { setIsModalOpen, isSidebarOpen, setIsSidebarOpen } =
    useContext(AppContext);
  return (
    <main>
      {!isSidebarOpen && (
        <button
          className="sidebar-toggle"
          onClick={() => setIsSidebarOpen(true)}
        >
          <FaBars />
        </button>
      )}
      <button className="btn" onClick={() => setIsModalOpen(true)}>
        show modal
      </button>
    </main>
  );
};

export default Home;
