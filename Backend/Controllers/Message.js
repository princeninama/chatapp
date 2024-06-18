import Conversation from "../schema/conversation.js";
import Message from "../schema/msg.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const SendMsg = async (req, res) => {
  // console.log("at backend of send msg");
  try {
    const { message, senderId } = req.body;
    console.log(message);
    const { id: receiverId } = req.params;
    let c = await Conversation.findOne({
      Participants: {
        $all: [senderId, receiverId],
      },
    });
    if (!c) {
      c = await Conversation.create({
        Participants: [senderId, receiverId],
      });
    }
    const newMsg = new Message({
      senderId,
      receiverId,
      message,
    });

    c.message.push(newMsg._id);

    await Promise.all([c.save(), newMsg.save()]);
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      // io.to(<socket_id>).emit() used to send events to specific client
      io.to(receiverSocketId).emit("newMessage", newMsg);
    }
    res.status(200).json(newMsg);
  } catch (error) {
    console.log("Error in Sending Message: " + error);
    res.status(404).json({ error: error.message });
  }
};

export const getMsg = async (req, res) => {
  // console.log("at backedn of get msg");
  try {
    // console.log("here at backend");
    const { id: useridforchat } = req.params;
    const senderId = req.user._id;
    // console.log("sender is ", senderId);
    const conversation = await Conversation.findOne({
      Participants: { $all: [senderId, useridforchat] },
    }).populate("message");

    if (!conversation) {
      return res.status(200).json([]);
    }
    res.status(200).json(conversation.message);
  } catch (error) {
    console.log("Error in GetMsg: " + error);
    res.status(404).json({ error: error.message });
  }
};

