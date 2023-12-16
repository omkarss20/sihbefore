import React from "react";
import GoogleButton from "react-google-button";
import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};
const ChatSignIn = () => {
  return (
    <div>
      <GoogleButton onClick={googleSignIn} />
    </div>
  );
};

export default ChatSignIn;
