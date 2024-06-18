import axios from "axios";
import { useState, useEffect } from "react";
import useConversation from "../Zustand/Conversation";
import toast from "react-hot-toast";
import { useSocketContext } from "../components/context/SocketContext";
import notification from "../assets/notification.mp3"

export const GetUserForSidebar = () => {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversation = async () => {
      try {
        const res = await axios.get("http://localhost:80/api/users/get", {
          withCredentials: true,
        });

        const conversationsWithImages = res.data.map(conversation => {
          const imageData = `data:${conversation.ProfilePic.contentType};base64,${conversation.ProfilePic.data}`;
          return { ...conversation, imageData };
        });

        setConversations(conversationsWithImages);
      } catch (error) {
        toast.error(error.message);
      }
    };

    getConversation();
  }, []);

  return conversations;
};


export const UsegetMessage = () => {
  const { messages, setMessages, selectConversation } = useConversation();

  useEffect(() => {
    const getMessage = async () => {
      if (!selectConversation?._id) {
        console.log("No selectConversation or _id is undefined");
        return;
      }
      console.log("http://localhost:80/api/msg/" + selectConversation._id);
      try {
        const res = await axios.get(
          "http://localhost:80/api/msg/" + selectConversation._id,
          {
            withCredentials: true,
          }
        );
        const data = await res.data;
        // console.log("Data of msg is", data);
        setMessages(data);
      } catch (error) {
        console.log("An error occurred on get message api", error);
      }
    };

    console.log(
      "useEffect triggered with selectConversation:",
      selectConversation
    );
    getMessage();
  }, [selectConversation?._id, setMessages]);

  return { messages };
};

export const UseSendMessage = () => {
  const { messages, setMessages, selectConversation } = useConversation();

  const SendMsg = async (message, senderId) => {
    if (!selectConversation || !selectConversation._id) {
      console.log("No conversation selected or conversation ID is missing.");
      return;
    }
    // console.log("at api of send msg", message, senderId);
    // console.log("msg sent to", selectConversation._id);

    const response = await axios.post(
      `http://localhost:80/api/msg/send/${selectConversation._id}`,
      {
        message,
        senderId,
      },
      {
        withCredentials: true,
      }
    );
    const data = await response.data;
    // console.log("i send this data: " + data);
    setMessages([...messages, data]);
  };
  return SendMsg;
};

export const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      const sound=new Audio(notification)
      sound.play();
      console.log("played")
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};
