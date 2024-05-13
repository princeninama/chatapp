import React, { useEffect, useRef } from "react";
import { UsegetMessage } from "../../API/Messageinfo";
import Message from "./Message";
const Msg = () => {
  const { message } = UsegetMessage();
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [message]);
  return (
    <div>
      {message.length > 0 &&
        message.map((msg) => {
          <div key={msg._id} ref={lastMessageRef}>
            <Message message={msg} />
          </div>;
        })}

      {message.length === 0 && (
        <p className="text-center">Send a message to start Conversation</p>
      )}
    </div>
  );
};

export default Msg;
