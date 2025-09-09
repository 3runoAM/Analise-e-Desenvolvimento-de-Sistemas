import "./App.css";
import { useState } from "react";
import Quest from "./components/Quest";
import NoQuestFound from "./components/NoQuestFound";
import Loading from "./components/Loading";

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
    return <Loading></Loading>;
  } else if (!questManager.isLoading && questManager.quests == null) {
    return <NoQuestFound></NoQuestFound>;
  } else {
    return <Quest questList={questManager.quests}></Quest>;
  }
}
