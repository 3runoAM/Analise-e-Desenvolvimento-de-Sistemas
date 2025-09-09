import { useState } from "react";
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";

export default function MessageManager() {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div>
      <MessageList messageList={messages} />
      <MessageForm addMessage={addMessage} />
    </div>
  );
}
