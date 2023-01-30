import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";

import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const auth = getAuth();

function Home() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col lg:flex-row w-full transition-all border-b-2">
        <div className="p-8 bg-neutral/50 transition-all w-80">
          <h1 className="text-2xl text-primary">NuRem</h1>

          <p className="opacity-75">NuRem Developer Tools</p>
        </div>

        <div className="flex-grow flex flex-row transition-all hover:z-50">
          <Link
            to="/IdeaGen"
            className="p-8 bg-neutral/80 basis-1/3 transition-all hover:bg-black hover:shadow-lg hover:-translate-y-5 hover:z-50"
          >
            <h1 className="text-xl text-accent">IdeaGen</h1>

            <p className="opacity-75">Generate app ideas using AI</p>
          </Link>

          <div className="p-8 bg-neutral/80 basis-1/3 transition-all hover:bg-black hover:shadow-lg hover:-translate-y-5 hover:z-50">
            <h1 className="text-xl text-accent">Workbook</h1>

            <p className="opacity-75">Keep track of your projects</p>
          </div>

          <div className="p-8 bg-neutral/80 basis-1/3 transition-all hover:bg-black hover:shadow-lg hover:-translate-y-5 hover:z-50">
            <h1 className="text-xl text-accent">Build tools</h1>

            <p className="opacity-75">
              Automatically build and release your project
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full transition-all">
        <div className="p-8 bg-neutral/50 transition-all w-80">
          <h1 className="text-2xl text-primary">NuRem Apps</h1>

          <p className="opacity-75">NuRem Apps</p>
        </div>

        <div className="flex-grow flex flex-row transition-all hover:z-50">
          <Link
            to="/IdeaGen"
            className="p-8 bg-neutral/80 basis-1/3 transition-all hover:bg-black hover:shadow-lg hover:-translate-y-5 hover:z-50"
          >
            <h1 className="text-xl text-accent">Omnipetal</h1>

            <p className="opacity-75">
              Make and manage minecraft servers remotely
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
