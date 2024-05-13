import axios from "axios";
import { useState, useEffect } from "react";
import useConversation from "../Zustand/Conversation";
import { useSocketContext } from "../components/context/SocketContext"
export const GetUserForSidebar = () => {
  const [conversation, setConversation] = useState([]);
  useEffect(() => {
    const getConversation = async () => {
      try {
        const res = await axios.post("http://localhost:3000/api/users");
        const data = res.json();
        setConversation(data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getConversation();
  }, []);
  return conversation;
};

export const UsegetMessage = () => {
  const { messages, setMessages, selectedConversation } = useConversation();
  useEffect(() => {
    const getMessage = async () => {
      try {
        const res = await axios.post(
          `http://localhost:3080/api/msg/${selectedConversation._id}`
        );
        const data = await res.json();
        setMessages(data);
      } catch (error) {
        console.log("An error occurred on get message api", error);
      }
    };
    if (selectedConversation?._id) getMessage();
  }, [selectedConversation?._id, setMessages]);
  return messages;
};

export const UseSendMessage = () => {
  const { messages, setMessages, selectedConversation } = useConversation();

  const SendMsg = async (message) => {
    try {
      const response = await axios.post(
        `http://localhost:3080/api/msg/send/${selectedConversation._id}`,
        {
          message,
        }
      );
      const data = await response.json();
      setMessages([...messages, data]);
    } catch (error) {
      console.log("error at sending message at api", error);
    }
  };
  return SendMsg;
};

export const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};
