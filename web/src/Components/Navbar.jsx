import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";

import { getAuth } from "firebase/auth";

import Login from "./Login.jsx";

const auth = getAuth();

function Navbar() {
  const [profilePic, setProfilePic] = useState(0);
  const [profileName, setProfileName] = useState(0);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setProfilePic(user.photoURL);
        setProfileName(user.displayName);
      }
    });
  });

  return (
    <div className="navbar border-b border-primary shadow-xl shadow-primary/5 text-white sticky top-0 p-0 z-50 bg-neutral">
      <Login></Login>
      <div className="px-5 text-center align-middle draggable">
        <h1 className="font-bold text-[12pt] italic">NuRem</h1>
      </div>
      <div className="menu flex-row space-x-2 items-center">
        <li>
          <Link
            className="active:bg-primary rounded-lg transition-all py-2"
            to="/"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            className="active:bg-primary rounded-lg transition-all py-2"
            to="/IdeaGen"
          >
            IdeaGen
          </Link>
        </li>
      </div>

      <div className="flex-grow"></div>

      <div className="flex flex-row space-x-3"></div>

      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost rounded-btn space-x-2">
          <h1>{profileName}</h1>
          <img
            src={profilePic}
            className="rounded-full h-10 justify-center mr-2"
          />
        </label>
        <ul
          tabIndex={0}
          className="menu dropdown-content p-2 shadow bg-neutral rounded-box w-52 mt-4"
        >
          <li>
            <label htmlFor="loginModal">Login</label>
          </li>
          <li>
            <a
              onClick={() => {
                auth.signOut().then(() => {
                  window.location.reload(false);
                });
              }}
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
