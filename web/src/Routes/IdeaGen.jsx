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
      <h1>IDEAGEN</h1>
    </>
  );
}

export default IdeaGen;
