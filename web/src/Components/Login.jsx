import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";

import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithRedirect,
} from "firebase/auth";

const auth = getAuth();

function Login() {
  return (
    <>
      <input type="checkbox" id="loginModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="divider mt-0">Login with service</div>
          <div className="flex flex-row space-x-2 justify-center">
            <button
              className="btn w-32"
              onClick={() => {
                const provider = new GoogleAuthProvider();

                signInWithRedirect(auth, provider)
                  .then((result) => {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const credential =
                      GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    // The signed-in user info.
                    const user = result.user;
                    window.location.reload(false);
                    // ...
                  })
                  .catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.customData.email;
                    // The AuthCredential type that was used.
                    const credential =
                      GoogleAuthProvider.credentialFromError(error);
                    // ...
                  });
              }}
            >
              Google
            </button>
            <button
              className="btn w-32"
              onClick={() => {
                const provider = new GithubAuthProvider();

                signInWithRedirect(auth, provider)
                  .then((result) => {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const credential =
                      GithubAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    // The signed-in user info.
                    const user = result.user;
                    window.location.reload(false);
                    // ...
                  })
                  .catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.customData.email;
                    // The AuthCredential type that was used.
                    const credential =
                      GithubAuthProvider.credentialFromError(error);
                    // ...
                  });
              }}
            >
              Github
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
