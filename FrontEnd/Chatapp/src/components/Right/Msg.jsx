import React, { useEffect, useRef } from "react";
import {UsegetMessage} from "../../API/Messageinfo.js";
import Message from "./Message";

const Msg = () => {
  const { messages } = UsegetMessage();
  // const lastMessageRef = useRef();

  // useEffect(() => {
  //   setTimeout(() => {
  //     lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  //   }, 100);
  // }, [messages]);

  // console.log("messages are ", messages);

  return (
    <div>
      {messages.length > 0 &&
        messages.map((msg) => (
          <div key={msg._id}>
            <Message message={msg} />
          </div>
        ))}
      {messages.length === 0 && (
        <p className="text-center">Send a message to start Conversation</p>
      )}
    </div>
  );
};

export default Msg;
