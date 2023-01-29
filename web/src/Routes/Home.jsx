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
    <div className="flex w-full">
      <div className="flex flex-col lg:flex-row w-full transition-all lg:hover:translate-y-10 hover:z-40">
        <div className="p-8 bg-neutral/50 transition-all">
          <h1 className="text-2xl text-primary">NuRem</h1>

          <p className="opacity-75">NuRem Developer Tools</p>
        </div>

        <Link
          to="/IdeaGen"
          className="p-8 bg-neutral/80 flex-grow transition-all hover:bg-black hover:shadow-lg hover:-translate-y-5 hover:z-50"
        >
          <h1 className="text-xl text-accent">IdeaGen</h1>

          <p className="opacity-75">Generate app ideas using AI</p>
        </Link>

        <div className="p-8 bg-neutral/80 flex-grow transition-all hover:bg-black hover:shadow-lg hover:-translate-y-5 hover:z-50">
          <h1 className="text-xl text-accent">Workbook</h1>

          <p className="opacity-75">Keep track of your projects</p>
        </div>

        <div className="p-8 bg-neutral/80 flex-grow transition-all hover:bg-black hover:shadow-lg hover:-translate-y-5 hover:z-50">
          <h1 className="text-xl text-accent">Build tools</h1>

          <p className="opacity-75">
            Automatically build and release your project
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
