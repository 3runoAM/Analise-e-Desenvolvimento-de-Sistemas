import "./App.css";
import { useState } from "react";

export default function App() {
  const [questManager, setQuestManager] = useState({
    isLoading: true,
    quests: null,
  });

  async function getData() {
    fetch("./public/quests.json")
      .then((result) => result.json())
      .then((data) =>
        setQuestManager({ isLoading: false, quests: data.quests })
      )
      .catch((err) => console.log(err));
  }

  if (questManager.isLoading) {
    getData();
    return <p>Dados sendo carregados...</p>;
  } else if (!questManager.isLoading && questManager.quests == null) {
    return <p>Nenhuma missão encontrada.</p>;
  } else {
    return (
      <ul>
        {questManager.quests.map((quest) => (
          <li>{quest.title}</li>
        ))}
      </ul>
    );
  }
}
