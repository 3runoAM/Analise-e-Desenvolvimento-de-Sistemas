export default function MessageList({ messageList }) {
  return (
    <>
      <ul>
        {messageList.map((message) => (
          <li>Mensagem: {message}</li>
        ))}
      </ul>
    </>
  );
}
