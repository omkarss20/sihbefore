import React from "react";
import { auth } from "./firebase";

const ChatLogout = () => {
  const signOUt = () => {
    signOUt(auth);
  };
  return (
    <button
      onClick={() => auth.signOut()}
      className="bg-gray-200 px-4 py-2 hover:bg-gray-100 mx-4"
    >
      Logout
    </button>
  );
};

export default ChatLogout;
