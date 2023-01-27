import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";
function Navbar() {
  const [activeTab, setActiveTab] = useState(
    useLocation().pathname.split("/")[1]
  );

  return (
    <div className="navbar text-white sticky top-0 p-0 z-50 bg-neutral">
      <div className="px-5 text-center align-middle draggable">
        <h1 className="font-bold text-[12pt] italic">NuRem</h1>
      </div>
      <div className="tabs space-x-2 items-center">
        <Link
          className={
            activeTab == "home"
              ? "tab text-white tab-active text-[11pt] hover:bg-primary/50 rounded-lg transition-all"
              : "tab text-white text-[11pt] hover:bg-primary/50 rounded-lg transition-all"
          }
          onClick={() => setActiveTab("home")}
          to="/"
        >
          Home
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
