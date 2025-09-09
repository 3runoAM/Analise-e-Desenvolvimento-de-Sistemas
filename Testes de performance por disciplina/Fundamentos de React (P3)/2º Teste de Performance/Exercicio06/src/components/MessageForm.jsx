import { useState } from "react";

export default function MessageForm({ addMessage }) {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (message.trim().length == 0) return;
    addMessage(message);
    setMessage("");
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="message">Mensagem: </label>
        <input
          id="message"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
