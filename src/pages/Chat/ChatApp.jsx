import React from "react";

import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatNavbar from "./ChatNavbar/ChatNavbar";
import Chat from "./Chat";

const ChatApp = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <>
      <div className="max-w-[720px] mx-auto text-center">
        <section className="flex flex-col h-full bg-gray-100 mt-10 shadow-xl">
          <ChatNavbar />
          {user ? <Chat /> : null}
        </section>
      </div>
    </>
  );
};

export default ChatApp;
