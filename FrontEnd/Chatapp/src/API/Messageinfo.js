import axios from "axios";
import { useState, useEffect } from "react";
import useConversation from "../Zustand/Conversation";
import toast from "react-hot-toast";
// import { useSocketContext } from "../components/context/SocketContext";

export const GetUserForSidebar = () => {
  const [conversations, setConversation] = useState([]);
  useEffect(() => {
    const getConversation = async () => {
      try {
        // console.log("at api call getConversation");
        const res = await axios.get("http://localhost:80/api/users/get", {
          withCredentials: true,
        });
        console.log("value from backend",res.data);
        const data = res.data;
        setConversation(data);
        // console.log("conversation is ", conversation);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getConversation();
  }, []);
  return conversations;
};

export const UsegetMessage = () => {
  const { messages, setMessages, selectedConversation } = useConversation();
  useEffect(() => {
    const getMessage = async () => {
      try {
        const res = await axios.post(
          `http://localhost:80/api/msg/${selectedConversation._id}`
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
        `http://localhost:80/api/msg/send/${selectedConversation._id}`,
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

// export const useListenMessages = () => {
//   const { socket } = useSocketContext();
//   const { messages, setMessages } = useConversation();

//   useEffect(() => {
//     socket?.on("newMessage", (newMessage) => {
//       setMessages([...messages, newMessage]);
//     });

//     return () => socket?.off("newMessage");
//   }, [socket, setMessages, messages]);
// };
