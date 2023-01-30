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

function IdeaGen() {
  return (
    <>
      <div className="flex w-full">
        <div className="">
          <h1 className="text-2xl font-bold">IdeaGen</h1>
        </div>
      </div>
    </>
  );
}

export default IdeaGen;
