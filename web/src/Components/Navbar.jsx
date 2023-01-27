import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";

import { getAuth } from "firebase/auth";

const auth = getAuth();

function Navbar() {
  const [activeTab, setActiveTab] = useState(
    useLocation().pathname.split("/")[1]
  );

  const [profilePic, setProfilePic] = useState(0);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setProfilePic(user.photoURL);
      }
    });
  });

  return (
    <div className="navbar border-b border-primary shadow-xl shadow-primary/5 text-white sticky top-0 p-0 z-50 bg-neutral">
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

      <div className="flex-grow p-3"></div>

      <div>
        <img
          src={profilePic}
          className="rounded-full h-10 justify-center mr-2"
        />
      </div>
    </div>
  );
}

export default Navbar;
